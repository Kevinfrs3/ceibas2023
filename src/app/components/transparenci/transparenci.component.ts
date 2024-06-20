import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface BreadcrumbItem {
  label: string;
  url: string;
}
@Component({
  selector: 'app-transparenci',
  templateUrl: './transparenci.component.html',
  styleUrls: ['./transparenci.component.css']
})
export class TransparenciComponent implements OnInit {

  
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Categoría', url: '/categoria' },
    { label: 'Subcategoría', url: '/subcategoria' },
    { label: 'Producto', url: '/producto' }
  ];

  ngOnInit(): void {
  }
  constructor(private titulo: Title) { 
    titulo.setTitle('Transparencia | Las Ceibas E.S.P');
  }
  

}
