// contador.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private contadorKey = 'contadorVisitas';

  constructor() {}

  getContadorVisitas(): number {
    const contador = localStorage.getItem(this.contadorKey);
    return contador ? parseInt(contador, 10) : 0;
  }

  incrementarVisitas() {
    const contador = this.getContadorVisitas();
    localStorage.setItem(this.contadorKey, (contador + 1).toString());
  }
}
