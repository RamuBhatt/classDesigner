import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from '../../../class/app-route';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  @Input() user!: any;

  constructor(private route: Router) {
    console.log(this.user);
  }

  openProfile() {
    
    const route = AppRoute.getRoute(
      AppRoute.Profile,
      AppRoute.Faculty,
      this.user.Id
    )
    this.route.navigate([route]);
  }
}
