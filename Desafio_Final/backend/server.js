import express from "express"
import cors from "cors"
import initRoutes from "./src/routes/routes.js"

const app = express()
const port = 8080

app.use(express.json())
initRoutes(app)

app.use(cors({
    origin : "http://127.0.0.1:5500"
}))

app.get("/", (req, res) => {
    res.send("Server Running...")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})