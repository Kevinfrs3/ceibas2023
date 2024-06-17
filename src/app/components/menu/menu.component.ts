import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  executeTawkToScript() {
    var s1 = this.renderer.createElement('script');
    var s0 = document.getElementsByTagName('script')[0];
  
    s1.type = 'text/javascript';
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65a64d5f8d261e1b5f53db52/1hk8psfo3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    this.renderer.appendChild(s0.parentNode, s1);
  }

  openTawkChat() {
    this.executeTawkToScript();
    // Mostrar el widget de chat
  }  


  afAuth: any;
  router: any;
  openSidenav() {
    console.log(document.querySelectorAll('body')[0])
    document.querySelectorAll('body')[0].classList.add('mobile-menu-visible')
  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }



  ngOnInit(): void {
   
  }

  showInfo = false;

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

}
