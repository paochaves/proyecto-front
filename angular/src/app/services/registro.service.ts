import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor(private httpClient: HttpClient, private toastrService: ToastrService) {}

  API_URL = 'http://18.191.110.158:3000/usuarios';

usuarios(formData: FormData) {
  return this.httpClient.post(this.API_URL, formData);
}
}
