import express, {response, Router} from "express"
import {view, register, update, erase} from "../../controllers/inventoryController.js"

const router = express.Router()

router
    .get('/', view)
    .post("/register", register)
    .put("/update/:id", update)
    .delete("/delete/:id", erase)

export default router