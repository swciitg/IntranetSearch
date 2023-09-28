import express from "express";
const router = express.Router();
import {createIndex} from "../controllers/elastic-search/create-index.js";

router.post("/create-index/:indexName", createIndex);

export default router;