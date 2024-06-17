import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ScriptLoaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    this.Carga(['archivo1', 'archivo2']);

    return next.handle(req).pipe(
      finalize(() => {
        // Aquí puedes agregar cualquier acción que desees realizar al final de la solicitud HTTP
      })
    );
  }

  private Carga(files: string[]): void {
    for (const file of files) {
      const script = document.createElement('script');
      script.src = `./assets/js/${file}.js`;
      script.type = 'text/javascript';
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
}
