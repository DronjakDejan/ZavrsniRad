import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/components/models/cart-item';
import { Product } from 'src/app/components/models/product';




@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item : CartItem = new CartItem(new Product())
  @Output() removeItem = new EventEmitter<number>()
  @Input() product : Product [] = []


  increment() { this.item.quantity++}

  decrement() {
      this.item.quantity--
      if(this.item.quantity == 0 ) {
        this.removeItem.emit(this.item.id)
      }

  }
  
  
 



 



 

}
