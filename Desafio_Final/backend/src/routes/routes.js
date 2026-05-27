import express from "express"
import items from "./endpoints/items.js"

export default function(app) {
    app
    .use("/items", items)
}