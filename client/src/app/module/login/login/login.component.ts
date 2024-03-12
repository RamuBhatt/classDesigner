import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../signup/signup.service';
import { SignUp } from '../../signup/signup';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginInfo!:SignUp;
  hide:boolean = true;

  constructor(private service: SignupService, private formbuilder: FormBuilder){}

  ngOnInit(): void {
      this.loginInfo = new SignUp(this.formbuilder);
      this.loginInfo.createForm();
  }

  onSubmit(){
    if(this.loginInfo.form.valid){
      this.service.login(this.loginInfo.form.value).subscribe( (data:any) => {
        localStorage.setItem('authToken',data.Model);

        if(data.Model){}
      });
    }
  }
}
