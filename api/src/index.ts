import app from "./app"
import { dbConnect } from "./mongoDb"

const port: number = 3001

dbConnect()
app.listen(port, () => {
    console.log(`%s listening at ${port}`)
})