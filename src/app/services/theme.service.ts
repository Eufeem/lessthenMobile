import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/Register';
import { Theme } from '../models/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private urlEndPoint : string = 'http://localhost:9090';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  get(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.urlEndPoint + '/theme');
  }
  
}