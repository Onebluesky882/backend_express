import express, { RequestHandler } from "express";
import menuRouter from "./routes/menu";
const server = express();

server.use("/", menuRouter);

server.listen("3010", () => {
  console.log("server is running");
});
