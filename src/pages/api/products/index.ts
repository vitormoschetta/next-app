import Product from "../../../core/models/product"
import ProductRepository from "../reṕositories/productRepository"

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ 
            products: GetAll()
        })
    }
    else {
        res.status(200).json({ 
            method: req.method
        })
    } 
}


function GetAll(): Product[] {
    return new ProductRepository().getAll()
}

