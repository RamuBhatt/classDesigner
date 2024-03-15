import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Users } from '../../enums/users';
import { TimetableService } from './timetable.service';
import { Timetable } from './timetable';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {

  canAccess!: boolean
  AllTimetable!: Timetable[];
  TableList: any = []
  date: Date = new Date(Date.now());

  constructor(
    private userService: UserService,
    private timetableService: TimetableService
  ) { }

  ngOnInit(): void {
    this.checkRole();
    this.getTimetable();
  }

  checkRole() {
    let userRole = this.userService.getRole();
    if (userRole == Users.Admin && Users.Faculty) {
      this.TableColumns.push('Action');
      this.canAccess = true;
    }
  }

  getTimetable() {
    this.timetableService.get().subscribe({
      next: async (result: any) => {
        this.AllTimetable = result.data
        this.filterFromData()
      },
      error: (error) => console.log(error)
    })
  }

  filterFromData() {
    this.AllTimetable.filter(t => {
      if (this.TableList.includes(t.Exam)) return false;
      else {
        this.TableList.push(t.Exam);
        return true;
      };
    })

    
    this.TableDataFromAPI = this.TableList.map((table: any) => {
      let TableData = this.AllTimetable.filter(t => t.Exam == table);
      return { header: table, data: TableData };
    })
    
    
    console.log(this.TableDataFromAPI);

  }

  TableColumns: string[] = ['Index', 'Date', 'Day', 'Time', 'Subject']
  DataSource = [
    { Index: 1, Date: '2024-02-11', Day: 'Monday', Time: '09:00 AM', Subject: 'Mathematics', },
    { Index: 2, Date: '2024-02-12', Day: 'Tuesday', Time: '10:30 AM', Subject: 'English Literature' },
    { Index: 3, Date: '2024-02-13', Day: 'Wednesday', Time: '11:45 AM', Subject: 'History' },
    { Index: 4, Date: '2024-02-14', Day: 'Thursday', Time: '02:00 PM', Subject: 'Physics' },
    { Index: 5, Date: '2024-02-15', Day: 'Friday', Time: '01:15 PM', Subject: 'Biology' }
  ];
  TableDataFromAPI:any = [
    // { header: 'Mid Terms', data: this.DataSource },
    // { header: 'Final Exams', data: this.DataSource },
  ];
}
