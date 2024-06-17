import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atencion-usuario',
  templateUrl: './atencion-usuario.component.html',
  styleUrls: ['./atencion-usuario.component.css']
})
export class AtencionUsuarioComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Atención al Usuario | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

}
