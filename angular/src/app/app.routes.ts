import { Routes } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: 'navegacion', component: NavegacionComponent, title: 'Navegación' },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
    title: 'Inicio de sesión',
  },
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  {
    path: 'contactanos',
    component: ContactanosComponent,
    title: 'Contactanos',
  },
  { path: 'privado', component: PrivadoComponent, title: 'Privado' },
  { path: 'registrese', component: RegistreseComponent, title: 'Registrese' },
  { path: 'servicios', component: ServiciosComponent, title: 'Servicios' },
  { path: '**', component: NoEncontradoComponent, title: '404' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];
