import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import { ProdavnicaComponent } from './prodavnica/prodavnica.component';

const routes: Routes = [
  { path: '', component: NaslovnaComponent },
  { path: 'galerija', component: GalerijaComponent },
  { path: 'kontakt', component: KontaktComponent },
 
  { path: 'prodavnica', component: ProdavnicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
