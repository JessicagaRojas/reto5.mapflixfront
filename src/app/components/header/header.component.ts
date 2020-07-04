import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private MovieService: MovieService, private UserService:UserService) { }

  ngOnInit(): void {
  }

  getUser(): User {
    return this.UserService.getUser();
  }
  logout(): void {
    this.UserService.logout();
    this.UserService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  buscaTitulo(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
    if(event.target.value.length >= 3){//le decimos que se active cuando hayamos tecleado tres o mas teclas
      this.MovieService.buscaPeliculasTitulo(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
    }
  }

}