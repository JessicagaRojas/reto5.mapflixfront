import { Injectable } from '@angular/core';//importación por defecto de angular
import { HttpClient } from '@angular/common/http';//importación por defecto de angular
import { Observable } from 'rxjs';//importación por defecto de angular

import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_URL = environment.API_URL; //la usamos para conectar con nuestro backend a traves de esta url

  films: object[];//creamos un objeto de array vacio que las coge todas
  filmChoosen: object[];//creamos un objeto de array vacio que son las que elegimos
  //title: string;
  constructor(private httpClient:HttpClient) { }

  
  show20Pages(page: number): Observable<Movie[]> {
    // const headers = new HttpHeaders();
    // headers.set('authorization', localStorage.getItem('authToken'));
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/page/' + page, {
      headers: {
        authorization: localStorage.getItem('authToken') //El token de loginComponent lo está guardando en localStorage para comprobarlo dp
      }
    });
  }
 

  getMovies():Observable<any>{
    return this.httpClient.get(this.API_URL + '/movies/allmovies')//en la siguiente direccion nos traemos todas las pelis
  }
  locateFilm(filmChoose:any):object{//funcion para localizar las peliculas que elegimos
    this.filmChoosen = filmChoose; //Guardamos la peli escogida
    console.log(this.filmChoosen);
    return;
 }
buscaPeliculasTitulo(titulo:string):Observable<any>{//guardamos dentro de esta funcion la url/title más el titulo de la pelicula
  return this.httpClient.get(this.API_URL + '/movies/title/' + titulo); //Endpoint del backend
}
setFilms(films:object[]):void{  //método para cambiar la clase
    this.films=films;
    console.log(this.films)
 }
getFilms():object { //método para traer la clase
    return this.films
 }


}

//subscribe nos permite recoger los datos que manda HTTP