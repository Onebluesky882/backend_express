import { getNoodle } from "../handlers/menu";
import { Router } from "express";

const router = Router();

router.get("/noodle", getNoodle);

export default router;
