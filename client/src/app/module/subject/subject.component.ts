import { Component, ViewChild } from '@angular/core';
import { Users } from '../../enums/users';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { SubjectService } from './subject.service';
import { Subject } from './subject';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  role: Users;
  stdId: string | null;
  canAccess!: boolean;
  faculty: any;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  Standards = [
    { id: '123', name: '7' },
    { id: '343', name: '8' },
    { id: '323', name: '6' }
  ]
  Subjects = [
    { id: '123', Name: 'Hindi', faculty: { id: '234', name: 'anupam mittal' } },
    { id: '343', Name: 'Gujarati', faculty: { id: '234', name: 'radhika aapte' } },
    { id: '323', Name: 'Engilsh', faculty: { id: '234', name: 'miss Inida' } }
  ]

  constructor(
    private url: ActivatedRoute,
    private userService: UserService,
    private subjectService: SubjectService,
    private adminService: AdminService,
  ) {
    this.stdId = url.snapshot.paramMap.get('id');
    this.role = userService.getRole();
  }

  ngOnInit(): void {
    this.checkRole();
    this.getFaculty();
    this.getSubjects();
    this.getStandards();
  }

  getSubjects() {
    this.subjectService.get().subscribe({
      next: (data: any) => { this.Subjects = data.Model },
      error: (err) => { console.error(err.message) }
    })
  }

  getStandards() {
    this.adminService.getStandard().subscribe({
      next: (data: any) => { this.Standards = data.Model },
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
    this.subjectService.create(subject, this.stdId!).subscribe({
      next: (data) => { },
      error: (err) => { console.error(err.message) }
    })
  }

}
