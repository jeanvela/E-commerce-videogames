import { Router } from "express";
import { getPlatform, deletePlatform, createPlatform } from "../controllers/platformControllers";

const router = Router()

router.get("/", getPlatform)
router.post("/", createPlatform)
router.delete("/", deletePlatform)

export default router