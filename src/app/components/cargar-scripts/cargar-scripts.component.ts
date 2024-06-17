import { Component, Input, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';

@Component({
  selector: 'app-cargar-scripts',
  template: ''
})
export class CargarScriptsComponent implements OnInit {

  @Input() archivos!: string[];

  constructor(private cargarScripts: CargarScriptsService) { }

  ngOnInit(): void {
    this.cargarScripts.Carga(this.archivos);
  }

}
