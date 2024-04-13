import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() refresh = new EventEmitter();

  constructor(
    private userService: UserService,
    private standardService: StandardService
  ) {
    this.Class = new FormGroup(
      {
        Id: new FormControl(''),
        Name: new FormControl(''),
        Division: new FormControl(''),
        SchoolId: new FormControl(''),
      }
    )
  }

  edit() {
    this.Class.get('Id')?.setValue(Guid.create().toString());
    this.Class.get('SchoolId')?.setValue(this.userService.getSchoolId());
    this.isEditing = true;
  }

  submit() {
    if (this.Class.invalid) return;
    this.standardService.create(this.Class.value).subscribe({
      next: (data) => {
        console.log(data);
        this.refresh.emit();
        this.isEditing = false;
        this.Class.reset();
      },
      error: (data) => {
        console.log(data);
      }
    })
  }
}
