import express, {response, Router} from "express"
import * as items from "../../controllers/itemsController.js"
import * as middle from "../../middleware/itemsMiddleware.js"

const router = express.Router()
router
    .get("/", items.getAll)
    .get("/:id", middle.validateGetById, items.getById)
    .post("/register", items.register)
    .patch("/patchStatus/:id", items.patchStatus)
    .delete("/delete/:id", items.erase)
    .put("/change/:id", items.change)

export default router