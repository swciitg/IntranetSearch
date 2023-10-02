import fs from "fs";
import path from "path";
import url from "url";
import { contentModel } from "../../models/contentModel.js";
import { createObjectCsvWriter, createArrayCsvWriter } from "csv-writer";
import { log } from "console";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const csvSave = async (req, res) => {
  const { csv_name, req_fields } = req.body;
  // csv_name : name of csv_file
  // req_fields: fields required like ["content", "url"] or ["content"] or ["url"]

  if (!csv_name || !req_fields) {
    res.status(400).json({
      status: "error",
      data: {
        msg: "File name and fields to be saved are required",
      },
    });
    return;
  }

  const fields = req_fields; // fields for csv according to user request
  const header = []; // header of csv file

  for (var i = 0; i < fields.length; i++) {
    if (fields[i] === "content") {
      header.push({ id: "content", title: "content" });
    } else if (fields[i] === "url") {
      header.push({ id: "url", title: "url" });
    } else if (fields[i] === "embeddings") {
      header.push({ id: "embeddings", title: "embeddings" });
    } else {
      res.status(400).json({
        // invalid data send in request body
        status: "error",
        data: {
          msg: "valid fields name are content, url, embeddings array",
        },
      });
      return;
    }
  }

  const filePath = path.join(
    // finding destined path of csv file
    __dirname,
    "..",
    "..",
    "..",
    "data",
    csv_name + ".csv"
  );

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: header,
  });

  var records = [];

  try {
    const allValues = await contentModel.find().select(fields); // fetching from database
    records = allValues;
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.status(500).json({
      status: "error",
      data: {
        msg: "Error in fetching data from database",
      },
    });
  }

  try {
    // throw new Error("can't save csv file");
    await csvWriter.writeRecords(records); // writing to csv file
    res.status(200).json({
      status: "success",
      data: {
        msg: "File Saved Successfully.",
      },
    });
  } catch (error) {
    console.log("ERROR: " + error.message);

    fs.unlink(filePath, (err) => {
      if (err && err.code == "ENOENT") {
        // file doesn't exist so no issue
        console.log("File doesn't exist");
      } else if (err) {
        // Error in removing corrupted file
        console.log("ERROR: Error occured while trying to remove file");
      } else {
        // Corrupted file removed
        console.log("Succesfully removed corrupted file");
      }
    });

    res.status(500).json({
      status: "error",
      data: {
        msg: "Error in exporting to csv file",
      },
    });
  }
};
