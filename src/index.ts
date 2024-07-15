import express, { RequestHandler } from "express";
import { noodleMenu } from "./data/noodleMenu";
import menuRouter from "./routes/menu";
const server = express();

server.use("/", menuRouter);

server.listen("2000", () => {
  console.log("server is running");
});
