import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPerson } from '@ng-icons/bootstrap-icons'
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { AppRoute } from '../../../class/app-route';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ bootstrapPerson })],
})
export class HeaderComponent {
  public userName: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userName = userService.getName();
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate([AppRoute.Login])
  }
}
