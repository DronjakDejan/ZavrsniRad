import { Product } from "./product";

export class CartItem extends Product {
    public quantity : number = 1
    
    
    constructor(p :  Product) {
    super() 
    this.id = p.id
    this.title = p.title
    this.price = p.price
    this.img = p.img
    this.description = p.description
    
        
    }

}
