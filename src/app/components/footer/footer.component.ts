import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isSectionVisible = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSection() {
    this.isSectionVisible = !this.isSectionVisible;
  }

}
