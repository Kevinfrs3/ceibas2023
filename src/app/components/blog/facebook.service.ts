import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() {
    this.loadFacebookSDK();
  }

  loadFacebookSDK() {
    (window as any).fbAsyncInit = () => {
      (window as any).FB.init({
        xfbml: true,
        version: 'v11.0'
      });
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      js.defer = true;
      js.crossOrigin = 'anonymous';
      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        console.error('Could not find a parent node for the Facebook SDK script.');
      }
    }(document, 'script', 'facebook-jssdk'));
  }
  public renderCommentsPlugin() {
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }
  
}

