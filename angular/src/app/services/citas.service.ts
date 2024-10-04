import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  //private apiUrl = 'http://18.224.173.229:3000/appointments'; // URL de backend
  private apiUrl = 'http://localhost:4200/';
  
  constructor(private httpClient: HttpClient) { }

	createAppointment(appointment: any) {
		return this.httpClient.post(this.apiUrl, appointment);
	}
}
