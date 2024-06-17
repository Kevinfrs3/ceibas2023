import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private URLConecction =   environment.urlConecction;

  public headers;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  public getTipoProveedor() : Observable<any> {
    return this.http.get(this.URLConecction + "tipoProveedor", {headers: this.headers})
  }

  public getPreguntas(tipo_proveedor_id: any): Observable<any> {
    return this.http.get(this.URLConecction + "proveedorPregunta/" + tipo_proveedor_id, {headers: this.headers})
  }

  public guardar(data: any): Observable<any> {
    return this.http.post(this.URLConecction + "proveedor", JSON.stringify(data), {headers: this.headers})
  }

  public guardarDetalle(data: any): Observable<any> {
    return this.http.post(this.URLConecction + "proveedorDetalle/archivo", data)
  }

  
}
