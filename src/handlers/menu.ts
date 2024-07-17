import { RequestHandler } from "express";
import * as models from "../models/menu";
import { MenuItem } from "../types/menuItem";

const validateRouterMenu = (group: string) => {
  let menuGroup;
  try {
    menuGroup = group;
    return menuGroup;
  } catch (error) {
    return;
  }
};

const UpdateMenuById = (menuId: string) => {
  let id;
  try {
    id = parseInt(menuId);
    return id;
  } catch (error) {
    return;
  }
};

const CreateNewMenu = ({ id, group, image, name, price }: MenuItem) => {
  try {
    return { id, group, image, name, price };
  } catch (error) {
    return;
  }
};
export const getMenuAll: RequestHandler = (req, res) => {
  res.json(models.getMenuAll());
};

export const getMenuByGroup: RequestHandler = (req, res) => {
  let item = validateRouterMenu(req.params.group);
  if (!item) {
    return res.status(404).send("Error: table no exist");
  }
  res.json(models.getMenuItem(item));
};

export const getMenuById: RequestHandler = (req, res) => {
  let item = UpdateMenuById(req.params.id);
  if (!item) {
    return res.status(404).send("Error: table no exist");
  }
  res.json(models.getMenuById(item));
};

export const updateMenuById: RequestHandler = (req, res) => {
  let item = UpdateMenuById(req.params.id);

  if (!item) {
    return res.status(404).send("Error: table no exist");
  }
  res.json(models.updateItemById(item, req.body));
};

export const addMenuItem: RequestHandler = (req, res) => {
  const newMenu = CreateNewMenu(req.body);
  if (!newMenu) {
    res.status(400).json({ message: "Invalid menu item data" });
    return;
  }
  res.json(models.addMenuItem(newMenu));
};
