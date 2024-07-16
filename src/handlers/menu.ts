import { RequestHandler } from "express";
import * as models from "../models/menu";

const validateMenu = (name: string) => {
  let menuName;
  try {
    menuName = name;
    return menuName;
  } catch (error) {
    return;
  }
};

export const getAllMenu: RequestHandler = (req, res) => {
  res.json(models.getAllMenu());
};

export const getMenuName: RequestHandler = (req, res) => {
  let menuName = validateMenu(req.params.name);
  if (!menuName) {
    return res.status(404).send("error : menu no exist");
  }
  res.json(models.getMenuName(menuName));
};
