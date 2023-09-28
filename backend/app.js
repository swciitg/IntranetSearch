import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import elasticRouter from "./routes/elastic.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/elastic-search",elasticRouter);


app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Listening on port ${process.env.PORT || 8080}`)
});