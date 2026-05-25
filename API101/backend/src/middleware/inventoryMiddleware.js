export function validateCreatePeca(req, res, next) {
    const {name, code, supplier,
           qty, price, stock} = req.body

    if(!name.trim() || name.length < 3) {
        return res.status(400).send({
            error : "Invalid name"
        })
    }

    if(!code.trim()) {
        return res.status(400).send({
            error : "No code provided"
        })
    }

    if(!supplier.trim()) {
        return res.status(400).send({
            error : "No supplier provided"
        })
    }

    if (!Number.isInteger(qty) || qty < 0) {
        return res.status(400).send({
            error : "Invalid quantity"
        })
    }

    if (!Number.isFinite(price) || price <= 0) {
        return res.status(400).send({
            error : "Invalid price"
        })
    }

    if (!Number.isInteger(stock) || stock < 0) {
        return res.status(400).send({
            error : "Invalid stock"
        })
    }

    next()
}

export function validateGetPecaById(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if (!id || !Number.isInteger(id) || id <= 0) {
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    next()
}

export function validateUpdatePeca(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    const {qty, price, stock} = req.body

    if(!Number.isInteger(qty) || qty < 0) {
        return res.status(400).send({
            error : "Invalid qty"
        })
    }

    if(!Number.isFinite(price) || price <= 0) {
        return res.status(400).send({
            error : "Invalid price"
        })
    }

    if(!Number.isInteger(stock) || stock < 0) {
        return res.status(400).send({
            error : "Invalid stock"
        })
    }

    next()
}

export function validateDeletePeca(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }
    next()
}