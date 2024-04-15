import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { AppController } from '../class/app-controller';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getFaculty() {
    return this.http.get(environment.api + AppController.getRoute(
      AppController.Admin, AppController.Faculty, AppController.School, this.userService.getSchoolId()));
  }

  getStudent() {
    return this.http.get(environment.api + AppController.getRoute(
      AppController.Admin, AppController.Student, AppController.School, this.userService.getSchoolId()));
  }

  getSubject() {
    return this.http.get(environment.api + AppController.getRoute(
      AppController.Admin, AppController.Subject, AppController.School, this.userService.getSchoolId()));
  }

  getStandard() {
    return this.http.get(environment.api + AppController.getRoute(
      AppController.Admin, AppController.Standard, AppController.School, this.userService.getSchoolId()));
  }

}
