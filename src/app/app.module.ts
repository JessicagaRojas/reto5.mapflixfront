//Fijos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //Imprescindible para que funcionen las peticiones Ajax
import { FormsModule } from '@angular/forms';  //imprescindible para que funcionen los formularios

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { VideoHeaderComponent } from './components/video-header/video-header.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { FormAlquilerComponent } from './components/form-alquiler/form-alquiler.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    FilmsListComponent,
    ErrorComponent,
    DetailComponent,
    InicioComponent,
    LoginComponent,
    VideoHeaderComponent,
    MovieModalComponent,
    FormAlquilerComponent,

  ],
  imports: [ //Declaraciones de los imports de Angular por defecto
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { };
