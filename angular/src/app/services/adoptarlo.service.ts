import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class adoptarloService {

  private apiUrl = 'http://localhost:3000/esquema'; // URL de backend

  constructor(private httpClient: HttpClient) { }

	createCita(appointment: any) {
		return this.httpClient.post(this.apiUrl, appointment);
	}
}
