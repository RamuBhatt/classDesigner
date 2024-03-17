import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStandard } from '../standard';
import { MatAccordion } from '@angular/material/expansion';
import { AppRoute } from '../../../class/app-route';
import { UserService } from '../../../service/user.service';
import { StandardService } from '../standard.service';
import { Faculty } from '../../../interface/faculty';
import { Student } from '../../../interface/student';
import { User } from '../../../interface/user';
import { Users } from '../../../enums/users';

@Component({
  selector: 'app-standard-details',
  templateUrl: './standard-details.component.html',
  styleUrl: './standard-details.component.css'
})
export class StandardDetailsComponent implements OnInit {

  standardId;
  class!: IStandard;
  schoolId: string = this.userService.getSchoolId();
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  public unFaculty!: User[];
  public unStudents!: User[];
  public acFaculty!: User[];
  public acStudents!: User[];

  constructor(
    private url: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private standardService: StandardService
  ) {
    this.standardId = url.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        if (!data.IsSuccess) return;

        const users: User[] = data.Model;
        this.unFaculty = users.filter(u => !u.isActive && u.RoleId == Users.Faculty.toString());
        this.unStudents = users.filter(u => !u.isActive && u.RoleId == Users.Student.toString());
        this.acFaculty = users.filter(u => u.isActive && u.RoleId == Users.Faculty.toString());
        this.acStudents = users.filter(u => u.isActive && u.RoleId == Users.Student.toString());
      },
      error: (e) => console.error(e)
    })
  }

  goToSubject() {
    this.router.navigate([AppRoute.getRoute(AppRoute.Standard, AppRoute.Subject, this.standardId!)])
  }
  goToTimeTable() {
    this.router.navigate([AppRoute.TimeTable])
  }
}
