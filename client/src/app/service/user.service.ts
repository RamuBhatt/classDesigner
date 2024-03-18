import { Injectable } from '@angular/core';
import { Users } from '../enums/users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppController } from '../class/app-controller';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  isAuthenticated(): boolean {
    if (this.getToken()) {
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

  getSchoolId(): string {
    return '91bb3845-af93-aef7-32bd-062425ff16e6';
  }

  getStandardId(): string {
    if (this.getRole() == Users.Student)
      return '91bb3845-af93-aef7-32bd-062425ff16e6';
    return '';
  }

  getUsers() {
    return this.http.get<User>(environment.api + AppController.getRoute(AppController.Users, this.getSchoolId()));
  }
}
