import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SignUp } from './signup';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { Guid } from 'guid-typescript';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { Route } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  userInfo!:SignUp;
  hide: boolean = true;
  success!: boolean;

  constructor(private formbuilder: FormBuilder, private signupService: SignupService) {}
  
  ngOnInit(): void {
    this.userInfo = new SignUp(this.formbuilder);
    this.userInfo.createForm();
  }

  onSubmit(){
    this.userInfo.form.get('Id')?.setValue(Guid.create().toString());
    this.userInfo.form.get('RoleId')?.setValue('0');

    if(this.userInfo.form.valid){
      this.signupService.create(this.userInfo.form.value).subscribe({
        next: () => this.success = true,
        error: (e) => console.log(e)
      });
    }

  }
}
