export default function handler(req, res) {
    if (req.method === "GET") {
        handlerGet(req, res)
    }
    else {
        res.status(200).json({ 
            method: req.method
        })
    } 
}

function handlerGet(req, res) {
    res.status(200).json({ 
        name: 'Product A', 
        price: 5.99,
        method: req.method
    })
}

