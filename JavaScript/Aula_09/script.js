const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, cliente: "Ana", cidade: "Curitiba", data: "2025-01-10" },
  { id: 2, produto: "Celular", categoria: "Eletrônicos", preco: 2000, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-01-12" },
  { id: 3, produto: "Camiseta", categoria: "Roupas", preco: 80, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-01-15" },
  { id: 4, produto: "Calça", categoria: "Roupas", preco: 120, quantidade: 2, cliente: "Maria", cidade: "Rio de Janeiro", data: "2025-01-20" },
  { id: 5, produto: "Tênis", categoria: "Calçados", preco: 300, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-02-01" },
  { id: 6, produto: "Fone", categoria: "Eletrônicos", preco: 150, quantidade: 4, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-02-03" },
  { id: 7, produto: "Relógio", categoria: "Acessórios", preco: 500, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-02-10" },
  { id: 8, produto: "Mochila", categoria: "Acessórios", preco: 200, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-02-15" },
  { id: 9, produto: "Tablet", categoria: "Eletrônicos", preco: 1800, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-02-18" },
  { id: 10, produto: "Jaqueta", categoria: "Roupas", preco: 250, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-03-01" },
  { id: 11, produto: "Sandália", categoria: "Calçados", preco: 120, quantidade: 2, cliente: "Juliana", cidade: "Salvador", data: "2025-03-03" },
  { id: 12, produto: "Boné", categoria: "Acessórios", preco: 70, quantidade: 3, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-03-05" },
  { id: 13, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-03-10" },
  { id: 14, produto: "Teclado", categoria: "Eletrônicos", preco: 250, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-03-12" },
  { id: 15, produto: "Mouse", categoria: "Eletrônicos", preco: 100, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-03-15" }
];

const group_categoria = vendas.reduce((acc, row) => {
    let found = acc.find((x) => x.categoria === row.categoria)
    if(!(found)) {
        found = {categoria: row.categoria, faturamento: 0, quantidade: 0}
        acc.push(found)
    }

    found.faturamento += (row.preco * row.quantidade)
    found.quantidade += row.quantidade
    return acc
}, [])

const group_cidade = vendas.reduce((acc, row) => {
    let found = acc.find((x) => x.cidade === row.cidade)
    if (!(found)) {
        found = {cidade: row.cidade, faturamento: 0, pedidos: 0, clientes: 0}
        acc.push(found)
    }

    found.faturamento += (row.preco * row.quantidade)
    found.pedidos += 1
    return acc
}, [])

const group_cliente = vendas.reduce((acc, row) => {
    let found = acc.find((x) => x.cliente === row.cliente)
    if (!(found)) {
        found = {cliente: row.cliente, gasto: 0, cidade: ""}
        acc.push(found)
    }

    found.gasto += (row.quantidade * row.preco)
    found.cidade = row.cidade
    return acc
}, [])

const group_produto = vendas.reduce((acc, row) => {
    let found = acc.find((x) => x.produto === row.produto)
    if (!(found)) {
        found = {produto: row.produto, quantidade: 0}
        acc.push(found)
    }

    found.quantidade += row.quantidade
    return acc
}, [])

function month (date) {
    let result
    months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    result = months[parseInt(date.split('-')[1]) - 1]
    return result
}

const group_mes = vendas.reduce((acc, row) => {
    let M = month(row.data)
    let found = acc.find((x) => x.mes === M)

    if (!(found)) {
        found = {mes: M, contagem: 0}
        acc.push(found)
    }

    found.contagem += 1
    return acc
}, [])

const ex1 = document.getElementById("Chart1")


new Chart(ex1, {
    data: {
        labels: group_categoria.map((x) => {return x.categoria}),
        datasets: [
            {
                type: "bar",
                label: "Faturamento por Categoria",
                data: group_categoria.map((x) => {return x.faturamento})
            }
        ]
    }
})

const ex2 = document.getElementById("Chart2")

new Chart(ex2, {
    data: {
        labels: group_categoria.map((x) => {return x.categoria}),
        datasets: [
        {
            type: "pie",
            label: "Quantidade por Categoria",
            data: group_categoria.map((x) => {return x.quantidade})
        }
        ]
    }
})

const ex3 = document.getElementById("Chart3")

new Chart(ex3, {
    data: {
        labels: group_cidade.map((x) => {return x.cidade}),
        datasets: [
            {
                type: "bar",
                label: "Faturamento por Cidade",
                data: group_cidade.map((x) => {return x.faturamento})
            }
        ]
    }
})

const ex4 = document.getElementById("Chart4")

new Chart (ex4, {
    data: {
        labels: group_cidade.map((x) => {return x.cidade}),
        datasets: [
            {
                type: "pie",
                label: "Pedidos por Cidade",
                data: group_cidade.map((x) => {return x.pedidos})
            }
        ]
    }
})

const ex5 = document.getElementById("Chart5")

new Chart (ex5, {
    data: {
        labels: group_cliente.map((x) => {return x.cliente}),
        datasets: [
            {
                type: "bar",
                label: "Gasto por Cliente",
                data: group_cliente.map((x) => {return x.gasto})
            }
        ]
    }
})

const ex6 = document.getElementById("Chart6")

const group_cidade_clientes = group_cliente.reduce((acc, row) => {
    let found = acc.find((x) => x.cidade === row.cidade)
    if (!(found)) {
        found = {cidade: row.cidade, clientes: 0}
        acc.push(found)
    }

    found.clientes += 1
    return acc
}, [])

new Chart (ex6, {
    data: {
        labels: group_cidade_clientes.map((x) => {return x.cidade}),
        datasets: [
            {
                type: "pie",
                label: "Distribuição de Clientes por Cidade",
                data: group_cidade_clientes.map((x) => {return x.clientes})
            }
        ]
    }
})

const ex7 = document.getElementById("Chart7")

new Chart (ex7, {
    data: {
        labels: group_produto.map((x) => {return x.produto}),
        datasets: [
            {
                type: "bar",
                label: "Quantidade Vendida por Produto",
                data: group_produto.map((x) => x.quantidade)
            }
        ]
    }
})

const ex8 = document.getElementById("Chart8")

new Chart (ex8, {
    data: {
        labels: group_categoria.map((x) => x.categoria),
        datasets: [
            {
                type: "pie",
                label: "Faturamento por Categoria",
                data: group_categoria.map((x) => x.faturamento)
            }
        ]
    }
})

const ex9 = document.getElementById("Chart9")

new Chart (ex9, {
    data: {
        labels: group_categoria.map((x) => x.categoria),
        datasets: [
            {
                type: "bar",
                yAxisID: 'A',
                label: "Faturamento",
                data: group_categoria.map((x) => x.faturamento)
            },
            {
                type: "bar",
                yAxisID: 'B',
                label: "Quantidade",
                data: group_categoria.map((x) => x.quantidade)
            }
        ]
    },
    options: {
        scales: {
            A: {
                    type: "linear",
                    position: "left",
                    scalePositionLeft: true
                },
            B: {
                    type: "linear",
                    position: 'right',
                    scalePositionLeft: false
                }
            // plugins: {
            //     title: {
            //         display: true,
            //         text: "Quantidade VS Faturamento por Categoria",
            //         color: "black",
            //         font: {
            //             size: 20,
            //             weigth: "bold"
            //         },
                    // padding: {
                    //     top: 10,
                    //     bottom: 30
                    // }
                // }
            // }
        }
    }
})

const ex10 = document.getElementById("Chart10")

new Chart (ex10, {
    data: {
        labels: group_mes.map((x) => x.mes),
        datasets: [
            {
                type: "bar",
                label: "Quantidade de Vendas por Mês",
                data: group_mes.map((x) => x.contagem)
            }
        ]
    }
})