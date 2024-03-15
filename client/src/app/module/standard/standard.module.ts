import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';


const routes: Routes = [
  { path: '', component: StandardComponent }
];

@NgModule({
  declarations: [
    StandardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StandardModule { }
