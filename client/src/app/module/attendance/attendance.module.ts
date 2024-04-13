import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { MatListModule } from '@angular/material/list';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';

const routes: Routes = [
  { path: '', component: AttendanceComponent }
];

@NgModule({
  declarations: [
    AttendanceComponent,
    CreateAttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule
  ]
})
export class AttendanceModule { }
