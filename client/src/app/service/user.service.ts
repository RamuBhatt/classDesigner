import { Injectable } from '@angular/core';
import { Users } from '../enums/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken!: string | null;

  constructor() {
    this.getToken();
  }

  getToken() {
    this.authToken = localStorage.getItem('authToken');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  isAuthenticated(): boolean {
    this.getToken();
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
