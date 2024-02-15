import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseEntities } from "../../interface/user";

class BaseClass implements BaseEntities {
    Id!: number;
    isActive!: boolean;
    CreatedOn!: Date;
    CreatedBy!: number;
    UpdatedOn!: Date;
    UpdatedBy!: number;
}

export class Timetable extends BaseClass {
    Exam!: string;
    Date!: Date;
    Subject!: string;
    TimeFrom!: number;
    TimeTo!: number;
    public form!: FormGroup;

    constructor(private formBuilder: FormBuilder) { super(); }

    createForm() {
        this.form = this.formBuilder.group(Timetable.getForm());
    }

    public static getForm() {
        return {
            Id: new FormControl(''),
            Exam: new FormControl(''),
            Date: new FormControl(''),
            Subject: new FormControl(''),
            TimeFrom: new FormControl(''),
            TimeTo: new FormControl(''),
            isActive: new FormControl(false)
        }
    }

    get(data: Timetable) {
        this.Id = data.Id;
        this.Exam = data.Exam;
        this.Date = data.Date;
        this.Subject = data.Subject;
        this.isActive = data.isActive;
        this.TimeFrom = data.TimeFrom;
        this.TimeTo = data.TimeTo;
        this.form.patchValue(this);
    }
}