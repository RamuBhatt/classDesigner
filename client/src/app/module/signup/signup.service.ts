import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from './signup';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  create(data: SignUp){
    return this.http.post(environment.api + 'signup', data);
  }

  login(data: SignUp){
    return this.http.post(environment.api + 'login', data);
  }

}
