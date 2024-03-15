import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';
import { Guid } from 'guid-typescript';
import moment from 'moment';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrl: './create-timetable.component.css'
})
export class CreateTimetableComponent implements OnInit {

  TableList: any = []
  timetable!: Timetable;
  TableDataFromAPI: any = [
    // { header: 'Mid Terms', data: this.DataSource },
    // { header: 'Final Exams', data: this.DataSource },
  ];
  AllTimetable!: Timetable[];


  constructor(
    private formBuilder: FormBuilder,
    private timetableService: TimetableService
  ) { }

  ngOnInit(): void {
    this.timetable = new Timetable(this.formBuilder);
    this.timetable.createForm();
    this.getTimetable();
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
  }

  Submit() {
    this.timetable.form.get('Id')?.setValue(Guid.create().toString())
    let date = moment(this.timetable.form.get('Date')?.value).format('YYYY-MM-DD hh:mm:ss').toString();
    this.timetable.form.get('Date')?.setValue(date);

    this.timetableService.create(this.timetable.form.value).subscribe({
      next: (data: any) => {
        if (data.IsSuccess) {

        }
      },
      error: (e) => console.log(e?.mesaage)
    })
  }
}
