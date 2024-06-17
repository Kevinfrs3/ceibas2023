import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-denuncie-actos-corrupcion-funcionarios',
  templateUrl: './denuncie-actos-corrupcion-funcionarios.component.html',
  styleUrls: ['./denuncie-actos-corrupcion-funcionarios.component.css']
})
export class DenuncieActosCorrupcionFuncionariosComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Denuncie | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

}
