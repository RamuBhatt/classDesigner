import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { ProfileService } from '../profile.service';
import { School } from './school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
  isEditing!: boolean;
  isLoading!: boolean;
  school!: School;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private profile: ProfileService
  ) {

  }

  ngOnInit(): void {
    this.getSchool();
    // this.edit(); 
  }

  getSchool() {
    this.profile.getSchool(this.userService.getStandardId()).subscribe({
      next: (data: any) => {
        this.school.form.patchValue(data.Model);
      },
      error: (e) => console.log(e.message)
    })
  }

  edit() {
    this.isEditing = true;
    this.school = new School(this.formBuilder);
    this.school.createForm();
  }

  save() {
    this.profile.saveSchool(this.school.form.getRawValue()).subscribe({
      next: (data) => { console.log(data), this.isEditing = false },
      error: (e) => console.log(e.message)
    })
    this.isEditing = false;
  }
}
