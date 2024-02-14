import { Component } from '@angular/core';
import { App } from '../../../class/app-menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  App = App;

  constructor(private router:Router){}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
