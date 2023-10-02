import { contentModel } from "../../models/contentModel.js";

export const addDummy = async (req, res) => {
  const { content, url, embeddings } = req.body;

  if (!content || !url) {
    res.status(400).json({
      status: "error",
      data: {
        msg: "content and url fields are required",
      },
    });
    return;
  }

  const data = await contentModel.create({
    content,
    url,
    embeddings,
  });

  if (data) {
    res.status(200).json({
      stauts: "success",
      data: {
        msg: "added successfully",
      },
    });
  } else {
    res.status(500).json({
      status: "error",
      data: {
        msg: "Can't add the record",
        err: error?.meta?.body?.error?.reason,
      },
    });
  }
};
