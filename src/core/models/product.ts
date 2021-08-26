export default class Product {
    public id: string
    public name: string
    public price: number

    constructor(name: string, price: number, id: string = null) {
        this.name = name
        this.price = price
        this.id = id
    }   
}