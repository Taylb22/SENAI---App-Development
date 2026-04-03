class pessoa {
    #nome
    #idade
    #genero

    #trabalho
    #salario

    constructor (nome, idade, genero) {
        this.nome = nome
        this.idade = idade
        this.genero = genero
    }

    vai_trabalhar (trabalho, salario) {
        this.trabalho = trabalho
        this.salario = salario
    }

    trocar_nome_cartorio (novo_nome) {
        this.nome = novo_nome
    }

    cirurgia_de_genero () {
        if (this.genero === "Masculino") {
            this.genero = "Feminino"
        }
        else {
            this.genero = "Masculino"
        }
    }

    fazer_aniversario () {
        this.idade = this.idade + 1
    }
}

class heroi extends pessoa {
    matar_o_vilao () {
        console.log("O VILÃO ESTÁ MORTO!!!")
    }
}

let Neymar = new pessoa("Neymar", 40, "Masculino")
let Tony_Stark = new heroi("Tony Stark", 99, "Masculino")
let Cebolinha = new pessoa("Cebolinha", 2, undefined)

Tony_Stark.vai_trabalhar("Gênio Bilionário Filantropo", Infinity)


Neymar.vai_trabalhar("Jogadô", 900000000.00)
Neymar.cirurgia_de_genero()
Neymar.trocar_nome_cartorio("Neimá")
Neymar.fazer_aniversario()

console.log(Neymar)
console.log(Tony_Stark)
Tony_Stark.matar_o_vilao()
console.log(Cebolinha)

class carro {
    #marca
    #nome
    #cilindragem
    #aceleracao

    #x
    #y
    #angulo

    constructor (marca, nome, cilindragem, aceleracao) {
        this.marca = marca
        this.nome = nome
        this.cilindragem = cilindragem
        this.aceleracao = aceleracao

        this.x = 0
        this.y = 0
        this.angulo = 0
    }

    girar_volante (new_angle) {
        new_angle = new_angle % 360
        this.angulo = new_angle * (Math.PI / 180)
    }

    acelerar () {
        this.x += this.aceleracao * Math.cos(this.angulo)
        this.y += this.aceleracao * Math.sin(this.angulo)
    }

    respawnar () {
        this.x = 0
        this.y = 0
    }
}

// let parati = new carro("VolksWagen", "Parati", 1.6, 5)
// parati.girar_volante(75)
// parati.acelerar()

// console.log(parati)