import { Component, ViewChild } from '@angular/core';
import { Users } from '../../enums/users';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { SubjectService } from './subject.service';
import { Subject } from '../../interface/subject';
import { AdminService } from '../../service/admin.service';
import { StandardService } from '../standard/standard.service';
import { IStandard } from '../standard/standard';
import { FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  role: Users;
  stdId: string | null;
  canAccess!: boolean;
  faculty: any; isLoading = true;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  Standards!: IStandard[];
  Subjects!: Subject[];
  currentClass = '';

  newSubject: FormGroup = new FormGroup({
    Id: new FormControl(),
    Name: new FormControl(),
    FacultyId: new FormControl(),
    SchoolId: new FormControl(this.userService.getSchoolId()),
    StandardId: new FormControl()
  })

  constructor(
    private url: ActivatedRoute,
    private userService: UserService,
    private subjectService: SubjectService,
    private standardService: StandardService,
    private adminService: AdminService
  ) {
    this.stdId = url.snapshot.paramMap.get('id');
    this.role = userService.getRole();
  }

  ngOnInit(): void {
    this.checkRole();
    this.getFaculty();
    this.getStandards();
  }

  getSubjects(standardId: string) {
    this.subjectService.getAll(standardId).subscribe({
      next: (data: any) => { this.Subjects = data.Model; this.isLoading = false },
      error: (err) => { console.error(err.message) }
    })
  }

  getStandards() {
    this.standardService.get().subscribe({
      next: (data: any) => {
        this.Standards = data.Model; this.getSubjects(this.Standards[0].Id);
        this.currentClass = this.Standards.at(0)!.Id;
      },
      error: (err) => { console.error(err.message) }
    })
  }

  checkRole() {
    this.canAccess = this.userService.getRole() == (Users.Admin || Users.Faculty)
  }

  getFaculty() {
    this.adminService.getFaculty().subscribe({
      next: (data: any) => { this.faculty = data.Model },
      error: (err) => { console.error(err.message) }
    })
  }

  save(subject: any) {
    this.subjectService.create(subject).subscribe({
      next: (data) => { },
      error: (err) => { console.error(err.message) }
    })
  }

  addSubject() {
    this.newSubject.get('Id')?.setValue(Guid.create().toString());
    this.newSubject.get('StandardId')?.setValue(this.currentClass);
    this.subjectService.create(this.newSubject.value).subscribe({
      next: (data: any) => { console.log("success") },
      error: (err) => { console.error(err.message) }
    })
  }
}
