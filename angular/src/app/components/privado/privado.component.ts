import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CanesService } from "../../services/canes.service";
import { CitaService } from "../../services/citas.service";
import { AdoptarloService} from "../../services/adoptarlo.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as NotificationActions from '../../notification-ngrx/notification.actions';
import { AlertState } from '../../notification-ngrx/notification.state';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'

})
export class privadoComponent {
onSubmit(_t117: NgForm) {
throw new Error('Method not implemented.');
}
//notification ngrx
alert$: Observable<AlertState>;

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
  esquema = {
    fecha: ""
  };  
//acceso a privado
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
  constructor(private fb: FormBuilder, private CitaService: CitaService, private AdoptarloService: AdoptarloService, private store: Store<{ alert: AlertState }>) {    
    //ngrx
    this.alert$ = this.store.select('alert'); }
    
  makeAppointment() {
		console.log("Datos del formulario:", this.appointment);
		this.CitaService.createAppointment(this.appointment).subscribe(
			(response) => {
       // this.onAdoptionSuccess();
				console.log("Cita agendada exitosamente", response);
        this.toastrService.success('Su cita fue agendada con éxito');

			},
			(error) => {
				console.error("Error al agendar la cita", error);
        this.toastrService.error('Error al agendar la cita');
			}
		);
    
//boton 2 adoptarlo
}
esquemaOnSubmit() {
  console.log("Datos del formulario:", this.esquema);
  this.AdoptarloService.createCita(this.esquema).subscribe((response) => {
    this.store.dispatch(NotificationActions.showAlert({ message: '¡Perro adoptado con éxito!', alertType: 'success' }));
    console.log("Su cita fue agendada exitosamente", response);
    this.toastrService.success('Su cita fue agendada con éxito');
  },
  (error) => {
    console.error("Ocurrio un error al agendar la cita", error);
    this.toastrService.error('Error al agendar la cita');
  }
); 
}
}

