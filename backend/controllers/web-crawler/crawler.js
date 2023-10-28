import { PlaywrightCrawler } from 'crawlee';
import { contentModel } from '../../models/contentModel.js';

export const crawl = async (req, res) => {
        let count=0;
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
        maxRequestsPerCrawl: req.body.maxRequests||50,
    });
    try{
        await  crawlering.run([req.body.url]);
        console.log(count);
        res.status(200).json({
            status: "success",
            data: {
              UrlScraped: count,
            },
          });
    }
    catch(error)
    {
        console.log("ERROR: " + error);
        res.status(400).json({
            status: "error",
            data: {
                msg: error,
            },
        });
    }

};