import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Timetable } from '../timetable';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrl: './create-timetable.component.css'
})
export class CreateTimetableComponent implements OnInit{
  timetable!: Timetable;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.timetable = new Timetable(this.formBuilder);
    this.timetable.createForm();
  }

  Submit() {
    console.log(this.timetable.form.value);
  }
}
