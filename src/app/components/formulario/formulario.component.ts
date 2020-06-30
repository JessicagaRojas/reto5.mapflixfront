import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any; //esto habría que quitarlo?????????????????????????????????????????

  constructor(public useService: UserService) {
    this.user = {
      nombre: '',
      apellidos: '',
      email: ""
    };
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado!");
    console.log(this.user);
  }

}
