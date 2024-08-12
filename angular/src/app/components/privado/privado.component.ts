import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CanesService } from "../../services/canes.service";
import { CitaService } from "../../services/citas.service";
import { adoptarloService} from "../../services/adoptarlo.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { showSuccessNotification,clearNotification} from '../../notification-ngrx/notification.actions';


@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'

})
export class privadoComponent {
onSubmit(_t117: NgForm) {
throw new Error('Method not implemented.');
}
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  canesServices = inject(CanesService);
  selectedServices: string[] = [];
  selectedDate: string = '';
  
//login
  name: string = '';
  nombre : any =''
  id: any =''

  //boton 1
  appointment = {
		hogarTemporal: false,
		paseadorCanino: false,
		voluntariadoDeLimpieza: false,
		veterinaria: false,
		donar: false,
		fecha: ""
	};
  //boton 2
  esquemaadoptarlo = {
    fecha: String, };

//notificaciones ngrx
  message$: Observable<string | null> | undefined;
  type$: Observable<'success' | 'error' | null> | undefined;

  

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
//  boton 1 de citas ayuda social
  constructor(private fb: FormBuilder, private CitaService: CitaService, /*private adoptarloService: AdoptarloService,*/ private store: Store) {
  
  }

  onAdoptionSuccess() {
    this.store.dispatch(showSuccessNotification({ message: 'Adopción exitosa!' }));
    setTimeout(() => {
      this.store.dispatch(clearNotification());
    }, 3000);
  }

  makeAppointment() {
		console.log("Datos del formulario:", this.appointment);
		this.CitaService.createAppointment(this.appointment).subscribe(
			(response) => {
        this.onAdoptionSuccess();
				console.log("Cita agendada exitosamente", response);

			},
			(error) => {
				console.error("Error al agendar la cita", error);
			}
		);
//boton 2 adoptarlo
/* onSubmit() {
  console.log("Datos del formulario:", this.appointment);
  this.adoptarloService.createAppointment(this.appointment).subscribe((response) => {
    this.onAdoptionSuccess();
    console.log("Su cita fue agendada exitosamente", response);
  },
  (error) => {
    console.error("Error al agendar la cita", error);
  }
); */
}
}
    