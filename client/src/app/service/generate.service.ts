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

  EnrollStudents(count: number) {
    const data = {
      StandardId: 'TEST',
      SchoolId: '1'
    }
    const api = environment.api + AppController.getRoute(AppController.Admin, AppController.Student, AppController.Add, count.toString())
    return this.http.post(api, data);
  }

}
