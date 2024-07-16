import { Router } from "express";
import { getAllMenu, getMenuName } from "../models/menu";

const router = Router();

router.get("/menu", getAllMenu);
router.get("/menu/:name", getMenuName);

export default router;
