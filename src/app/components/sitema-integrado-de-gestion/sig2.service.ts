import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SigModel } from '../models/sig';

@Injectable({
  providedIn: 'root'
})
export class Sig2Service{
  private URLConecction = environment.urlConecction;
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(public http: HttpClient) { }

  public getDataSIG(): Observable<SigModel[]> {
    return this.http.get(this.URLConecction + 'sig', { headers: this.headers }).pipe(
      map(response => response as SigModel[])
    );
    // return this.http.get(`${environment.urlConecction}sig/`, {headers: this.headers});
  }

}
