import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../enums/users';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  isEditing!: boolean;
  isLoading!: boolean;
  canAccess: boolean = this.userService.getRole() == (Users.Admin || Users.Faculty);
  student!: Student;
  usersId: string = this.userService.getId();

  constructor(
    private formBuilder: FormBuilder,
    private url: ActivatedRoute,
    private userService: UserService,
    private profile: ProfileService
  ) {
    let id = url.snapshot.paramMap.get('id');
    if (id) {
      this.usersId = id;
      this.canAccess = true
    }
  }

  ngOnInit(): void {
    // this.getStudent();
    this.edit();
    this.checkRole();
  }

  checkRole() {
    if (this.userService.getRole() == Users.Admin || Users.Faculty) {
      this.student.form.get('RollNumber')?.enable();
      this.student.form.get('Division')?.enable();
      this.student.form.get('StandardId')?.enable();
    }
    if (this.userService.getRole() == Users.Student || Users.Parents) {
      this.student.form.get('RollNumber')?.disable();
      this.student.form.get('Division')?.disable();
      this.student.form.get('StandardId')?.disable();
    }
  }

  edit() {
    this.isEditing = true;
    this.student = new Student(this.formBuilder);
    this.student.createForm();
    console.log(this.student.form);

    this.getStudent();
  }

  getStudent() {
    this.profile.getStudent(this.usersId).subscribe({
      next: (data: any) => {
        this.student.form.patchValue(data.Model);
      },
      error: (e) => console.log(e.message)
    })
  }

  cancle() {
    this.isEditing = false;
  }

  save() {
    this.profile.saveStudent(this.student.form.getRawValue()).subscribe({
      next: (data) => console.log(data),
      error: (e) => console.log(e.message)
    })
    this.isEditing = false;
  }
}
