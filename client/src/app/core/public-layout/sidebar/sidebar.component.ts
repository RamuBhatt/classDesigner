import { Component } from '@angular/core';
import { App } from '../../../class/app-menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoute } from '../../../class/app-route';
import { User } from '../../../interface/user';
import { UserService } from '../../../service/user.service';
import { Users } from '../../../enums/users';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  App = App;
  userRole: Users;

  constructor(private router: Router, private userService: UserService) {
    this.userRole = userService.getRole();
  }

  navigateTo(app: any) {
    this.router.navigate([app.url]);
    App.map((a: any) => {
      a.isActive = (a == app) ? true : false;
    })
  }
}
