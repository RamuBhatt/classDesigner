import { Component } from '@angular/core';
import { App } from '../../../class/app-menu';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { Users } from '../../../enums/users';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  App = App;
  userRole: Users;

  constructor(
    private router: Router,
    private url: ActivatedRoute,
    private userService: UserService) {
    this.userRole = userService.getRole();
  }

  navigateTo(app: any, isSubMenu?: 'Yes') {
    this.router.navigate([app.url]);
    if (isSubMenu) return;
    App.map((a: any) => a.isActive = (a == app) ? true : false)
  }
}