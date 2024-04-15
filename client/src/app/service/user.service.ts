import { Injectable } from '@angular/core';
import { Users } from '../enums/users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppController } from '../class/app-controller';
import { User } from '../interface/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jwtDecode = new JwtHelperService();

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  isAuthenticated(): boolean {
    if (this.getToken()) return true;
    return false;
  }

  getRole(): number {
    let role = this.jwtDecode.decodeToken(this.getToken()!.toString()).user.RoleId;
    return Number(role);
    // return Users.Faculty
  }

  getId(): string {
    return this.jwtDecode.decodeToken(this.getToken()!.toString()).user.Id;
  }

  getName(): string {
    return this.jwtDecode.decodeToken(this.getToken()!.toString()).user.UserName;
  }

  getSchoolId(): string {
    return this.jwtDecode.decodeToken(this.getToken()!.toString()).user.SchoolId;
  }

  getStandardId(): string {
    if (this.getRole() != Users.Admin)
      return this.jwtDecode.decodeToken(this.getToken()!.toString()).user.StandardId;
    return "";
  }

  getSubjectId(): string {
    if (this.getRole() == Users.Faculty)
      return this.jwtDecode.decodeToken(this.getToken()!.toString()).user.SubjectId;
    return '';
  }

  getUsers() {
    return this.http.get<User>(environment.api + AppController.getRoute(AppController.Users, this.getSchoolId()));
  }
}
