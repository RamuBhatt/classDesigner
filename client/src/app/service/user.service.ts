import { Injectable } from '@angular/core';
import { Users } from '../enums/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isAuthenticated():boolean {
    return true;
  }

  getRole():number {
    return Users.Admin;
  }
}
