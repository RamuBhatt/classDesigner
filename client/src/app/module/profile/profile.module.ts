import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SchoolComponent } from './school/school.component';
import { AppRoute } from '../../class/app-route';
import { Users } from '../../enums/users';
import { RoleGuard } from '../../guards/role.guard';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
    MatFormField, MatInputModule, MatProgressSpinnerModule
  ]
})
export class ProfileModule { }
