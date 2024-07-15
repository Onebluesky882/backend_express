import { RequestHandler } from "express";
import { noodleModels } from "../models/menu";

// handler
export const noodle: RequestHandler = (req, res) => {
  res.json(noodleModels());
};
