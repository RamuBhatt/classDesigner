import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AppRoute } from '../../class/app-route';
import { Student } from './student/student';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getStudent(id: string) {
    return this.http.get(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.Student, id));
  }

  saveStudent(data: Student) {
    return this.http.put(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.Student), data);
  }

  getFaculty(id: string) {
    return this.http.get(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.Faculty, id));
  }

  saveFaculty(data: Student) {
    return this.http.post(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.Student), data);
  }
  
  getSchool(id: string) {
    return this.http.get(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.School, id));
  }

  saveSchool(data: Student) {
    return this.http.post(environment.api + AppRoute.getRoute(AppRoute.Profile, AppRoute.Student), data);
  }
}
