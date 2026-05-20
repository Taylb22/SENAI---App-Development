import express, {response, Router} from "express"
import * as control from "../../controllers/inventoryController.js"
import * as middle from "../../middleware/inventoryMiddleware.js"

const router = express.Router()

router
    .get('/', control.view)
    .get('/:id', middle.validateGetPecaById) //COlocar a funcao do endpoint
    .post("/register", middle.validateCreatePeca, control.register)
    .put("/update/:id", middle.validateUpdatePeca, control.update)
    .delete("/delete/:id", middle.validateDeletePeca, control.erase)

export default router