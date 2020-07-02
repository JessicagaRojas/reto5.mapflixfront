import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; //Importamos environment para conectar con el backend
import { User } from '../models/user.model'; //Importamos user.model para traer sus parámetros del backend (name. email. password)
import { Login } from '../interfaces/login'; //Importamos la interfaz login para traer los parámetros de User y Token del backend
import { Credentials } from '../interfaces/credentials'; //Importamos la interfaz credentials para traer del backend email y password
import { Observable } from 'rxjs'; //Para que funcione suscribe

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = environment.API_URL; //Definimos API_URL en TS y le decimos que lo coja de environment (http://localhost:3000)
  private user: User;
  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> { 
    return this.httpClient.post<User>(this.API_URL + '/users/signup', user); //Ruta para traer el endpoint de registro del backend (routes -> users.js)
  }

  login(credentials: Credentials): Observable<Login> {
    return this.httpClient.post<Login>(this.API_URL + '/users/login', credentials); //Ruta para traer el endpoint de login del backend (routes -> users.js)
  }
  setUser(user: User): void {  //Meter el usuario
    this.user = user;
  }
  getUser(): User { //Traer usuario
    return this.user;
  }

  logout(): void {
    this.httpClient.get(this.API_URL + '/users/logout', {
      headers: {
        authorization: localStorage.getItem('authToken') //Llamamos al fichero auth del backend (middleware)
      }
    }).subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  }

}
