import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', component: AttendanceComponent }
];

@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule
  ]
})
export class AttendanceModule { }
