import express, { RequestHandler } from "express";
// @ts-ignore
import cors from "cors";

const server = express();
import router from "./routes/menu";
import bodyParser from "body-parser";

server.use(bodyParser.json());
server.use(cors());
server.use("/", router);

server.listen("3080", () => {
  console.log("server is running");
});
