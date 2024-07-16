import { Router } from "express";
import {
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
router.post("/:id", updateMenuById);

export default router;
