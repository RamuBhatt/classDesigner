import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppRoute } from '../class/app-route';
import { Users } from '../enums/users';
import { RoleGuard } from '../guards/role.guard';
import { AuthGuard } from '../guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { TimetableService } from './timetable/timetable.service';

const routes: Routes = [
  {
    path: AppRoute.Dashboard,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    // canActivate: [RoleGuard], data: { role: [Users.Admin, Users.Faculty] },
    path: AppRoute.TimeTable,
    loadChildren: () => import('../module/timetable/timetable.module').then(m => m.TimetableModule)
  },
  {
    path: AppRoute.Attendance,
    loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule)
  },
  { path: AppRoute.Profile, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'standard', loadChildren: () => import('./standard/standard.module').then(m => m.StandardModule) },
]

@NgModule({
  declarations: [],
  providers: [TimetableService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class BasicModule { }
