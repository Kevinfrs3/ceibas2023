import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Las Ceibas | Empresas Públicas de Neiva E.S.P');
  }

  ngOnInit(): void {
  }

  mostrarAlerta(event: Event) {
    event.preventDefault(); // Evita que se ejecute el comportamiento predeterminado del enlace

    Swal.fire({
      icon: 'info',
      title: '¡Aviso de Pago!',
      html: `Recuerda que puedes hacer tus pagos electrónicos sólo si estás dentro del periodo de pago. Si tu factura ya venció o no aparece para pagar a través de PSE, no te preocupes, te esperamos en nuestros <a href="/contactenos#pagos">Puntos Físicos De Recaudo</a> para ayudarte. ¡Agradecemos tu comprensión!`,
      confirmButtonText: 'Ir a Pagar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        // El usuario hizo clic en Ir a Pagar
        this.redirigirAPago();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario hizo clic en Cancelar
        console.log('Cancelado');
      } else if (result.dismiss === Swal.DismissReason.close) {
        // El usuario cerró la alerta
        console.log('Cerrado por el usuario');
      }
    });
  }

  redirigirAPago() {
    // Redirigir a la página de pago
    window.open('https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=5916', '_blank');
  }
  
  showMockup = true;

  closeMockup() {
    this.showMockup = false;
  }
}

