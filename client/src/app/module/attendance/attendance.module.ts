import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { MatListModule } from '@angular/material/list';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { AppRoute } from '../../class/app-route';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', component: AttendanceComponent },
  { path: AppRoute.Add, component: CreateAttendanceComponent }
];

@NgModule({
  declarations: [
    AttendanceComponent,
    CreateAttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ]
})
export class AttendanceModule { }
