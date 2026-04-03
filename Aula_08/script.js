class User {
    #id
    #name
    #email
    #password
    #active

    constructor (id, name, email, password) {
        if (new.target === User) {
            throw new Error("Proibida instanciar a classe User...")
        }
    
        if (!name ||
            !(email.includes('@')) ||
            password.length < 6) {
                
            throw new Error("Dados de construção inválidos...");
        }

        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
    }

    get_id () {
        return this.#id
    }

    get name () {
        return this.#name
    }

    set name (value) {
        if (value.length == 0) {
            throw new Error("Nome Inválido...")
        }


        this.#name = value
    }

    get email () {
        return this.#email
    }

    set email (value) {
        if (!(value.includes('@'))) {
            throw new Error("Email Inválido...")
        }

        this.#email = value
    }

    set password (value) {
        if (value.length < 6) {
            throw new Error("Senha Inválida...")
        }

        this.#password = value
    }

    verify_password(password) {
        if (password == this.#password) {
            return true
        }

        return false
    }

    deactivate() {
        this.#active = false
    }

    #activate_private() {
        this.#active = true
    }

    activate(key) {
        if (key === "admin") {
            this.#activate_private()
        }
        else {
            throw new Error("Unauthorized access...")
        }
    }

    is_active() {
        return this.#active
    }

    show_data() {
        console.log(`ID -> ${this.#id}`)
        console.log(`NAME -> ${this.#name}`)
        console.log(`EMAIL -> ${this.#email}`)
        console.log(`ACTIVE -> ${this.#active}`)
    }
}

class Admin extends User {
    constructor(id, name, email, password) {
        super(id, name, email, password)
    }

    list_user(user) {
        user.show_data()
    }

    deactivate_user(user) {
        user.deactivate()
    }

    activate_user(user) {
        user.activate("admin")
    }
}

class Client extends User {
    constructor(id, name, email, password) {
        super(id, name, email, password)
    }
}




cliente = new Client("001", "Jorge", "AAAA@AAaA", "382163")
cliente.name = "João"
cliente.email = "DSADUASKB@AA"

cliente2 = new Admin("002", "JANJO", "ADBASDVV@DASYDA", "823031")
// cliente2.deactivate_user(cliente)

console.log()
cliente.show_data()
console.log()
cliente2.show_data()
console.log()