import { response } from "express";
import connection from "../database/db.js"

export function getAll(req, res) {
    connection.query("SELECT * FROM V_items",
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            } else {
                return res.status(200).send(response)
            }
        }
    )
}

export function getById(req, res) {
    const {id} = req.params
    connection.query("SELECT * FROM V_items WHERE id_item = ?", [id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            } else {
                return res.status(200).send(response)
            }
        }
    )
}

export function register(req, res) {
    const {item, found_date, found_place,
            description, status} =  req.body

    connection.query(`INSERT INTO tb_itens VALUES
                    (default, ?, ?, ?, ?, ?)`,
                    [item, found_date, found_place, description, status],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            } else {
                return res.status(200).send({
                    success : "Item registered sucesfully"
                })
            }
        })
}

export function patchStatus(req, res) {
    const {id} = req.params
    const {statusId} = req.body

    connection.query(`UPDATE tb_itens
                      SET id_status = ?
                      WHERE id_item = ?`,
                    [statusId, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    error_message : err.message
                })
            } else {
                return res.status(200).send({
                    success : "Item status updated successfully"
                })
            }
        })
}

export function erase(req, res) {
    const {id} = req.params
    
    connection.query(`DELETE FROM tb_itens
                      WHERE id_item = ?`,
                    [id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    error_message : err.message
                })
            } else {
                return res.status(200).send({
                    success : "Item deleted successfully"
                })
            }
        })
}

export function change(req, res) {
    const {id} = req.params
    const {item, found_date, found_place,
            description, status} = req.body

    connection.query(`UPDATE tb_itens SET
                      item = ?,
                      found_date = ?,
                      found_place = ?,
                      description = ?,
                      id_status = ?
                      WHERE id_item = ?`,
                    [item, found_date, found_place, description, status, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    error_message : err.message
                })
            } else {
                return res.status(200).send({
                    success : "Item changed successfully"
                })
            }
        })
}