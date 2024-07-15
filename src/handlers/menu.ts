import { RequestHandler } from "express";
import * as models from "../models/nooodleMenu";

export const getNoodle: RequestHandler = (req, res) => {
  res.json(models.getNoodles());
};
