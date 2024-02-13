import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AppRoute } from '../../class/app-route';
import { RoleGuard } from '../../guards/role.guard';
import { Users } from '../../enums/users';
import { CreateTimetableComponent } from './create-timetable/create-timetable.component';

const routes: Routes = [
  {
    path: '',
    component: TimetableComponent
  },
  {
    canActivate: [RoleGuard], data: { role: [Users.Admin, Users.Faculty] },
    path: AppRoute.Add,
    loadChildren: () => import('./create-timetable/create-timetable.component').then(c => c.CreateTimetableComponent)
  }
]

@NgModule({
  declarations: [
    TimetableComponent,
    CreateTimetableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule
  ]
})
export class TimetableModule { }
