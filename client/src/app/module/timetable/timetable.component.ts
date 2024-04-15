import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Users } from '../../enums/users';
import { TimetableService } from './timetable.service';
import { Timetable } from './timetable';
import moment from 'moment';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {

  canAccess!: boolean
  moment = moment;
  AllTimetable!: Timetable[];
  TableList: any = []
  date: Date = new Date();
  isLoading: boolean = true;
  TableColumns: string[] = ['Index', 'Date', 'Day', 'Time', 'Subject']
  TableDataFromAPI: any = [
    // { header: 'Mid Terms', data: this.DataSource },
    // { header: 'Final Exams', data: this.DataSource },
  ];

  constructor(
    private userService: UserService,
    private timetableService: TimetableService
  ) { }

  ngOnInit(): void {
    this.checkRole();
    this.getTimetable();
    console.log(window);
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
        this.isLoading = false; 
        this.TableDataFromAPI = result;
      },
      error: (error) => console.log(error)
    })
  }
}
