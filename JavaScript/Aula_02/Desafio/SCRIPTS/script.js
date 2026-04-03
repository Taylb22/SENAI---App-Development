// Ambiente de Variáveis
let new_task = document.getElementById("tarefa_new")
let btn_adicionar = document.getElementById("adicionar")
let btn_remover = document.getElementById("remover")
let lista = document.getElementById("lista")

var selected

//Ambiente de Funções
function add_item(){
    let txt = new_task.value.trim()
    if (txt == "") {
        return
    }

    new_task.value = ""

    let new_tag = document.createElement("li")
    new_tag.innerHTML = txt
    new_tag.setAttribute("class", "list_li")

    lista.appendChild(new_tag)
    new_task.focus()
}

function selection(e) {
    if (e.target.id == "lista") {
        return
    }
    
    if (!e.ctrlKey) {
        let elements = document.querySelectorAll("." + "li_selected")

        elements.forEach(element => {
            element.setAttribute("class", "list_li")
        })
    }

    selected = e.target

    if (selected.classList.contains("li_selected")) {
        selected.setAttribute("class", "list_li")
        return
    }

    selected.setAttribute("class", "li_selected")
}

function remove_item() {
    let elements = document.querySelectorAll("." + "li_selected")

    elements.forEach(element => {
        element.remove()
    })
}

// Ambiente de Eventos
btn_adicionar.addEventListener("click", add_item)
btn_remover.addEventListener("click", remove_item)
lista.addEventListener("click", selection)