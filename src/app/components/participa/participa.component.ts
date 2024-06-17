import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-participa',
  templateUrl: './participa.component.html',
  styleUrls: ['./participa.component.css']
})
export class ParticipaComponent implements OnInit {

  constructor(private titulo: Title) {
    titulo.setTitle('Participa | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

  showAdditionalInfo = [false, false]; // Agrega más elementos según el número de tarjetas que tengas


  toggleAdditionalInfo(index: number) {
    this.showAdditionalInfo[index] = !this.showAdditionalInfo[index];
  }
  
  


  

}
