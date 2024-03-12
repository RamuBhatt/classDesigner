import { Injectable } from '@angular/core';
import { Users } from '../enums/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setAuth!:boolean;

  constructor() { }

  isAuthenticated():boolean {
    const authToken = localStorage.getItem('authToken');
    if(authToken){
      return this.setAuth = true;
    }
    return this.setAuth;
  }

  getRole():number {
    return Users.Admin;
  }
}
