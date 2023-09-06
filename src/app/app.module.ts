import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './cart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProdavnicaComponent } from './prodavnica/prodavnica.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductComponent } from './components/product/product.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GalerijaComponent,
    KontaktComponent,
    ProdavnicaComponent,
    CartComponent,
    CartItemComponent,
    ProductComponent,
    NaslovnaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
