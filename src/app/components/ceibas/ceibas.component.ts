import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ceibas',
  templateUrl: './ceibas.component.html',
  styleUrls: ['./ceibas.component.css']
})
export class CeibasComponent implements OnInit {

  constructor(private titulo: Title) { 
    titulo.setTitle('Las Ceibas | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
  }

}
