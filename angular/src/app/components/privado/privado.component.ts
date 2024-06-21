import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CanesService } from "../../services/canes.service";

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css',
})
export class privadoComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  canesServices = inject(CanesService)

  name: string = '';
  nombre : any =''
  id: any =''

  ngOnInit() {
    this.canesServices.leerCan().subscribe((respuesta:any)=>{
      this.nombre = respuesta.datos
      
    console.log(this.nombre);
    })
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validateToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
          this.name = response.datos.name;
          this.toastrService.success(`Hello, ${this.name}!`);
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }
  
}
    