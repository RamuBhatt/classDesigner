import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Timetable } from './timetable';
import { AppRoute } from '../../class/app-route';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }

  get(): Observable<Timetable> {
    return this.http.get<Timetable>(environment.api + AppRoute.TimeTable)
  }

  create(data: Timetable): Observable<Object> {
    return this.http.post(environment.api + AppRoute.TimeTable , data)
  }

}
