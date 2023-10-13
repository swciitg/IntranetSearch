import express from "express";
const router = express.Router();
import {crawl} from "../controllers/web-crawler/crawler.js";

router.post("/scrape", crawl);

export default router;