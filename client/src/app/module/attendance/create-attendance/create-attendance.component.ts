import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AttendanceService } from '../attendance.service';
import { AttendanceOutDto, calcAttendance } from '../../../interface/attendance';
import { User } from '../../../interface/user';
import { Users } from '../../../enums/users';
import { Guid } from 'guid-typescript';
import moment from 'moment';
import { Subject } from '../../../interface/subject';
import { SubjectService } from '../../subject/subject.service';
import { AdminService } from '../../../service/admin.service';
import { Standard } from '../../../interface/standard';
import { StandardService } from '../../standard/standard.service';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrl: './create-attendance.component.css'
})
export class CreateAttendanceComponent implements OnInit {

  presentStudent: calcAttendance[] = [];
  Students: calcAttendance[] = [];
  Subjects!: Subject[];
  Standards!: Standard[];

  // Tracker
  isLoading: boolean = true;
  isAdmin: boolean;

  currentDate: Date = new Date();
  currStandard? = this.userService.getStandardId();
  currSubject? = this.userService.getSubjectId();
  SelcetedStudents: any;

  constructor(
    private userService: UserService,
    private attendanceService: AttendanceService,
    private subjectService: SubjectService,
    private adminService: AdminService,
    private standardService: StandardService,
  ) { this.isAdmin = userService.getRole() == Users.Admin }

  ngOnInit(): void {
    this.getStudents();
    this.getSubjects();
    this.getStandards();
  }

  // #region Initialization
  getStudents() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        if (!data.IsSuccess) return;

        this.isLoading = false;
        const users: User[] = data.Model;
        let activeStudents = users.filter(u => u.IsActive && u.RoleId == Users.Student.toString());
        this.Students = activeStudents.map((s: any) => ({ Id: s.Id, UserName: s.UserName, Name: s.FirstName + " " + s.LastName, Status: false }))
      },
      error: (e) => console.error(e)
    })
  }

  getSubjects() {
    this.subjectService.get().subscribe({
      next: (data: any) => {
        if (!data.IsSuccess) return;
        this.Subjects = data.Model;
      },
      error: (e) => console.error(e)
    })
  }

  getStandards() {
    this.standardService.get().subscribe({
      next: (data: any) => {
        this.isLoading = false; this.Standards = data.Model; console.log(this.Standards);
      },
      error: (e) => console.log(e)
    })
  }

  // #endregion 

  update(selected: any) {
    let presents = selected.selectedOptions.selected.map((s: any) => s.value);
    this.presentStudent = this.Students.map(std => {
      if (presents.includes(std.Id)) return { ...std, Status: true }
      else return { ...std, Status: false }
    })
  }


  submit() {
    const data: AttendanceOutDto = {
      Id: Guid.create().toString(),
      TimeStamp: this.currentDate,
      SubjectId: this.userService.getStandardId(),
      FacultyId: this.userService.getId(),
      Students: this.presentStudent
    }

    if (!this.presentStudent.length) return;

    this.attendanceService.create(data).subscribe({
      next: (data: any) => { },
      error: (e) => console.error(e)
    })
  }
}
