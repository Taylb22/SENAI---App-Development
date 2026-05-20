export function validateRegister(req, res, next) {
    const {name, password, email} = req.body
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!name) {
        return res.status(400).send({
            error : "invalid name"
        })
    }

    if (!emailRegex.test(email)) {
        return res.status(400).send({
            error : "invalid email"
        })
    }

    next()
}