import { Component } from '@angular/core';
import { Users } from '../../enums/users';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { AppRoute } from '../../class/app-route';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.scss'
})
export class StandardComponent {
  role: Users;

  constructor(
    private userService: UserService,
    private router: Router
  ) { this.role = userService.getRole() }

  ngOnInit(): void {
    if (this.role == Users.Student)
      this.router.navigate([AppRoute.getRoute(AppRoute.Standard, this.userService.getStandardId())]);
  }
}
