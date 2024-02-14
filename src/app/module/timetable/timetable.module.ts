import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '../../class/app-route';
import { RoleGuard } from '../../guards/role.guard';
import { Users } from '../../enums/users';
import { CreateTimetableComponent } from './create-timetable/create-timetable.component';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatFormField,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class TimetableModule { }
