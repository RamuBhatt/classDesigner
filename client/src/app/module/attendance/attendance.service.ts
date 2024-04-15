import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppRoute } from '../../class/app-route';
import { UserService } from '../../service/user.service';
import { AttendanceOutDto } from '../../interface/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient, private user: UserService) { }

  create(data: AttendanceOutDto) {
    return this.http.post(environment.api + AppRoute.Attendance, data);
  }

  update(data: AttendanceOutDto) {
    return this.http.put(environment.api + AppRoute.getRoute(AppRoute.Attendance, data.Id), data);
  }

  get() {
    return this.http.get(environment.api + AppRoute.Attendance + this.user.getSchoolId);
  }

  getStudents(standardId: string) {
    return this.http.get(environment.api + AppRoute.getRoute(AppRoute.Attendance, this.user.getSchoolId(), standardId));
  }
}
