import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transparenci',
  templateUrl: './transparenci.component.html',
  styleUrls: ['./transparenci.component.css']
})
export class TransparenciComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Transparencia | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

}
