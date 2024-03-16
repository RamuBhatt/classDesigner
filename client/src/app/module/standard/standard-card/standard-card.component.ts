import { Component, Input } from '@angular/core';
import { IStandard } from '../standard';
import { Router } from '@angular/router';
import { AppRoute } from '../../../class/app-route';

@Component({
  selector: 'app-standard-card',
  templateUrl: './standard-card.component.html',
  styleUrl: './standard-card.component.scss'
})
export class StandardCardComponent {
  @Input() class!: IStandard;

  constructor(private router: Router) { }

  navigate(id: string) {
    this.router.navigate([AppRoute.getRoute(AppRoute.Standard, id)]);
  }
}
