
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-dosmilmovies',
  templateUrl: './dosmilmovies.component.html',
  styleUrls: ['./dosmilmovies.component.css']
})
export class dosMilMoviesComponent implements OnInit {
  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar:object;
  constructor(public MovieService:MovieService) { }

  ngOnInit(){
    this.MovieService.getdosMilFilms()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.log(error),
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

}