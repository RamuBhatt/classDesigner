import { Injectable } from '@angular/core';
import { Users } from '../enums/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isAuthenticated():boolean {
    const authToken = localStorage.getItem('authToken');
    if(authToken){
      return true;
    }
    return false;
  }

  getRole():number {
    return Users.Admin;
  }
}
