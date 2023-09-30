import {Client} from "@elastic/elasticsearch"
import dotenv from "dotenv";

dotenv.config();

export const client = new Client({
  node: process.env.ELASTIC_ENDPOINT,
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD
  }
});
