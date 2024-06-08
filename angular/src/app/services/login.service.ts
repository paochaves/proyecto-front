import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  httpClient = inject(HttpClient);

  login(credencial: Credencial) {
    return this.httpClient.post(
      'http://localhost:3000/iniciarSesion',
      credencial
    );
  }
}
