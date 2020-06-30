import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detail', //<app-header> del html
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  movieShow:any;
  constructor(private MovieService:MovieService) { }
  ngOnInit() {
    this.movieShow = this.MovieService.filmChoosen;
  }
}
