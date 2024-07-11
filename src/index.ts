import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

const server = http.createServer(app);
const MONGO_URL = `"mongodb+srv://root:<password>@cluster0.iu5pavu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";`;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

server.listen(8080, () => {
  console.log("hey server's running localhost://8080");
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => console.log(error));
