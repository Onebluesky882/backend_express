import { Router } from "express";
import {
  addMenuItem,
  getMenuAll,
  getMenuByGroup,
  getMenuById,
  updateMenuById,
} from "../handlers/menu";

const router = Router();

router.get("/menu", getMenuAll);
router.get("/menu/:id", getMenuById);
router.get("/menu/category/:group", getMenuByGroup);

// update
router.post("/menu/:id", updateMenuById);

// create
router.put("/menu/", addMenuItem);

export default router;
