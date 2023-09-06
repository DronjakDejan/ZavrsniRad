import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/components/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product : Product = new Product()
@Output() addToCart = new EventEmitter<Product>()

addToCartClick() {
  this.addToCart.emit(this.product)
}

}
