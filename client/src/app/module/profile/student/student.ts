import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseEntities } from "../../../interface/user";


// class BaseClass implements BaseEntities {
//     IsActive!: boolean;
//     CreatedOn!: Date;
//     CreatedBy!: number;
//     UpdatedOn!: Date;
//     UpdatedBy!: number;
// }

export class Student {
    Id!: number;
    FirstName!: string;
    LastName!: string;
    Email?: string;
    Phone!: string;
    Gender!: boolean;
    Address!: boolean;
    Division!: string;
    Medium!: string;
    RollNumber!: string;
    StandardId!: string;
    public form!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    createForm() {
        this.form = this.formBuilder.group(Student.getForm());
    }

    public static getForm() {
        return {
            Id: new FormControl(''),
            FirstName: new FormControl(''),
            LastName: new FormControl(''),
            Email: new FormControl(''),
            Phone: new FormControl(''),
            Gender: new FormControl(''),
            Address: new FormControl(''),
            Division: new FormControl({ value: '', disabled: true }),
            Medium: new FormControl(''),
            RollNumber: new FormControl({ value: '', disabled: true }),
            StandardId: new FormControl({ value: '', disabled: true }),
        }
    }
}