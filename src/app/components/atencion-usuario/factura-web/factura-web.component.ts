import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

@Component({
  selector: 'app-factura-web',
  templateUrl: './factura-web.component.html',
  styleUrls: ['./factura-web.component.css']
})

export class FacturaWebComponent implements OnInit {

  linkFactura: string = 'https://sifasp.gescomer.com:444/facturaweb/ceibas/index.html'
  
  constructor(private titulo: Title, private sanitizer: DomSanitizer) {
    titulo.setTitle('Factura Web | Las Ceibas E.S.P');
  }

  ngOnInit() {
  }

  sanitizeURL(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}