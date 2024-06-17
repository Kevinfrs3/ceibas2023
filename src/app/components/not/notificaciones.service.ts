import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  private URLConecction =   environment.urlConecction;
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(public http: HttpClient) { }

  public getNotificacionesPageable(pageIndex: number) : Observable<any> {
    return this.http.get(this.URLConecction + "notificacion/page/" + pageIndex, {headers: this.headers});
  }
}
