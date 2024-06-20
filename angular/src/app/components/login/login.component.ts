import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credencial } from '../../interfaces/credencial';
import { LoginService } from '../../services/login.service';


const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  toastrService = inject(ToastrService);
  loginService: LoginService = inject(LoginService);

  credencialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.credencialsForm.valid) {
      const username = this.credencialsForm.value.username;
      const password = this.credencialsForm.value.password;

      if (typeof username === 'string' && typeof password === 'string') {
        const credencial: Credencial = {
          username,
          password,
        };
        this.loginService.login(credencial).subscribe((response: any) => {
          console.log("response", response);
          if (response.resultado === 'bien') {
            localStorage.setItem('token', response.datos.token);
            this.router.navigateByUrl('/privado');
          } else {
            this.toastrService.warning('Invalid credentials');
          }
        });
      }
    } else {
      console.log('notificación');
      this.toastrService.warning('Todos los campos son obligatorios');
    }
  }
}   
                             
         