import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-translate-button',
  templateUrl: './google-translate-button.component.html',
  styleUrls: ['./google-translate-button.component.css']
})
export class GoogleTranslateButtonComponent implements OnInit {
  currentLanguage!: string; // Añade el operador ! para indicar que se asignará antes de ser utilizada

  ngOnInit() {
    this.currentLanguage = this.getCurrentLanguage();
    this.loadGoogleTranslateScript();
  }

  getCurrentLanguage(): string {
    return navigator.language || navigator.languages[0] || 'en';
  }

  loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'es' }, 'google_translate_element');
      }
    `;
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script2);
  }
}
