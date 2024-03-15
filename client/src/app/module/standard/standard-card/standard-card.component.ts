import { Component, Input } from '@angular/core';
import { IStandard } from '../standard';

@Component({
  selector: 'app-standard-card',
  templateUrl: './standard-card.component.html',
  styleUrl: './standard-card.component.scss'
})
export class StandardCardComponent {
  @Input() class!: IStandard;
}
