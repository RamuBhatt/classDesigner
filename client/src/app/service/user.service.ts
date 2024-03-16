import { Injectable } from '@angular/core';
import { Users } from '../enums/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken = localStorage.getItem('authToken');

  constructor() { }

  isAuthenticated(): boolean {
    if (this.authToken) {
      return true;
    }
    return false;
  }

  getRole(): number {
    return Users.Admin;
  }

  getName(): string {
    return 'Kushagra Gangwal'
  }
}
