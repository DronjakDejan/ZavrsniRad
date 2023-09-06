import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css'] ,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class GalerijaComponent implements OnInit {
    images = [
      {src: '/assets/slike_galerija/galerija-slike.jpg/' , desc: 'slika 1'} ,
      {src: '/assets/slike_galerija/galerija.slike1.jpg/', desc: 'slika 2'} ,
      {src: '/assets/slike_galerija/galerija-slike2.jpg/', desc: 'slika 3'} ,
      {src: '/assets/slike_galerija/galerija-slike3.jpg/', desc: 'slika 4'}
    ] ;

    currentImageIndex = 0;


    ngOnInit() {
      this.rotateImg();
    }

    rotateImg() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 7000); 
    }

    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }

    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }

   

    
  }

  

  

