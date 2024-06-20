import { Component, inject } from '@angular/core';
import { CanesService } from "../../services/canes.service";

@Component({
  selector: 'app-perros-en-adopcion',
  standalone: true,
  imports: [],
  templateUrl: './perros-en-adopcion.component.html',
  styleUrl: './perros-en-adopcion.component.css'
})
export class PerrosEnAdopcionComponent {
canesServices = inject(CanesService)
nombre : any =''
id: any =''

ngOnInit(){ 
  
  this.canesServices.leerCan().subscribe((respuesta:any)=>{
  this.nombre = respuesta.datos
  
console.log(this.nombre);
})}



}
