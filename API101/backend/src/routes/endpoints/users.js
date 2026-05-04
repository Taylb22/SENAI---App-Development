import express, {response, Router} from "express"
const router = express.Router()
var users = ["Diego", "Erich", "Cayque", "Lunim"]

router
    .get("/view", (req, res) => {
        try {
            res.status(200).send({users : users})
        }
        catch {
            res.status(500).send({error : "Internal server error"})
        }
    })
    .post("/register", (req, res) => {
        const {name, last_name} = req.body
        try {
            users.push({name, last_name})
            return res.status(200).send({response : `User ${name} ${last_name} registered sucessfully`})
        }
        catch {
            return res.status(500).send({error : "Internal server error"})
        }
    })
    .put("/update/:id", (req, res) => {
        let idx = req.params
        idx = parseInt(idx["id"])
        const {name, last_name} = req.body
        try{
            users[idx] = {name, last_name}
            return res.status(200).send({update : "User updated sucessfully"})
        }
        catch{
            return res.status(500).send({error : "Internal server error"})
        }
    })
    .delete("/delete/:id", (req, res) => {
        let idx = req.params
        idx = parseInt(idx["id"])
        try{
            users = users.splice(idx, 1)
            return res.status(200).send({delete : "User deleted sucesfully"})
        }
        catch{
            return res.status(500).send({error : "Internal server error"})
        }
    })

export default router