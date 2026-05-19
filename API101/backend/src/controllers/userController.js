import { response } from "express"
import connection from "../database/db.js"

export default class userController {
    static getUsers(req, res) {
        connection.query(`SELECT  * FROM tb_user`, (err, results) => {
            if (err) {
                return res.status(500).send({error : 
                    
                    "Internal server error"})
            }
            res.status(200).send(results)
        })
    }

    static postUser(req, res) {
        const {name, password, email} = req.body
        
        connection.query(`INSERT INTO tb_user VALUES (default, ?, ?, ?)`,
            [name, password, email], (err, results) => {
                if (err) {
                    return res.status(500).send({
                        error : "Internal server error"
                    })
                }
                res.status(200).send(results)
            }
        )
    }

    static updateUser(req, res) {
        let idx = req.params
        idx = parseInt(idx["id"])

        if (idx <= 0 || isNaN(idx)) {
            return res.status(400).send({error : `Provided invalid index...`})
        }

        const {name, password, email} =  req.body
        connection.query(`UPDATE tb_user 
                        SET
                        name = ?,
                        password = ?,
                        email = ?
                        WHERE id = ?`,
            [name, password, email, idx], (err, response) => {
                if(err) {
                    return res.status(500).send({
                        error : "Internal server error"
                    })
                }

                return res.status(200).send({
                    sucess : "User updated sucesfully"
                })
            }
        )
    }

    static deleteUser(req, res) {
        let idx = req.params
        idx = parseInt(idx["id"])

        if (idx <= 0 || isNaN(idx)) {
            return res.status(400).send({error : "Provided invalid index..."})
        }

        connection.query(`DELETE FROM tb_user
                        WHERE id = ?`,
            [idx], (err, response) => {
                if (err) {
                    return res.status(500).send({
                        error : "Internal server error"
                    })
                }

                return res.status(200).send({
                    sucess : "User deleted sucesfully"
                })
            })
    }
}