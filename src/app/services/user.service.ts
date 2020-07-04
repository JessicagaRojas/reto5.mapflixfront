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

  register(user: User): Observable<User> {//funcion para el registro de usuarios
    return this.httpClient.post<User>(this.API_URL + '/users/signup', user);//ruta en el backend para traer el endpoint
  }
  login(credentials: Credentials): Observable<Login> {//función para el login de usuarios
    return this.httpClient.post<Login>(this.API_URL + '/users/login', credentials);//ruta en el backend para traer el endpoint
  }
  setUser(user: User): void {//poner usuario
    this.user = user;
  }
  getUser(): User {//traerte a ese usuario
    return this.user;
  }
  logout(): void {//salir de un sesion de usuario
    this.httpClient.get(this.API_URL + '/users/logout',{//endpoint del backend para salir de una sesion de usuario
      headers: {
        authorization: localStorage.getItem('authToken')
      }
    }).subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');//quitamos el usuario de localstorage
    localStorage.removeItem('authToken');//quitamos el token de localstorage
  }
}





