import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes-pqr',
  templateUrl: './informes-pqr.component.html',
  styleUrls: ['./informes-pqr.component.css']
})
export class InformesPqrComponent implements OnInit {
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;

  constructor() { }

  ngOnInit(): void {
  }
}
