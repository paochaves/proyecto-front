import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptarloService {

  private apiUrl = 'https://tu-backend.com/api/appointments';  // Cambia esta URL por la de tu backend

  constructor(private http: HttpClient) { }

  scheduleAppointment(fecha: string): Observable<any> {
    const body = { fecha };
    return this.http.post<any>(this.apiUrl, body);
  }
}
