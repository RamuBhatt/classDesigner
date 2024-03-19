import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AppRoute } from '../class/app-route';
import { AppController } from '../class/app-controller';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {


  constructor(private http: HttpClient, private userService: UserService) { }

  enrollStudents(data: any) {
    const api = environment.api + AppController.getRoute(AppController.Admin, AppController.Student, AppController.Add)
    return this.http.post(api, data);
  }

  enrollFacutly(data: any) {
    const api = environment.api + AppController.getRoute(AppController.Admin, AppController.Faculty, AppController.Add)
    return this.http.post(api, data);
  }

}
