import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Contáctenos | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }
  
  carouselOptions = {
    margin: 10,
    navText: ['', ''],
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true, // Pausar el autoplay al pasar el mouse por encima
    loop: true, // Habilitar el bucle
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
  };
  
  
  
  
  
  slides = [
    { image: '../../../assets/images/PuntosDePago/Logo Banco Caja Social.png', caption: 'Banco Caja Social' },
    { image: '../../../assets/images/PuntosDePago/Logo Banco De Bogota.png', caption: 'Banco De Bogota' },
    { image: '../../../assets/images/PuntosDePago/Logo Bancoomeva.png', caption: 'Bancoomeva' },
    { image: '../../../assets/images/PuntosDePago/Logo Cofaceneiva.png', caption: 'Cofaceneiva' },
    { image: '../../../assets/images/PuntosDePago/Logo Redeban.png', caption: 'Redeban' },
    { image: '../../../assets/images/PuntosDePago/Logo Ultrahuilca.png', caption: 'Ultrahuilca' },
  ];
  
  
}