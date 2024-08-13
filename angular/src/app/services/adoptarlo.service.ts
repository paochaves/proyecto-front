import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdoptarloService {

  private apiUrl = 'http://18.224.173.229:3000/esquema'; // URL de backend

  constructor(private httpClient: HttpClient) { }

	createCita(esquema: any) {
		return this.httpClient.post(this.apiUrl, esquema);
	}
}
