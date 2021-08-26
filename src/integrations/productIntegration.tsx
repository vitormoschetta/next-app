import { useState } from "react"

export default function ProductIntegration() {

    const [code, setCode] = useState(1)
    const [product, setProduct] = useState({})

    async function getProducts() {
        const resp = await fetch(`http://localhost:3000/api/products`)
        const data = await resp.json()
        setProduct(data)
    }    
}