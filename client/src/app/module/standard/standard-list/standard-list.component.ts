import { Component, Input } from '@angular/core';
import { Users } from '../../../enums/users';
import { IStandard } from '../standard';

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styleUrl: './standard-list.component.css'
})
export class StandardListComponent {
  @Input() role!: Users;
  Standards: IStandard[] = [
    { id: "123", name: '8', div: 'junior' },
    { id: "456", name: '10', div: 'senior' },
    { id: "390", name: '4', div: 'A' },
    { id: "293", name: '2', div: 'B' },
  ]
}
