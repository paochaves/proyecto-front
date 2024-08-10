import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CanesService } from "../../services/canes.service";
import { CitaService } from "../../services/citas.service";
import { AdoptarloService } from "../../services/adoptarlo.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'

})
export class privadoComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  canesServices = inject(CanesService);
  citaForm = FormGroup;

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
          this.toastrService.success(`Hola, ${this.name}!`);
        } else {
          this.loginService.logout();
        }
      });      
    } else {
      this.loginService.logout();
    }
  }
 
  constructor(private fb: FormBuilder, private CitaService: CitaService, private adoptarloService: AdoptarloService) {}

  makeAppointment() {
    const data = {
      hogarTemporal: (document.getElementById('hogarTemporal') as HTMLInputElement).checked,
      paseadorCanino: (document.getElementById('paseadorCanino') as HTMLInputElement).checked,
      voluntariadoDeLimpieza: (document.getElementById('voluntariadoDeLimpieza') as HTMLInputElement).checked,
      veterinaria: (document.getElementById('veterinaria') as HTMLInputElement).checked,
      donar: (document.getElementById('donar') as HTMLInputElement).checked,
      fecha: (document.getElementById('fecha') as HTMLInputElement).value,
    };

    this.CitaService.makeAppointment(data).subscribe(response => {
      console.log('Su cita fue agendada con éxito:', response);
    }, error => {
      console.error('Error al agendar la cita:', error);
    });
  }

  onSubmit(form: any) {
    const fecha = form.value.fecha;

    this.adoptarloService.scheduleAppointment(fecha).subscribe({
      next: (response) => {
        console.log('Cita agendada con éxito:', response);
      },
      error: (error) => {
        console.error('Error al agendar la cita:', error);
      }
    });
  }
}

    