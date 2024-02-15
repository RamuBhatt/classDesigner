import { Component } from '@angular/core';
import { App } from '../../../class/app-menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoute } from '../../../class/app-route';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  App = App;

  constructor(private router: Router) { }

  navigateTo(app: any) {
    this.router.navigate([app.url]);
    App.map((a: any) => {
      a.isActive = (a == app) ? true : false;
    })
  }
}
