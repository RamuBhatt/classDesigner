import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Faculty } from '../../interface/faculty';
import { environment } from '../../../environments/environment.development';
import { AppRoute } from '../../class/app-route';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getFaculties() {
    return this.http.get<Faculty>(environment.api + AppRoute.Faculty);
  }

  getSubject() {
    return this.http.get<Subject>(environment.api + AppRoute.Subject);
  }

  create(data: Subject) {
    return this.http.post<Subject>(environment.api + AppRoute.Subject, data);
  }
}
