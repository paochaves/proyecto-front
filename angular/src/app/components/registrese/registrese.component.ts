import { Component, OnInit, inject  } from '@angular/core';
import { RegistroService } from "../../services/registro.service";
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registrese',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registrese.component.html',
  styleUrl: './registrese.component.css'
})
export class RegistreseComponent implements OnInit{
 miFormulario: FormGroup;
 toastrService = inject(ToastrService);
 
 constructor(private fb: FormBuilder, private http: HttpClient, private registroService: RegistroService) {

  this.miFormulario = this.fb.group({
  nombre: ["", Validators.required],
  apellido : ["", Validators.required], 
  nombreDeUsuario: ["", Validators.required],
  fechaDeNacimiento: ["", Validators.required],
  tipoDeDocumento: ["", Validators.required],
  numeroDeDocumento: ["", Validators.required],
  genero: ["", Validators.required],
  telefono: ["", Validators.required],
  pais: ["", Validators.required],
  ciudadDeResidencia: ["", Validators.required],
  direccion: ["", Validators.required],
  correoElectronico: ["", Validators.required],
  contrasenia: ["", Validators.required]      
});
 }
           
 
 ngOnInit(): void {}

  onSubmit(): void {
   if (this.miFormulario.valid) {
     this.registroService.usuarios(this.miFormulario.value).subscribe(
      (response) => {
        this.toastrService.info('¡Registro exitoso!');
        console.log("Registro exitoso", response);
      },
      (error) => {
        console.error("Error en el registro", error);
      }
     );
     }else {
      this.toastrService.info('¡Todos lo campos son obligatorios!');
      console.log("Formulario no valido");
   }
  } 
}  