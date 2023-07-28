import express, { Express } from "express"
import morgan from "morgan"
import router from "./routes"
import cors from "cors"

const app: Express = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/", router)


export default app