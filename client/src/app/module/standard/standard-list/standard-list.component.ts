import { Component, Input } from '@angular/core';
import { Users } from '../../../enums/users';
import { IStandard } from '../standard';
import { StandardService } from '../standard.service';

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styleUrl: './standard-list.component.css'
})
export class StandardListComponent {
  @Input() role!: Users;
  Standards!: IStandard[];
  isLoading: boolean = true;

  constructor(private standardService: StandardService) { }

  ngOnInit(): void {
    this.getStandards();
  }

  getStandards() {
    this.standardService.get().subscribe({
      next: (data: any) => { this.isLoading = false; this.Standards = data.Model },
      error: (e) => console.log(e)
    })
  }
}
