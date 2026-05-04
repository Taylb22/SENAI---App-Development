import express from "express"
import users from "./endpoints/users.js"

export default function(app) {
    app
    .use(express.json())
    .use("/users", users)
}