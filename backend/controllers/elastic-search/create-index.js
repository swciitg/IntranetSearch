import {client} from "./elastic-client.js";

export const createIndex = async (req, res) => {
  if (!req.params.indexName) {
    return res.status(400).json({
      status: "error",
      data: {
        msg: "Index Name not given!"
      }
    });
  }
  await client.indices.create({ index: req.params.indexName })
    .then(response => {
      console.log('Index created successfully:', response);
      return res.status(200).json({
        status: "success",
        data: {
          indexName: req.params.indexName
        }
      })
    })
    .catch(error => {
      console.error('Error creating index:', error);
      return res.status(400).json({
        status: "error",
        data: {
          msg: "Index Creation failed!"
        }
      });
    });

};
