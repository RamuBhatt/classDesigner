import { Component } from '@angular/core';
import { IStandard } from './standard';
import { Users } from '../../enums/users';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.scss'
})
export class StandardComponent {
  Standards: IStandard[] = [
    { id: "123", name: '8', div: 'junior' },
    { id: "456", name: '10', div: 'senior' },
    { id: "390", name: '4', div: 'A' },
    { id: "293", name: '2', div: 'B' },
  ]
  role: Users;

  constructor(private userService: UserService) { this.role = userService.getRole() }

}
