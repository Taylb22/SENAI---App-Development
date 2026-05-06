import express, {response, Router} from "express"
import orderController from "../../controllers/orderController.js"

const router = express.Router()

router
    .get("/view", orderController.getOrders)
    .get("/view/:id", orderController.getOrderById)
    .post("/register", orderController.postOrder)

export default router