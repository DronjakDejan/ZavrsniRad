import { Component, Input,  } from '@angular/core';
import { Cart } from 'src/app/components/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends Cart {
  @Input() cart = new Cart
  showCart : boolean = false
  


  
  checkOut(): void {
    window.alert("Uspesno ste porucili, Hvala na kupovini") ; 
    this.showCart = false
    this.cart.restart()
   }
  
}
