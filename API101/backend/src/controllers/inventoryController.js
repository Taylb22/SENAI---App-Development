import { response } from "express"
import connection from "../database/db.js"
import { parse } from "dotenv"

export function view (req, res) {
    connection.query(`SELECT * FROM tb_estoque`,
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            return res.status(200).send(response)
        }
    )
}

export function register (req, res) {
    const {name, code, supplier,
           qty, price, stock} = req.body
    
    connection.query(`INSERT INTO tb_estoque 
                    VALUES
                    (default, ?, ?, ?, ?, ?, ?)`,
        [name, code, supplier, qty, price, stock],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            return res.status(200).send({
                sucess : "Product registered sucesfully"
            })
        })
}

export function update (req, res) {
    let {id} = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error : "Invalid provided index"
        })
    }
    
    const {qty, price, stock} = req.body

    connection.query(`UPDATE tb_estoque
                    SET
                    quantidade = ?,
                    preco_unitario = ?,
                    estoque = ?
                    WHERE
                    id = ?`,
        [qty, price, stock, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            return res.status(200).send({
                sucess : "Product updated sucesfully"
            })
        })
}

export function erase (req, res) {
    let {id} = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error : "Invalid provided index"
        })
    }

    connection.query(`DELETE FROM tb_estoque
                    WHERE id = ?`,
        [id], (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            return res.status(200).send({
                sucess : "Product deleted sucesfully"
            })
        })
}