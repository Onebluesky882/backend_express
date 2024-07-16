import express, { RequestHandler } from "express";

const server = express();
import router from "./routes/menu";

server.use("/", router);

server.listen("3080", () => {
  console.log("server is running");
});
