import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStandard } from '../standard';

@Component({
  selector: 'app-standard-details',
  templateUrl: './standard-details.component.html',
  styleUrl: './standard-details.component.css'
})
export class StandardDetailsComponent {

  Id: string | null;
  class!: IStandard;

  constructor(private router: ActivatedRoute) {
    this.Id = router.snapshot.paramMap.get('id');
  }
}
