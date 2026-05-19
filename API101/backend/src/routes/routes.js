import express from "express"
import users from "./endpoints/users.js"
import orders from "./endpoints/orders.js"
import inventory from "./endpoints/inventory.js"

export default function(app) {
    app
    .use(express.json())
    .use("/users", users)
    .use("/orders", orders)
    .use("/inventory", inventory)
}