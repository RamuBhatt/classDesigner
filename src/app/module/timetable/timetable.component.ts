import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {
  constructor() { }
  TableColumns: string[] = ['Index', 'Date', 'Day', 'Time', 'Subject']
  DataSource = [
    { Index: 1, Date: '2024-02-11', Day: 'Monday', Time: '09:00 AM', Subject: 'Mathematics' },
    { Index: 2, Date: '2024-02-12', Day: 'Tuesday', Time: '10:30 AM', Subject: 'English Literature' },
    { Index: 3, Date: '2024-02-13', Day: 'Wednesday', Time: '11:45 AM', Subject: 'History' },
    { Index: 4, Date: '2024-02-14', Day: 'Thursday', Time: '02:00 PM', Subject: 'Physics' },
    { Index: 5, Date: '2024-02-15', Day: 'Friday', Time: '01:15 PM', Subject: 'Biology' }
  ]
  TableDataFromAPI = [
    { header: 'Mid Terms', data: this.DataSource },
    { header: 'Final Exams', data: this.DataSource },
  ]



}