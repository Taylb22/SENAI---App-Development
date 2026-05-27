import * as util_general from "../utils/general.js"
import * as util_middleItems from "../utils/middleItems.js"
import connection from "../database/db.js"

export function validateGetById(req, res, next) {
    const id = parseInt(req.params["id"])
    if (!util_general.validateId(id)) {
        return res.status(400).send({
            error : "Validation error",
            error_message : "The provided id is invalid"
        })
    }

    connection.query(`SELECT EXISTS (
                      SELECT 1
                      FROM tb_itens
                      WHERE id_item = ?
                      ) AS item_exists`,
                    [id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    error_message : err.message
                })
            } else if (response[0].item_exists != 1) {
                return res.status(404).send({
                    error : "Validation error",
                    error_message : "The provided id does not exists in the table",
                })
            } else {
                next()
            }
        })
}

export function validateRegister(req, res, next) {

    next()
}