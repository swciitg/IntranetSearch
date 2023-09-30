import { client } from "./elasticClientController.js";

export const createIndex = async (req, res) => {
  if (!req.body.indexName) {
    return res.status(400).json({
      status: "error",
      data: {
        msg: "Index Name not given!",
      },
    });
  }

  const settings = {
    number_of_shards: req.body.shards ? req.body.shards : 20,
    number_of_replicas: req.body.replicas ? req.body.replicas : 1,
  };
  const mappings = {
    properties: {
      embeddings: {
        type: "dense_vector",
        dims: req.body.dim ? req.body.dim : 384,
        index: true,
        similarity: "cosine",
      },
      content: { type: "text" },
      url: { type: "text" },
    },
  };
  await client.indices
    .create({
      index: req.body.indexName,
      settings: settings,
      mappings: mappings,
    })
    .then((response) => {
      return res.status(200).json({
        status: "success",
        data: {
          indexName: response.index,
        },
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: "error",
        data: {
          msg: "Index Creation failed!",
          err: error?.meta?.body?.error?.reason,
        },
      });
    });
};

export const deleteIndex = async(req, res)=>{
  if (!req.body.indexName) {
    return res.status(400).json({
      status: "error",
      data: {
        msg: "Index Name not given!",
      },
    });
  }
    await client.indices.delete({
      index: req.body.indexName
    })
    .then((response)=>{
      console.log(response)
      res.status(200).json({
        status:"success",
        data:{
          msg:`Successfully deleted the index ${req.body.indexName}`
        }
      })
    })
    .catch(error=>{
      return res.status(400).json({
        status: "error",
        data: {
          msg: "Index Deletion failed!",
          err: error?.meta?.body?.error?.reason,
        },
      });
    })
}