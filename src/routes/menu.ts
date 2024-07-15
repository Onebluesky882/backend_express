import { Router } from "express";
import { noodle } from "../handlers/menu";

const router = Router();

router.get("/noodle", noodle);
router.get("/noodle/:no", noodle);
router.post("/noodle/:no", noodle);

export default router;
