// Filter -> Filtrar de um vetor com base em uma condição
// Find -> Encontrar um valor com base em uma condição
// Reduce -> Reduz o vetor para um único valor
// Map -> Transforma um vetor de acordo com uma condição

const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const NameRole = users.map((user) => {
    return {"name" : user.name, "role" : user.role}
})

const onlyNames = users.map((user) => {
    return {"name" : user.name}
})

const UpperNames = users.map((user) => {
    return {"name" : user.name.toUpperCase()}
})

const anual =  users.map((user) => {
    user["salaryAnnual"] = user.salary * 12
    return user
})

const nameAge = users.map((user) => {
    return {"name" : user.name, "age" : user.age}
})

const moeda = users.map((user) => {
    let salary = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(user.salary)

    return {"name" : user.name, "salary" : salary}
})

const senior =  users.map((user) => {
    let senioridade
    if (user.age < 25) {
        senioridade = "Júnior"
    }
    else if(user.age < 30) {
        senioridade = "Pleno"
    }
    else {
        senioridade = "Senior"
    }

    return {"name" : user.name, "age" : user.age, "senioridade" : senioridade}
})

const pobre = users.map((user) => {
    let poor
    if (user.salary < 1000) {
        poor = "Miserável"
    }
    else if (user.salary < 4000) {
        poor = "Pobre"
    }
    else if (user.salary < 6000) {
        poor = "Pobre +"
    }
    else {
        poor = "Pobre ++"
    }

    return {"name" : user.name, "salary" : user.salary, "pobre?" : poor}
})

const ida = users.map((user) => {
    return {"id" : user.id, "name" : user.name, "active" : user.active}
})

const soma_sal = users.reduce((acc, user) => {
    return acc + user.salary
}, 0)

const avr_sal = users.reduce((acc, user) => {
    return acc + user.salary / users.length
}, 0)

const avr_age = users.reduce((acc, user) => {
    return acc + user.age / users.length
}, 0)

const ativo = users.reduce((cont, user) => {
    if (user.active == true) {
        cont = cont + 1
    }
    return cont
}, 0)

const inativo = users.reduce((cont, user) => {
    if (user.active == false) {
        cont = cont + 1
    }

    return cont
}, 0)

const max_sal = users.reduce((maior, user) => {
    if (user.salary > maior) {
        maior = user.salary
    }
    return maior
}, 0)

const min_sal = users.reduce((menor, user) => {
    if (user.salary < menor) {
        menor = user.salary
    }
    return menor
}, users[0].salary)

const sum_ativo = users.reduce((acc, user) => {
    if (user.active == true) {
        acc = acc + user.salary
    }

    return acc
}, 0)

// DESAFIO AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

UwU = users.filter((user) => user.active == true)

const avrSalary = UwU.reduce((acc, user) => {
    let num = acc + user.salary / UwU.length
    return Math.round(num)
}, 0)

const totalSalary = UwU.reduce((acc, user) => {
    acc = acc + user.salary
    return acc
}, 0)

const rolesUniques = UwU.reduce((acc, user) => {
    const x = acc.find(item => item === user.role)
    if (!x) {
        return acc.concat([user.role])
    }
    else {
        return acc
    }
}, [])

let countRole = []
rolesUniques.forEach(element => {
    const x = UwU.reduce((cont, user) => {
        if (user.role == element) {
            cont = cont + 1
        }
        return cont
    }, 0)

    countRole.push({"role" : element, "count" : x})
});

let UmU = UwU.filter((user) => user.salary > 5000)
const mais5000 = UmU.map((user) => {
    return {"name" : user.name, "role" : user.role, "salary" : user.salary}
})

UmU = UwU.filter((user) => user.role == "manager")
const avrAgeManagers = UmU.reduce((acc, user) => {
    return Math.round(acc + user.age / UmU.length)
}, 0)

console.log(avrAgeManagers)