import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';
import { StandardCardComponent } from './standard-card/standard-card.component';


const routes: Routes = [
  { path: '', component: StandardComponent },
];

@NgModule({
  declarations: [
    StandardComponent,
    StandardCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StandardModule { }
