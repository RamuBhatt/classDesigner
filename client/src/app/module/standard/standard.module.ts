import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';
import { StandardCardComponent } from './standard-card/standard-card.component';
import { CreateStandardComponent } from './create-standard/create-standard.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';
import { StandardListComponent } from './standard-list/standard-list.component';
import { StandardDetailsComponent } from './standard-details/standard-details.component';
import { AppRoute } from '../../class/app-route';
import { EnrollModule } from '../enroll/enroll.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubjectModule } from '../subject/subject.module';
import { SubjectComponent } from '../subject/subject.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', component: StandardComponent },
  { path: AppRoute.Subject, pathMatch: 'full', redirectTo: '' },
  { path: AppRoute.getRoute(AppRoute.Subject, AppRoute.Id), pathMatch: 'full', component: SubjectComponent },
  { path: AppRoute.Id, pathMatch: 'full', component: StandardDetailsComponent },
];

@NgModule({
  declarations: [
    StandardComponent,
    StandardCardComponent,
    CreateStandardComponent,
    StandardListComponent,
    StandardDetailsComponent,
  ],
  imports: [
    CommonModule,
    EnrollModule,
    NgIconsModule.withIcons({ bootstrapPlus }),
    RouterModule.forChild(routes),
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SubjectModule
  ]
})
export class StandardModule { }
