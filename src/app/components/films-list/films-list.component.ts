import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos
import { Movie } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html', //conexiones con los demás archivos del componente
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  //page = 1;
  showModal: boolean;
  currentMovie: Movie;

  pelisMostrar: object; //creamos el objeto "pelisMostrar"

  constructor(public MovieService:MovieService) { }  //Hacemos referencia al archivo del Service -> MovieService

  ngOnInit() {  //Esto es el primer evento que se ejecutará en el componente
    this.MovieService.getMovies()  //Función que hace referencia a la función "getmovies" del Backend
    .subscribe(
      res => this.pelisMostrar = res, //Este "pelisMostrar" es el referenciado en el HTML de films-list
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )

    
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }


/*
  nextPage() {
    this.page++;
    this.getByPage();
  }*/

}
