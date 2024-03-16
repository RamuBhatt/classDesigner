import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';
import { StandardCardComponent } from './standard-card/standard-card.component';
import { CreateStandardComponent } from './create-standard/create-standard.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapPersonVideo3, bootstrapPlus } from '@ng-icons/bootstrap-icons';
import { StandardListComponent } from './standard-list/standard-list.component';
import { StandardDetailsComponent } from './standard-details/standard-details.component';
import { AppRoute } from '../../class/app-route';
import { BasicModule } from '../basic.module';
import { EnrollModule } from '../enroll/enroll.module';


const routes: Routes = [
  { path: '', component: StandardComponent },
  { path: AppRoute.Id, component: StandardDetailsComponent },
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
    RouterModule.forChild(routes)
  ]
})
export class StandardModule { }
