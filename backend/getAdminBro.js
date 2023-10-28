
import AdminBro from "admin-bro";
import AdminBroExpress from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";
import { contentModel } from "./models/contentModel.js";
import { link } from "./models/links.js";
import { PlaywrightCrawler } from 'crawlee';

AdminBro.registerAdapter(AdminBroMongoose);
const getAdminRouter = (db, mainRouter) => {
  //Check admin access
  const canModifyUsers = ({ currentAdmin }) => currentAdmin;
  const adminBro = new AdminBro({
    databases: [db],
    branding: {
      companyName: "Intranet Search Engine",
      softwareBrothers: false,
      logo: "https://swc.iitg.ac.in/hab/images/svg/swc-logo.svg",
    },
    resources: [
      {
        resource: contentModel,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
        resource: link,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
          actions: {
            scrapeAll: {
                actionType: "resource",
                component: false,
                handler: async (request,response) => {
                    let links = await link.find();
                    let count=0;
                    let maxRequests=50;
                    const crawlering = new PlaywrightCrawler({
                        requestHandler: async ({ page, request, enqueueLinks }) => {
                        count++;
                        console.log(`Processing: ${request.url}`);
                            let heading ="";
                            let textContent = "";
                            let listItems = "";
                            for (const row of await page.getByRole('heading').all())
                                    heading+=await row.textContent()+" ";
                            heading = heading.replace(/\s+/g, ' ').trim();

                            for (const row of await page.getByRole('paragraph').all())
                                    textContent+=await row.textContent()+" ";
                            textContent = textContent.replace(/\s+/g, ' ').trim();

                            for (const row of await page.getByRole('listitem').all())
                                    listItems+=await row.textContent()+"\n";
                            listItems = listItems.replace(/\s+/g, ' ').trim();
                            listItems = listItems.replace('- + हिन्दी', '').trim();
                            
                            const results = new contentModel({
                                url: request.url,
                                content: textContent,
                                heading: heading,
                                listItems: listItems,
                            });
                            await results.save();
                            await enqueueLinks();
                        },
            
                    // Let's limit our crawls to make our tests shorter and safer.
                    maxRequestsPerCrawl: maxRequests||50,
                });
                links.map(async (link) => {
                    maxRequests=link.maxRequests;
                    await  crawlering.run([link.url]);
                });
                // await  crawlering.run([url]);
                response.status(200).json({
                    status: "success",
                    data: {
                      UrlScraped: count,
                    },
                  });
                 }
                
                },
            scrape: {
              actionType: "record",
              component: false,
              handler: async (request,response,context) => {
                  let linktoscrape = await link.findById(context.record.params._id);
                  let count=0;
                  let maxRequests=Number(linktoscrape.maxRequests);
                  const crawlering = new PlaywrightCrawler({
                      requestHandler: async ({ page, request, enqueueLinks }) => {
                      count++;
                      console.log(`Processing: ${request.url}`);
                          let heading ="";
                          let textContent = "";
                          let listItems = "";
                          for (const row of await page.getByRole('heading').all())
                                  heading+=await row.textContent()+" ";
                          heading = heading.replace(/\s+/g, ' ').trim();

                          for (const row of await page.getByRole('paragraph').all())
                                  textContent+=await row.textContent()+" ";
                          textContent = textContent.replace(/\s+/g, ' ').trim();

                          for (const row of await page.getByRole('listitem').all())
                                  listItems+=await row.textContent()+"\n";
                          listItems = listItems.replace(/\s+/g, ' ').trim();
                          listItems = listItems.replace('- + हिन्दी', '').trim();
                          
                          const results = new contentModel({
                              url: request.url,
                              content: textContent,
                              heading: heading,
                              listItems: listItems,
                          });
                          await results.save();
                          await enqueueLinks();
                      },
          
                  // Let's limit our crawls to make our tests shorter and safer.
                  maxRequestsPerCrawl: maxRequests||50,
              });
              await  crawlering.run([linktoscrape.url]);
              response.status(200).json({
                  status: "success",
                  data: {
                    UrlScraped: count,
                  },
                });
              
            },
          }
        }
      },
    },
    ],
    rootPath: `/admin`,
    loginPath: `/admin/login`,
    logoutPath: `/admin/logout`,
  });

  // Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: async (email, password) => {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;
        if (email === adminEmail && adminPass === password) {
          return { email, role: "admin" };
        }
        return false;
      },
    },
    null,
    {
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      resave: true,
      saveUninitialized: true,
    }
  );

  return router;
};

export default getAdminRouter;
