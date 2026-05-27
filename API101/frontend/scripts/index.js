var data = []
const server = "http://localhost:8080"
const form = document.getElementById("formulario")

async function fetchData() {
    const response = await fetch(`${server}/inventory`)
    data = await response.json()
}

async function setTableData() {
    const table = document.getElementById("table_data")
    table.replaceChildren()
    
    data.forEach((e) => {
        const tr = document.createElement("tr")
        
        tr.innerHTML =  `
            <td> ${e.id} </td>
            <td> ${e.nome_peca} </td>
            <td> ${e.codigo_peca} </td>
            <td> ${e.fornecedor} </td>
            <td> ${e.preco_unitario} </td>
        `

        table.appendChild(tr)
    })
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("nome").value
    const code = document.getElementById("codigo").value
    const supplier = document.getElementById("fornecedor").value
    const qty = document.getElementById("quantidade").value
    const price = document.getElementById("preco").value
    const stock = document.getElementById("estoque").value

    const dataToSend = {
            "name" : name,
            "code" : code,
            "supplier" : supplier,
            "qty" : Number(qty),
            "price" : Number(price),
            "stock" : Number(stock)
        }

    await fetch(`${server}/inventory/register`, {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(dataToSend)
    })

    await fetchData()
    await setTableData()
})

window.addEventListener("load", async (event) => {
    await fetchData()
    await setTableData()
})