const express = require("express")
const mysql =  require("mysql2")
const cors = require("cors")
const app = express()

const port = 8080

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "sales_crud",
    port: 3307
})

if (connection) {
    console.log("Banco conectado")
}
// console.log(connection)

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})

app.get("/sales", (req, res) => {
    connection.query("SELECT * FROM sales", (err, results) => {
        if (err) {
            return
        }
        res.status(200).send({sales : results})
    })
})

app.post("/sales/insert", (req, res) => {
    const {name, category, qty, price, 
            date, payment, seller} = req.body
    let total = price * qty
    connection.query(`INSERT INTO sales (
                        product_name, 
                        product_category, 
                        qty, 
                        price_unit, 
                        total, 
                        sale_date, 
                        payment_method, 
                        seller
                    ) 
                        VALUES (?, ?, ?, ?, ?, CURRENT_DATE(), ?, ?)`,
        [name, category, qty, price, 
        total, payment, seller]
    )
    res.status(200).send({response : "sale registered sucessfully"})
})

app.delete("/sales/delete/:id", (req, res) => {
    const {id} = req.params
    connection.query("DELETE FROM sales WHERE sale_id = ?",
        [id]
    )
    res.status(200).send({response : "sale deleted sucesfully"})
})

app.put("/sales/update/:id", (req, res) => {
    const {id} = req.params
    const {name, category, qty, price, 
          payment, seller} = req.body
    let total = price * qty
    connection.query(`UPDATE sales SET 
                        product_name = ?, 
                        product_category = ?, 
                        qty = ?, 
                        price_unit = ?, 
                        total = ?,
                        payment_method = ?, 
                        seller = ?
                    WHERE sale_id = ?`,
        [name, category, qty, price, 
        total, payment, seller, id]
    )
    res.status(200).send({response : "sale registered sucessfully"})
})