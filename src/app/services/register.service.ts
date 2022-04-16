import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private urlEndPoint : string = 'http://localhost:9090';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  get(): Observable<Register[]> {
    return this.http.get<Register[]>(this.urlEndPoint + '/register');
  }

  create(object: Register): Observable<any> {
    return this.http.post(this.urlEndPoint + '/register' , object);
  }
  
}