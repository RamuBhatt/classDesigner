import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { UserService } from '../../../service/user.service';
import { StandardService } from '../standard.service';

@Component({
  selector: 'app-create-standard',
  templateUrl: './create-standard.component.html',
  styleUrl: './create-standard.component.css'
})
export class CreateStandardComponent {
  isEditing!: boolean;
  Class: FormGroup;

  constructor(
    private userService: UserService,
    private standardService: StandardService
  ) {
    this.Class = new FormGroup(
      {
        Id: new FormControl(Guid.create().toString()),
        Name: new FormControl(''),
        Division: new FormControl(''),
        SchoolId: new FormControl(userService.getSchoolId()),
      }
    )
  }

  edit() {
    this.isEditing = true;
  }

  submit() {
    if (this.Class.invalid) return;
    this.standardService.create(this.Class.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      }
    })
  }
}
