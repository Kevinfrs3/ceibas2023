import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent {
  urlIframeIdentificado: SafeResourceUrl | null = null;
  urlIframeAnonimo: SafeResourceUrl | null = null;
  urlIframeConsulta: SafeResourceUrl | null = null;
  iframeVisible: 'identificado' | 'anonimo' | 'consulta' | 'ninguno' = 'ninguno'; // Inicialmente ninguno
  iframeCargado: boolean = false; // Controla si se ha cargado un iframe

  constructor(private sanitizer: DomSanitizer) {}

  mostrarIframe(url: string, tipo: 'identificado' | 'anonimo' | 'consulta') {
    // Sanitiza y establece la URL del iframe según el tipo
    switch (tipo) {
      case 'identificado':
        this.urlIframeIdentificado = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        break;
      case 'anonimo':
        this.urlIframeAnonimo = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        break;
      case 'consulta':
        this.urlIframeConsulta = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        break;
    }
    this.iframeVisible = tipo;
    this.iframeCargado = true;
  }
}
