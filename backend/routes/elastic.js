import express from "express";
const router = express.Router();
import {createIndex, deleteIndex} from "../controllers/elastic-search/indexController.js";

router.post("/create-index", createIndex);
router.post("/delete-index", deleteIndex);

export default router;