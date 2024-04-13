import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [EnrollComponent, ListUsersComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  exports: [EnrollComponent, ListUsersComponent]
})
export class EnrollModule { }
