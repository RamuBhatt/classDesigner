import { Component } from '@angular/core';
import { Faculty } from './faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  isEditing!: boolean;
  isLoading!: boolean;
  faculty!: Faculty;

  edit() {
    this.isEditing = true;
  }
  save() {
    this.isEditing = false;
  }
}
