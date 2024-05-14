import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseEntities, User } from "../../../interface/user";
import { Admin } from "../../../interface/admin";

export class School {
    Id!: number;
    Name!: string;
    Email?: string;
    Phone!: string;
    Address!: boolean;
    FirstName!: string;
    LastName!: string;
    AdminEmail?: string;
    AdminPhone!: string;
    DOB!: Date;
    Gender!: boolean;
    AdminAddress!: boolean;
    public form!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    createForm() {
        this.form = this.formBuilder.group(School.getForm());
    }

    public static getForm() {
        return {
            Id: new FormControl(''),
            Name: new FormControl(''),
            Email: new FormControl(''),
            Phone: new FormControl(''),
            Address: new FormControl(''),
            FirstName: new FormControl(),
            LastName: new FormControl(),
            AdminEmail: new FormControl(),
            AdminPhone: new FormControl(),
            DOB: new FormControl(),
            Gender: new FormControl(),
            AdminAddress: new FormControl(),
        }
    }
}