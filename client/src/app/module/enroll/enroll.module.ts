import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EnrollComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  exports: [EnrollComponent]
})
export class EnrollModule { }
