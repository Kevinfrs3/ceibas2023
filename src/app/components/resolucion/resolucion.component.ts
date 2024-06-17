import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolucion',
  templateUrl: './resolucion.component.html',
  styleUrls: ['./resolucion.component.css']
})
export class ResolucionComponent implements OnInit {

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;

  desplegado: boolean = false;

  toggleAcordeon(): void {
  this.desplegado = !this.desplegado;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
