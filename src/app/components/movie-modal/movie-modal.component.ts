import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent implements OnInit {
  @Input()
  showModal;
  @Input()
  movie: Movie;
  @Output()
  closed = new EventEmitter<boolean>();
  constructor() { }

  
  ngOnInit(): void {
  }
  closeModal(): void {
    this.closed.emit(true);
    console.log(this.showModal);
  }
}