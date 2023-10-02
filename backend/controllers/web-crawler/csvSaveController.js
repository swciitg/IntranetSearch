import path from "path";
import url from "url";
import { contentModel } from "../../models/contentModel.js";
import { createObjectCsvWriter, createArrayCsvWriter } from "csv-writer";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const csvSave = async (req, res) => {
  const { csv_name, req_fields } = req.body;
  // csv_name : name of csv_file
  // req_fields = 0 i.e user wants only content to be saved to csv
  // req_fields = 1 i.e user wants content and data in csv
  // req_fields = 2 i.e user wants content, data, and embeddings in csv

  const fields = []; // fields for csv according to user request
  const header = []; // header of csv file

  if (req_fields >= 0) {
    fields.push("content");
    header.push({ id: "content", title: "content" });
  }
  if (req_fields >= 1) {
    fields.push("url");
    header.push({ id: "url", title: "url" });
  }
  if (req_fields >= 2) {
    fields.push("embeddings");
    header.push({ id: "embeddings", title: "embeddings" });
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

  try {
    const allValues = await contentModel.find().select(fields); // fetching from database
    await csvWriter.writeRecords(allValues); // writing to csv file
    res.status(200).json({
      status: "success",
      data: {
        msg: "File Saved Successfully.",
      },
    });
  } catch (error) {
    console.log("ERROR: " + error);
    res.status(400).json({
      status: "error",
      data: {
        msg: error,
        err: error?.meta?.body?.error?.reason,
      },
    });
  }
};
