import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { HttpResponse } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-alquiler',
  templateUrl: './form-alquiler.component.html',
  styleUrls: ['./form-alquiler.component.css']
})
export class FormAlquilerComponent implements OnInit {
  localUser: object;
  constructor(public orderService: OrderService, movieService: MovieService, userService: UserService) { }
  ngOnInit(): void {
  }
  createOrder(): void {//form-alquiler Form: NgForm
    this.localUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.localUser)
    /* const recap: Recap = rentForm.value
    this.orderService.createOrder(Recap)
    console.log('holita'); */
  }
}