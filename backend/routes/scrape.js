import express from "express";
const router = express.Router();
import { csvSave } from "../controllers/web-crawler/csvSaveController.js";

router.post("/save-to-csv", csvSave);

export default router;
