import { Component } from '@angular/core';

@Component({
  selector: 'app-pida-cita',
  templateUrl: './pida-cita.component.html',
  styleUrls: ['./pida-cita.component.css']
})
export class PidaCitaComponent {
  fullName: string = '';
  email: string = '';
  mobile: string = '';
  message: string = '';
  citaDate: string = '';

  constructor() { }

  minDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Añade un 0 al mes si es menor de 10
    const day = today.getDate().toString().padStart(2, '0'); // Añade un 0 al día si es menor de 10
    return `${year}-${month}-${day}`;
  }

  enviarCorreo() {
    const nombresCompletos = this.fullName;
    const correoElectronico = this.email;
    const telefono = this.mobile;
    const mensaje = this.message;
    const fechaCita = this.citaDate;

    // Crear el enlace de correo electrónico con los datos prellenados
    const mailtoLink = `mailto:info@lasceibas.gov.co?subject=Solicitud de Cita&body=Muy buen día, quisiera agendar una cita con los siguientes datos de contacto%0D%0ANombres Completos: ${nombresCompletos}%0D%0ACorreo Electrónico: ${correoElectronico}%0D%0ATeléfono: ${telefono}%0D%0AMotivo o Mensaje: ${mensaje}%0D%0AFecha de la Cita: ${fechaCita}`;

    // Abrir el cliente de correo electrónico del usuario con el enlace
    window.location.href = mailtoLink;
  }

  todosCamposLlenos(): boolean {
  return (
    !!this.fullName && !!this.mobile && !!this.email && !!this.message && !!this.citaDate
  );
}



}