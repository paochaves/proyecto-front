import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'https://tu-backend-api.com/citas'; // URL de tu backend

  constructor(private http: HttpClient) { }

  makeAppointment(citaData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, citaData);
  }
} 


