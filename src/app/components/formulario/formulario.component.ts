//Esto es SIGN UP. Para REGISTRARSE

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  errorMsg: string; //Definimos el error que dará el input

  constructor(public userService: UserService) {}

   register(registerForm: NgForm): void {
    console.log(registerForm);
    if (!registerForm.valid) { //Si el registro NO es válido...
      setTimeout(() => this.errorMsg = '', 2500); //...tras 2.5seg salta error
      this.errorMsg = 'Revisa tus campos';
      return;
    }
    const user: User = registerForm.value; // "user" recoge todo lo que hay en el modelo de User (id, name, email, password)
    this.userService.register(user)  // Registra esos valores
      .subscribe(console.log); //Imprescindible 
  }

}
