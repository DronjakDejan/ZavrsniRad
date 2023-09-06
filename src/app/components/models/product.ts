export class Product {
    public id = 0
    public title = ""
    public img = ""
    public price = 0
    public description = ""

    constructor(proizvod : any = {} ) {
        this.id = proizvod.id
        this.title = proizvod.title
        this.img = proizvod.img
        this.price = proizvod.price
        this.description = proizvod.description

    }

    priceTo() {
        return  this.price.toFixed(2) + "din"
    }
} 
