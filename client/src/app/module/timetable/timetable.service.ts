import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }

  get(): Observable<Object> {
    return this.http.get(environment.api + '/timetable')
  }
  create(data: Timetable): Observable<Object> {
    return this.http.post(environment.api + '/timetable', data)
  }
}
