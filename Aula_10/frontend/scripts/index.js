const form = document.getElementById("form")
const formatt = document.getElementById("formatt")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    console.log(nome, email, senha)
    const response  = await fetch("http://localhost:8080/registro", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)
    carregarUsuarios()
})

async function carregarUsuarios(params) {
    const response = await fetch("http://localhost:8080/usuarios")
    let usuarios = await response.json()
    const tbody = document.getElementById("listaUsuarios")
    tbody.innerHTML = ""

    usuarios = usuarios.usuarios
    usuarios.forEach((user) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${user.nome}</td>   
            <td>${user.email}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario('${user.id}')">Atualizar</button>
            </td>
        `
        tbody.appendChild(tr)
    });
}

async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: "DELETE",
    })
    carregarUsuarios()
}

async function atualizarUsuario(id) {
    const nome = document.getElementById("nomeatt").value
    const email = document.getElementById("emailatt").value
    const senha = document.getElementById("senhaatt").value
    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    carregarUsuarios()
}

window.onload = carregarUsuarios

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nome = document.getElementById("nomeatt").value
    const email = document.getElementById("emailatt").value
    const senha = document.getElementById("senhaatt").value

    console.log(nome, email, senha)
    const response  = await fetch("http://localhost:8080/registro", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)
    carregarUsuarios()
})