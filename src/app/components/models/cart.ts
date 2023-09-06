import { CartItem } from "./cart-item";
import { Product } from "./product";

export class Cart {
    items : Map<number , CartItem> = new Map
    
    totalItems() {
        let total = 0 
        for (let item of this.items.values()) {
            total += item.quantity
        } return total 
    }

    addItem(item_product : Product) {
        if(this.items.has(item_product.id)) {
            const item = <CartItem>this.items.get(item_product.id)
            item.quantity++
        } else {
            const item = new CartItem(item_product)
            this.items.set(item_product.id, item)
        }
    }
    deleteItem(item: number) {
     return   this.items.delete(item)
    }
     getItem() {
       return this.items.values()
     } 

    restart() {
        this.items.clear()
    }

    updateItemQuantity() {
        
    }


    totalPrice(): number {
        let total = 0;
        for (let item of this.items.values()) {
          total += item.quantity * item.price;
        }
        return total;
      }
    }
     
     
     

     
    
    


