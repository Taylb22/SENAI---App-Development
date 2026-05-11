var orders = []

export default class orderController{
    static getOrders(req, res){
        try{
            return res.status(200).send(orders)
        }catch{
            return res.status(500).send({error : "Internal server error..."})
        }
    }

    static getOrderById(req, res) {
        let {id} = req.params
        id = parseInt(id)

        if (isNaN(id) || id < 0) {
            return res.status(400).send({error : "Provided invalid id..."})
        }

        const order = orderbyID(id)
        if (order === undefined) {
            return res.status(404).send({error : "No order found with the provided id..."})
        }

        try{
            return res.status(200).send(order)
        }catch{
            return res.status(500).send({error : "Internal server error..."})
        }
    }

    static postOrder(req, res) {
        const {id, client, items} = req.body
        try{
            orders.push({
                id : id,
                client : client,
                items : items,
                status : "Ordered",
                total : totalOrder(items)
            })
            return res.status(200).send({sucess : "The order has been registered sucessfully"})
        }catch{
            return res.status(500).send({error : "Internal server error..."})
        }
    }

    static putOrder(req, res) {
        let {id} = req.params
        id = parseInt(id)

        if (isNaN(id) || id < 0) {
            return res.status(400).send({error : "Provided invalid id..."})
        }

        let order = orderbyID(id)
        if (order == undefined) {
            return res.status(404).send({error : "No order found with the provided id..."})
        }
        
        const body = req.body
        try {
            order["client"] = body["client"]
            order["items"] = body["items"]
            order["total"] = totalOrder(body["items"])
            return res.status(200).send({sucess : "The order has been updated sucessfully"})
        } catch (error){
            return res.status(500).send({error : `Internal server error... ${error.message}`})
        }
    }

    static deleteOrder(req, res) {
        let {id} = req.params
        id = parseInt(id)
        
        if (isNaN(id) || id < 0) {
            return res.status(400).send({error : "Provided invalid id..."})
        }

        const index = orders.findIndex((ord) => ord["id"] === id)
        if (index === -1) {
            return res.status(404).send({error : "No order found with the provided id..."})
        }

        try{
            orders.splice(index, 1)
            return res.status(200).send({sucess : "The order has been updated sucessfully"})
        } catch {
            return res.status(500).send({error : "Internal server error..."})
        }
    }
}

function totalOrder(list) {
    const total = list.reduce((acc, x) => {
        acc += x["price"] * x["qty"]
        return acc
    }, 0.0)
    return total
}

function orderbyID(id) {
    return orders.find((x) => x["id"] == id)
}