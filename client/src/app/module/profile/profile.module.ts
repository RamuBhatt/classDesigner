import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SchoolComponent } from './school/school.component';
import { AppRoute } from '../../class/app-route';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  {
    // canActivate: [RoleGuard], data: { role: [Users.Admin, Users.Parents] },
    path: AppRoute.getRoute(AppRoute.Faculty, AppRoute.Id),
    component: FacultyComponent
  },
  {
    // canActivate: [RoleGuard], data: { role: [Users.Admin, Users.Faculty, Users.Parents] },
    path: AppRoute.getRoute(AppRoute.Student, AppRoute.Id),
    component: StudentComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    StudentComponent,
    FacultyComponent,
    SchoolComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule, MatDividerModule,
    MatDatepickerModule
  ]
})
export class ProfileModule { }
