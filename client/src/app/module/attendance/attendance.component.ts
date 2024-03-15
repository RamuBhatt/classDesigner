import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  presents!: number[];
  Students = [
    {
      status: false,
      roll: 78454,
      name: 'kush gangwal'
    },
    {
      status: true,
      roll: 40394,
      name: 'monkey D. luffy'
    },
    {
      status: false,
      roll: 98546,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
    {
      status: true,
      roll: 95746,
      name: 'yash suthar'
    },
  ]

  currentDate: Date = new Date();

  update(selected: any) {
    this.presents = selected.selectedOptions.selected.map((s: any) => s.value);
    let presentStudent = this.Students.map(std => {
      if (this.presents.includes(std.roll)) return { ...std, status: true }
      else return { ...std, status: false }
    })
    console.log(this.presents,presentStudent);
  }
}
