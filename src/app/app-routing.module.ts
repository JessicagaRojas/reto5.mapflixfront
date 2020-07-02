import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




//Importo los componentes a los que les quiero hacer una página aparte. Los que NO SON FIJOS
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { ErrorComponent } from './components/error/error.component'
import { DetailComponent } from './components/detail/detail.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

//Arrays de rutas
const routes: Routes = [
  //Esto son las rutas que escribiremos en el navegador
  {path: 'header', component: HeaderComponent},
  {path: 'register', component: FormularioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'filmslist', component: FilmsListComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: "", component: InicioComponent},
  {path: '**', component: ErrorComponent}, //Debe ir siempre al final, es para "redirigir" los errores 

];

//Exportar el módulo de rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
//export const AppRoutingModule:any [] = []