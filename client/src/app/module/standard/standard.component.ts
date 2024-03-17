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
  role: Users;

  constructor(private userService: UserService) { this.role = userService.getRole() }

}
