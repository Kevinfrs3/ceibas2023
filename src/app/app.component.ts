import { Component, OnInit } from '@angular/core';
declare function Carga(archivos: string[]): void;

import { CargarScriptsService } from './cargar-scripts.service';
import { FacebookService } from './components/blog/facebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Las Ceibas';
  

  // Cargar boton de chat
  constructor(
    private cargarScripts: CargarScriptsService,
    private facebookService: FacebookService, // Añade esta línea
  ) { }

  ngOnInit() {
    this.cargarScripts.Carga([
      "owl",
      "appear",
      "audito",
      "isotope",
      "jquery-ui",
      "jquery.bootstrap-touchspin",
      "jquery.fancybox",
      "jquery",
      "jquery.nice-select.min",
      "menu-ani",
      "pagenav",
      "popper.min",
      "scrollbar",
      "wow"
    ]);
  }
}
