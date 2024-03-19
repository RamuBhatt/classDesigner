import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStandard } from './standard';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AppRoute } from '../../class/app-route';
import { UserService } from '../../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  
  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }
    schoolId = this.userService.getSchoolId();

  create(data: IStandard): Observable<IStandard> {
    return this.http.post<IStandard>(environment.api + AppRoute.Standard, data);
  }

  get(): Observable<IStandard> {
    return this.http.get<IStandard>(environment.api + AppRoute.getRoute(AppRoute.Standard, AppRoute.All, this.schoolId));
  }
}
