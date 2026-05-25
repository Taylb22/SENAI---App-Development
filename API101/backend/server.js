import express from "express"
import cors from "cors"
import initRoutes from "./src/routes/routes.js"

const app = express()
const port = 8080

app.use(cors({
    origin : "http://localhost:5500"
}))

initRoutes(app)
app.get("/", (req, res) => {
    res.send("The API is working!")
})

app.listen(port, () => {
        console.log(`Server Running at http://localhost:${port}`)
})
