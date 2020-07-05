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
import { FormAlquilerComponent } from './components/form-alquiler/form-alquiler.component';
import { dosMilMoviesComponent } from './components/dosmilmovies/dosmilmovies.component';
import { popularmoviesComponent } from './components/popularmovies/popularmovies.component';

//Arrays de rutas
const routes: Routes = [
  //Esto son las rutas que escribiremos en el navegador
  {path: 'header', component: HeaderComponent},
  {path: 'register', component: FormularioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'filmslist', component: FilmsListComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: "inicio", component: InicioComponent},
  {path: "formAlquiler", component: FormAlquilerComponent},
  {path: "dosmilmovies", component: dosMilMoviesComponent},
  {path: "popularmovies", component: popularmoviesComponent},
  {path: '**', component: ErrorComponent}, //Debe ir siempre al final, es para "redirigir" los errores 

];

//Exportar el módulo de rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
//export const AppRoutingModule:any [] = []