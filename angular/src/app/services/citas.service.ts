import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:3000/appointments'; // URL de backend

  constructor(private httpClient: HttpClient) { }

	createAppointment(appointment: any) {
		return this.httpClient.post(this.apiUrl, appointment);
	}
}
