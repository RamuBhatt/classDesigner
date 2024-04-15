import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Users } from '../../enums/users';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  standardId!: string;
  Students: any = [];

  constructor(
    private userService: UserService,
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
    this.initialization();
    if (this.userService.getRole() == Users.Faculty) this.standardId = this.userService.getStandardId();
  }

  initialization() {
    this.getStudents();
    // this.getStandard();
    // this.getSubject();
    // this.getFaculty();
  }

  getStudents() {
    this.attendanceService.getStudents(this.standardId).subscribe({
      next: (data: any) => {
        this.Students = data.Model;
        this.Students = this.Students.map((s: any) => ({ Rollnumber: s.Rollnumber, Name: s.Firstname + s.Lastname, status: false }))
      },
      error: (e) => console.log(e)
    })
  }
}
