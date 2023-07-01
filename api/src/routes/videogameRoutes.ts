import { Router } from "express";
import { getVideogames, createVideogame, deleteVideogame, putVideogame } from "../controllers/videoGamesControllers"

const router = Router()

router.get("/", getVideogames)
router.post("/", createVideogame)
router.delete("/", deleteVideogame)
router.put("/", putVideogame)

export default router