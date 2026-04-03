// const people = require("./data.json")
// console.log(people)

//=========================================================================================================

// let data = []
// const source = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"

// async function fetchData() {
//     const response = await fetch(source)
//     data = await response.json()
// }

// async function setData() {
//     await fetchData()

//     const element = document.getElementById("data")
    
//     const reduceData = data.reduce((acc, value) => {
//         if (value.municipio?.microrregiao?.mesorregiao?.UF?.sigla == "PR") {
//             return acc + 1
//         }
//         else {
//             return acc;
//         }
//     }, 0)

//     element.innerHTML = `Quantidade de distritos no Paraná: ${reduceData}`
// }

// setData()

//=========================================================================================================

let users = []
let posts = []

async function fetchData() {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users")
    const postData = await fetch("https://jsonplaceholder.typicode.com/posts")
    users = await userData.json()
    posts = await postData.json()
}

async function setData() {
    await fetchData()

    const all = users.map(element => {
        return {Id : element.id, Name : element.name, Posts : posts.filter(x => x.userId == element.id)
                                                                        .map(x => {
                                                                                    return {id : x.id, title : x.title, body : x.body}
                                                                                    })
                                                                                                                                        }
    })
    
    console.log(all)
}

setData()
