import { RequestHandler, Router } from "express";
import { getAllTable, getTableByNo, updateTableByNo } from "../handlers/tables";

const router = Router();

const dummyHandler: RequestHandler = async (request, response) => {
  console.log("===req===");
  console.log("method", request.method);
  console.log("path", request.path);
  console.log("query", request.query);
  console.log("params", request.params);
  console.log("body", request.body);
  response.send("Hi 123");
};

// Get all table; path "/tables"
router.get("/", getAllTable);

// Get specific table by no; path "/tables/:no"
router.get("/:no", getTableByNo);

// Update table info => status, cart
router.post("/:no", updateTableByNo);

export default router;
