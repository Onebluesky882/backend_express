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
router.get("/menu/:group", getMenuByGroup);
// /menu/id not working
router.get("/menu/:id", getMenuById);
// normal
router.get("/:id", getMenuById);

// update
router.post("/:id", updateMenuById);

// create
router.put("/menu/", addMenuItem);

export default router;
