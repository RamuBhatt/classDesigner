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

  constructor(private route: Router) { }

  openProfile() {
    const route = AppRoute.getRoute(
      AppRoute.Profile,
      this.user.SubjectId ? AppRoute.Faculty : AppRoute.Student,
      this.user.id
    )

    this.route.navigate([route]);
  }
}
