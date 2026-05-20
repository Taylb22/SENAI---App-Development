import express, {response, Router} from "express"
import userController from "../../controllers/userController.js"
import * as middle from "../../middleware/userMiddleware.js"
const router = express.Router()

router
    .get("/view", userController.getUsers)
    .post("/register", middle.validateRegister, userController.postUser)
    .put("/update/:id", userController.updateUser)
    .delete("/delete/:id", userController.deleteUser)

export default router