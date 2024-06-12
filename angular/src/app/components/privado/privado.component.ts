import { Component, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from "../../services/login.service";

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css',
})

export class PrivadoComponent {
  loginService = inject(LoginService);
  nombre: string = '';
  ngOnInit() {
    const token: any = localStorage.getItem('token');
    console.log('token: ', token);
    const decoded = jwtHelperService.decodeToken(token);
    console.log('decoded: ', decoded);
    this.nombre = decoded.name;
    if (token) {
      this.loginService.validateToken(token).subscribe((response: any) => {
        console.log('response: ', response);
        if (response.resultado === 'bien') {
          this.nombre = response.datos.name;
        } else {
          console.log('el token no es válido...');
        }
      });
    } else {
      console.log('no existe token...');
    }
  }
}
    