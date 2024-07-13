import { RequestHandler } from "express";
import { Table } from "../types/table";
import * as models from "../models/tables";

const validateRouterTableNo = (no: string) => {
  let tableNo;
  try {
    tableNo = parseInt(no); // "2" => 2
    return tableNo;
  } catch (error) {
    return;
  }
};

export const getAllTable: RequestHandler = (req, res) => {
  //   res.send("Return all table");
  res.json(models.getAllTable());
};

export const getTableByNo: RequestHandler = (req, res) => {
  //   res.send(`Return table ${req.params.no}`);
  let tableNo = validateRouterTableNo(req.params.no);
  if (!tableNo) {
    return res.status(404).send("Error: table no exist");
  }

  res.json(models.getTableByNo(tableNo));
};

export const updateTableByNo: RequestHandler = (req, res) => {
  //   res.send(`Table ${req.params.no} updated`);

  let tableNo = validateRouterTableNo(req.params.no);
  if (!tableNo) {
    return res.status(404).send("Error: table no exist");
  }

  res.json(models.updateTableByNo(tableNo, req.body));
};

// fetch("http://localhost:3001/tables/3", {method: "POST"})
