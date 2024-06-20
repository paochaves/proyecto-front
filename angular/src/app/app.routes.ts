import { Routes } from '@angular/router';
import { activeGuard } from "./guards/active.guard";
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ComoAyudarComponent } from './components/como-ayudar/como-ayudar.component';
import { DarEnAdopcionComponent } from './components/dar-en-adopcion/dar-en-adopcion.component';
import { PerrosEnAdopcionComponent } from './components/perros-en-adopcion/perros-en-adopcion.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { LoginComponent } from './components/login/login.component';
import { privadoComponent } from './components/privado/privado.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: '¡Peluditos!' },
  { path: 'blog', component: BlogComponent, title: '¡Blog! Peluditos' },
  { path: 'comoAyudar', component: ComoAyudarComponent, title: '¿Como Ayudar? Peluditos' },
  { path: 'darEnAdopcion', component: DarEnAdopcionComponent, title: '¡Dar en adopción! Peluditos' },
  {
    path: 'perrosEnAdopcion',
    component: PerrosEnAdopcionComponent,
    title: 'Perros en adopción',
  },
  { path: 'registrese', component: RegistreseComponent, title: 'Registrese' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  { path: 'privado', component: privadoComponent, title: 'Privado', canActivate:[activeGuard] },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent, title: '404' },
];