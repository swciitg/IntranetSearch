import { PlaywrightCrawler } from 'crawlee';
import { contentModel } from '../../models/contentModel.js';

export const crawl = async (req, res) => {
        const crawlering = new PlaywrightCrawler({
            requestHandler: async ({ page, request, enqueueLinks }) => {
            console.log(`Processing: ${request.url}`);
                let heading ="";
                let textContent = "";
                let listItems = "";
                for (const row of await page.getByRole('heading').all())
                        heading+=await row.textContent()+" ";
                
                for (const row of await page.getByRole('paragraph').all())
                        textContent+=await row.textContent()+" ";
                
                for (const row of await page.getByRole('listitem').all())
                        listItems+=await row.textContent()+"\n";
                
                const results = new contentModel({
                    url: request.url,
                    content: textContent,
                    heading: heading,
                    listItems: listItems,
                });
                await results.save();
                await page.waitForSelector('a');
                await enqueueLinks({
                    selector: 'a',
                    label: 'LIST',
                });
            },
    
        // Let's limit our crawls to make our tests shorter and safer.
        maxRequestsPerCrawl: req.body.maxRequests||50,
    });
    await crawlering.run([req.body.url]);
    res.send("Crawling done").status(200);

};