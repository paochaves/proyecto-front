import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanesService {
  httpClient = inject(HttpClient);
  router = inject(Router);
  constructor() { }

//API_URL = 'http://18.224.173.229:3000/can';
API_URL = 'http://localhost:4200/';

leerCan() {
  return this.httpClient.get(`${this.API_URL}`);
}

}