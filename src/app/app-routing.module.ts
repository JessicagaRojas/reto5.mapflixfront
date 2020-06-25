import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




//Importo los componentes a los que les quiero hacer una página aparte
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { ErrorComponent } from './components/error/error.component'

//Arrays de rutas
const appRoutes: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'filmslist', component: FilmsListComponent},
  {path: '**', component: ErrorComponent}, //Debe ir siempre al final, es para "redirigir" los errores 

];

//Exportar el módulo de rutas


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
//export const AppRoutingModule:any [] = []