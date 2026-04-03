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

function insert_data(data, id) {
    let container = document.getElementById('container')
    let father = document.createElement('div')
    father.id = id

    id_name = id + ":"
    let title = document.createElement('span')
    title.innerHTML = id_name
    father.appendChild(title)
    
    data.forEach(element => {
        let div = document.createElement('div')
        let span = document.createElement('span')

        span.innerHTML = `${element.name}`
        div.appendChild(span)

        father.appendChild(div)
    });

    container.appendChild(father)
}

let filteredUsers

filteredUsers = users.filter((x) => x.active == true)
insert_data(filteredUsers, "Active")

filteredUsers = users.filter((x) => x.active == false)
insert_data(filteredUsers, "Inactive")

filteredUsers = users.filter((x) => x.role == "dev")
insert_data(filteredUsers, "Dev")

filteredUsers = users.filter((x) => x.role == "designer")
insert_data(filteredUsers, "Designer")

filteredUsers = users.filter((x) => x.role == "manager")
insert_data(filteredUsers, "Manager")

filteredUsers = users.filter((x) => x.role == "data_analyst")
insert_data(filteredUsers, "Analyst")

filteredUsers = users.filter((x) => x.salary > 5000)
insert_data(filteredUsers, "+5000")

filteredUsers = users.filter((x) => x.salary < 4000)
insert_data(filteredUsers, "-4000")

filteredUsers = users.filter((x) => x.age > 30)
insert_data(filteredUsers, "+30")

filteredUsers = users.filter((x) => x.age < 25)
insert_data(filteredUsers, "-25")

filteredUsers = users.filter((x) => x.role == "data_analyst"
                                && x.active == true)
insert_data(filteredUsers, "Analyst + Active")

filteredUsers = users.filter((x) => x.role == "dev"
                                && x.salary > 4000)
insert_data(filteredUsers, "Dev +4000")

filteredUsers = users.filter((x) => x.role == "manager"
                                && x.age > 30)
insert_data(filteredUsers, "Manager +30")