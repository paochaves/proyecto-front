import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { ProductosComponent } from '../productos/productos.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { RegistreseComponent } from '../registrese/registrese.component';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { PrivadoComponent } from '../privado/privado.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    RouterLink,
    InicioComponent,
    ProductosComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactanosComponent,
    RegistreseComponent,
    IniciarSesionComponent,
    PrivadoComponent,
  ],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent {}
