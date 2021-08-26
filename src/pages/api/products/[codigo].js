export default function handler(req, res) {
    const codigo = req.query.codigo    
    res.status(200).json({ 
        codigo: `ABC-${codigo}`,
        name: 'Product A', 
        price: 5.99,
        method: req.method
    })
}
