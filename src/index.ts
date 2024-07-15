import express, { RequestHandler } from "express";
import Noodle from "./routes/router";
import bodyParser from "body-parser";
const server = express();

server.use(bodyParser.json());
server.use("/", Noodle);

server.listen("3018", () => {
  console.log("server is running");
});
