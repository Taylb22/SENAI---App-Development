const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nome = do
    
    cument.getElementById("nome").value
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
})