import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppRoute } from '../../class/app-route';
import { Observable } from 'rxjs';

type AttendaceDto = {
  StanderdId: string;
  FacultyId: string;
  Present: string[];
  Absent: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  create(data: AttendaceDto) {
    return this.http.post(environment.api + AppRoute.Attendance, data)
  }

  update() {
    
  }


}
