import { Component, Input } from '@angular/core';
import { Users } from '../../enums/users';
import { GenerateService } from '../../service/generate.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  Users = Users

  constructor(private generateService: GenerateService) { }

  generate(user: Users, count: string) {
    this.generateService.EnrollStudents(Number(count)).subscribe({
      next: (data) => { console.log(data) },
      error: (e) => { console.log(e) }
    })
  }
}
