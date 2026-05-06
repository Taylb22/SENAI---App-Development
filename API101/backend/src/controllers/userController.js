var users = ["Diego", "Erich", "Cayque", "Lunim", "Henrique"]

export default class userController {
    static getUsers(req, res) {
        try{
            return res.status(200).send(users)
        }catch{
            return res.status(500).send({error : "internal server error"})
        }
    }

    static postUser(req, res) {
        const {name, lastname} = req.body
        try{
            users.push({name : name, lastname : lastname})
            return res.status(200).send({sucess : `The user ${name} ${lastname} was registered sucessfully`})
        }catch{
            return res.status(500).send({error : "Internal server error..."})
        }
    }

    static updateUser(req, res) {
        let idx = req.params
        idx = parseInt(idx["id"])

        if (idx < 0 || idx >= users.length || isNaN(idx)) {
            return res.status(400).send({error : `Provided invalid index...`})
        }

        const {name, lastname} =  req.body
        try{
            users[idx] = {
                name : name,
                lastname : lastname
            }
            return res.status(200).send({sucess : `The user was updated sucessfully`})
        }catch{
            return res.status(500).send({error : `Internal server error...`})
        }
    }

    static deleteUser(req, res) {
        let idx = req.params
        idx = parseInt(idx["id"])

        if (idx < 0 || idx >= users.length || isNaN(idx)) {
            return res.status(400).send({error : "Provided invalid index..."})
        }

        try{
            users.splice(idx, 1)
            return res.status(200).send({sucess : "The user was deleted sucessfully"})
        }catch{
            return res.status(500).send({error : "Internal server error..."})
        }
    }
}