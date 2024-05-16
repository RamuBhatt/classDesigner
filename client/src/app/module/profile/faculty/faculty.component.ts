import { Component } from '@angular/core';
import { Faculty } from './faculty';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  isEditing!: boolean;
  isLoading!: boolean;
  faculty!: Faculty;
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
    }
  }

  edit() {
    this.isEditing = true;
    this.faculty = new Faculty(this.formBuilder);
    this.faculty.createForm();
    this.getFaculty();
  }

  getFaculty() {
    this.profile.getFaculty(this.usersId).subscribe({
      next: (data: any) => {
        this.faculty.form.patchValue(data.Model);
      },
      error: (e) => console.log(e.message)
    })
  }

  cancle() {
    this.isEditing = false;
  }

  save() {
    this.profile.saveFaculty(this.faculty.form.getRawValue()).subscribe({
      next: (data) => { console.log(data), this.isEditing = false },
      error: (e) => console.log(e.message)
    })
    this.isEditing = false;
  }
}
