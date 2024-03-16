import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';
import { StandardCardComponent } from './standard-card/standard-card.component';
import { CreateStandardComponent } from './create-standard/create-standard.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';


const routes: Routes = [
  { path: '', component: StandardComponent },
];

@NgModule({
  declarations: [
    StandardComponent,
    StandardCardComponent,
    CreateStandardComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapPlus }),
    RouterModule.forChild(routes)
  ]
})
export class StandardModule { }
