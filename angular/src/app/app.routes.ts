import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { LoginComponent } from './components/login/login.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  { path: 'productos', component: ProductosComponent, title: 'Productos' },
  { path: 'servicios', component: ServiciosComponent, title: 'Servicios' },
  { path: 'nosotros', component: NosotrosComponent, title: 'Nosotros' },
  {
    path: 'contactanos',
    component: ContactanosComponent,
    title: 'Contactanos',
  },
  { path: 'registrese', component: RegistreseComponent, title: 'Registrese' },
  {
    path: 'login',
    component: LoginComponent,
    title: '',
  },
  { path: 'privado', component: PrivadoComponent, title: 'Privado' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent, title: '404' },
];