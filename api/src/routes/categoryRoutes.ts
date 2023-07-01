import { Router } from "express";
import { getCategories, createCategory, deleteCategory } from "../controllers/categoryControllers";

const router = Router()

router.get("/", getCategories)
router.post("/", createCategory)
router.delete("/", deleteCategory)

export default router