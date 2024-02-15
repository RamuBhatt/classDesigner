import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrl: './create-timetable.component.css'
})
export class CreateTimetableComponent implements OnInit {

  @Input() TableList!: string[];
  timetable!: Timetable;

  constructor(
    private formBuilder: FormBuilder,
    private timetableService: TimetableService
  ) { }

  ngOnInit(): void {
    this.timetable = new Timetable(this.formBuilder);
    this.timetable.createForm();
  }

  Submit() {
    console.log(this.timetable.form.value);
    this.timetableService.create(this.timetable.form.value).subscribe({
      next: (data) => console.log("success"),
      error: (e) => console.log(e)
    })
  }
}
