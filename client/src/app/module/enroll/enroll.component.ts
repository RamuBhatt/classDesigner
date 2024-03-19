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
  @Input() schoolId!: string;
  @Input() standardId!: string | null;

  constructor(private generateService: GenerateService) { }

  generate(user: Users, count: string) {
    const data = {
      Count: Number(count),
      SchoolId: this.schoolId,
      StandardId: this.standardId
    }

    if (user == Users.Student)
      this.generateService.enrollStudents(data).subscribe({
        next: (data) => { console.log(data) },
        error: (e) => { console.log(e) }
      })

    if (user == Users.Faculty)
      this.generateService.enrollFacutly(data).subscribe({
        next: (data) => { console.log(data) },
        error: (e) => { console.log(e) }
      })
  }
}
