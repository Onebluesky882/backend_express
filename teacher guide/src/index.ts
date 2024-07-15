import express, { RequestHandler } from "express";
import bodyParser from "body-parser";
// import userRouter from "./routes/users";
import tableRouter from "./routes/tables";

const app = express();

app.use(bodyParser.json());

app.use("/tables", tableRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
