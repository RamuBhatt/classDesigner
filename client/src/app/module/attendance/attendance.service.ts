import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppRoute } from '../../class/app-route';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { AttendanceOutDto } from '../../interface/Attendance';

type AttendaceDto = {
  Id: string;
  Standard: string;
  Subject: string;
  Faculty: string;
  Present: string[];
  Absent: string[];
}

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

  getStudents(SubjectId: string) {
    return this.http.get(environment.api + AppRoute.getRoute(AppRoute.Attendance, this.user.getSchoolId().toString()));
  }
}
