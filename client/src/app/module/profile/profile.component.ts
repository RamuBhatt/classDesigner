import { Component } from '@angular/core';
import { Users } from '../../enums/users';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  Users = Users;
  role: Users;

  constructor(private userService: UserService) {
    this.role = userService.getRole();
  }
} 
