import express from "express";
const router = express.Router();
import { csvSave } from "../controllers/web-crawler/csvSaveController.js";
import { addDummy } from "../controllers/web-crawler/dummyController.js";

router.post("/save-to-csv", csvSave);
router.post("/add", addDummy);

export default router;
