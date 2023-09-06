import { Component , OnInit } from '@angular/core';

import { Product } from 'src/app/components/models/product';

import { Cart } from '../components/models/cart';

@Component({
  selector: 'app-prodavnica',
  templateUrl: './prodavnica.component.html',
  styleUrls: ['./prodavnica.component.css']
})
export class ProdavnicaComponent implements OnInit {
  products : Product [] = []
  cart : Cart = new Cart 
  
  ngOnInit(): void {
    fetch("/assets/proizvodi_baza.json")
    .then(response => {
        if(response.status == 200) {
          response.json().then(data => {
            for(let item of data) {
              this.products.push(new Product(item))
            }
          })
        }
    })
  }
addToCart(p : Product) {
  this.cart.addItem(p)
}

}
  
