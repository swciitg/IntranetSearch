import express from "express";
const router = express.Router();
import {crawl} from "../controllers/web-crawler/crawler.js";

router.post("/", crawl);

export default router;