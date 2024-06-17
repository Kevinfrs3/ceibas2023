// contador-de-visitas.component.ts

import { Component, OnInit, RendererFactory2  } from '@angular/core';
import { ContadorService } from './contador.service';


@Component({
  selector: 'app-contador-de-visitas',
  templateUrl: './contador-de-visitas.component.html',
  styleUrls: ['./contador-de-visitas.component.css'], // Importa los estilos CSS
})
export class ContadorDeVisitasComponent implements OnInit {
  constructor(private rendererFactory: RendererFactory2) { }


  ngOnInit() {
    const renderer = this.rendererFactory.createRenderer(null, null);
  
    // Crea un elemento script y establece sus atributos
    const script = renderer.createElement('script');
    renderer.setProperty(script, 'type', 'text/javascript');
    renderer.setProperty(script, 'src', 'https://counter6.optistats.ovh/private/counter.js?c=1wemg95zsr9er9yk9wz69bkqbwa5y6s9&down=async');
    renderer.setProperty(script, 'async', true);
  
    // Agrega el script al DOM
    renderer.appendChild(document.body, script);
  }
  
}
