import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Users } from '../../enums/users';
import { AttendanceService } from './attendance.service';
import { User } from '../../interface/user';

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
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        if (!data.IsSuccess) return;
        const users: User[] = data.Model;
        let activeStudents = users.filter(u => u.IsActive && u.RoleId == Users.Student.toString());
        this.Students = activeStudents.map((s: any) => ({ Id: s.Id, UserName: s.UserName, Name: s.FirstName + " " + s.LastName, Status: false }))
      },
      error: (e) => console.error(e)
    })
  }
}
