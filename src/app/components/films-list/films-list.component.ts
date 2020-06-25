import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  peliculasMostrar: object;

  constructor(public MoviesService:MoviesService) { }

  ngOnInit() {
    this.MoviesService.getMovies()
    .subscribe(
      res => this.peliculasMostrar = res,
      error => console.error(error),
      () => console.log(this.peliculasMostrar)
    )
  }

}
