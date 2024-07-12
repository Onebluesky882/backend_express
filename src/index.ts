import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routes/users";

const app = express();

app.use("/api/users", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
