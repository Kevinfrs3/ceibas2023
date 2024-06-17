import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contratacion',
  templateUrl: './contratacion.component.html',
  styleUrls: ['./contratacion.component.css']
})
export class ContratacionComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Contratación | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

}
