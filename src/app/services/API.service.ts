import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlEndPoint : string = 'http://localhost:9090';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getPlanetary(): Observable<any> {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=DZR4XecnicAgA6ZtXTPqeb6UKyXQouOFcUsHOT9u');
  }
} 