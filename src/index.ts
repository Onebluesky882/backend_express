import express, { RequestHandler } from "express";

const server = express();
import router from "./routes/menu";
import bodyParser from "body-parser";

server.use(bodyParser.json());
server.use("/", router);

server.listen("3080", () => {
  console.log("server is running");
});
