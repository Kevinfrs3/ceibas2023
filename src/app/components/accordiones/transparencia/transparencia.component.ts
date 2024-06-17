import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.css']
})
export class TransparenciaComponent implements OnInit {
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = true;
  isCollapsed8 = true;
  isCollapsed9 = true;
  isCollapsed10 = true;
  isCollapsed11 = true;
  isCollapsed12 = true;
  isCollapsed13 = true;

  toggleCollapse() {
    this.isCollapsed7 = !this.isCollapsed7;
  }  

  desplegado1: boolean = false;
  desplegado2: boolean = false;

  toggleAcordeon1(): void {
    this.desplegado1 = !this.desplegado1;
  }

  toggleAcordeon2(): void {
    this.desplegado2 = !this.desplegado2;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
