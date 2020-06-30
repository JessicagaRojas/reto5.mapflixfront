import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
  }

  buscaTitulo(event) {
    if(event.target.value.length >= 3){
      this.MovieService.buscaPeliculasTitulo(event.target.value)
      .subscribe(res => this.MovieService.setFilms(res))
    }
  }

}
