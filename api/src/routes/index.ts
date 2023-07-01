import { Router } from "express";
import categoryRoutes from "./categoryRoutes"
import videogameRoutes from "./videogameRoutes"
import platformRoutes from "./platformRoutes"

const router = Router()

router.use("/category", categoryRoutes)
router.use("/videogame", videogameRoutes)
router.use("/platform", platformRoutes)

export default router