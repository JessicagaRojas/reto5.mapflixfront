import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html', //conexiones con los demás archivos del componente
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  //page = 1;

  pelisMostrar: object; //creamos el objeto "peliculasMostrar"

  constructor(public MovieService:MovieService) { }  //Hacemos referencia al archivo del Service -> MovieService

  ngOnInit(): void {  //Esto es el primer evento que se ejecutará en el componente
    this.MovieService.getMovies()  //Función que hace referencia a la función "getmovies" del Backend
    .subscribe(
      res => this.pelisMostrar = res, //Este "pelisMostrar" es el referenciado en el HTML de films-list
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )
  }
/*
  nextPage() {
    this.page++;
    this.getByPage();
  }*/

}
