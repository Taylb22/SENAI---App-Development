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
    database: "app_program",
    port: 3307
})

if (connection) {
    console.log("Banco conectado")
}
// console.log(connection)

app.delete("/deletar/:id", (req, res) => {
    const {id} = req.params
    try {
        connection.query("DELETE FROM usuarios WHERE id = ?", [id])
        return res.status(200).send({message: `Usuário ${id} deletado com sucesso`})
    }
    catch(e) {
        return res.status(500).send({error: e})
    }
})

app.put("/atualizar/:id", (req, res) => {
    const {id} = req.params
    const {nome, email, senha} = req.body
    try{
        connection.query("UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?", 
            [nome, email, senha, id]
        )
        return res.status(200).send({message: "Usuário atualizado com sucesso!"})
    }
    catch(e) {
        return res.status(500).send({error: e})
    }
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get("/usuarios", (req, res) => {
    connection.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
            return
        }
        res.status(200).send({usuarios : results})
    })
})

app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params
    connection.query("SELECT * FROM usuarios WHERE id = ?", [id],  (err, results) => {
        if(err) {
            return
        }

        res.status(200).send(results[0])
    })
})

app.get("/aprendizes", (req, res) => {
    connection.query("SELECT * FROM aprendizes", (err, results) => {
        if (err) {
            return
        }
        res.status(200).send({aprendizes : results})
    })
})

app.post("/registro", (req, res) => {
    const {nome, email, senha} = req.body
    connection.query("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha])
    res.status(200).send({response : "User registered sucessfully"})
})

app.post("/aprendizes/registro", (req, res) => {
    const {nome, setor, data_nascimento} = req.body
    connection.query("INSERT INTO aprendizes (nome, setor, data_nascimento) VALUES (?, ?, ?)", [nome, setor, data_nascimento])
    res.status(200).send({response : "Apprentice registered sucessfully"})
})