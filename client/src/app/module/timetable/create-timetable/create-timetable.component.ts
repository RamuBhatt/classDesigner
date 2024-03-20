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
  isLoading!: boolean;


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
        this.AllTimetable = result.data;
        result.map((t: any) => this.TableList.push(t.header));
      },
      error: (error) => console.log(error)
    });
  }

  Submit() {
    this.isLoading = true;
    this.timetable.form.get('Id')?.setValue(Guid.create().toString())
    let date = moment(this.timetable.form.get('Date')?.value).format('YYYY-MM-DD hh:mm:ss').toString();
    this.timetable.form.get('Date')?.setValue(date);

    this.timetableService.create(this.timetable.form.value).subscribe({
      next: (data: any) => {
        if (data.IsSuccess) {
          this.isLoading = false
        }
      },
      error: (e) => console.log(e?.mesaage)
    })
  }
}
