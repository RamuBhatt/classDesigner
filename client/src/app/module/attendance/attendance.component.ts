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

  constructor(private userService: UserService, private attendanceService: AttendanceService) { }

  Students: any = [
    // {
    //   status: false,
    //   roll: 78454,
    //   name: 'kush gangwal'
    // },
    // {
    //   status: true,
    //   roll: 40394,
    //   name: 'monkey D. luffy'
    // },
    // {
    //   status: false,
    //   roll: 98546,
    //   name: 'yash suthar'
    // }
  ]

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    this.getStudents();
    // this.getStandard();
    // this.getSubject();
    // this.getFaculty();
  }

  getStudents() {
    this.attendanceService.getStudents(this.userService.getId()).subscribe({
      next: (data: any) => {
        this.Students = data.Model;
        this.Students = this.Students.map((s: any) => ({ Rollnumber: s.Rollnumber, Name: s.Firstname + s.Lastname, status: false }))
      },
      error: (e) => console.log(e)
    })
  }
}
