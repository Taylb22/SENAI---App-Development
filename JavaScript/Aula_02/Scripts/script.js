function somar() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let result = document.getElementById("res")
    
    result.innerHTML = (n1 + n2)
}

// Alternando entre imagens
function alterar_imagem() {
    let imagem = document.getElementById("imagem")

    if (imagem.src ===
        'https://ih1.redbubble.net/image.5588366995.3970/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg') {
            imagem.setAttribute('src',
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT_hdlp5ADE9XDK8twuJHNPYpRjb-5d_Mnw&s"
        )
    }
    else {
        imagem.setAttribute('src', 'https://ih1.redbubble.net/image.5588366995.3970/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg')
    }
}

// alternando entre cores
function color_change() {
    let square = document.getElementById("q1")

    if (square.style.backgroundColor == "red") {
        square.style.backgroundColor = "blue"
    }
    else {
        square.style.backgroundColor = "red"
    }
}

// Trocar a cor do quadrado ao mudar o input de cor
function color_select(e) {
    let square = document.getElementById("q1")
    
    square.style.backgroundColor = e.target.value
}

let input1 = document.getElementById("i1")
input1.addEventListener("input", color_select) // Monitora a mudança de cor


// Tentativa de causar epilepsia no usuário
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function epilepsia() {
    let square = document.getElementById("q1")

    for (let i = 0; i < 10; i++) {
        if (square.style.backgroundColor == "red") {
            square.style.backgroundColor = "blue"
        }
        else {
            square.style.backgroundColor = "red"
        }

        await(sleep(1000))
    }
}