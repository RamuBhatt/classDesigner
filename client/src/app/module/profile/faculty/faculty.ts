import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseEntities } from "../../../interface/user";

export class Faculty {
    Id!: number;
    Name!: string;
    Email?: string;
    Phone!: string;
    Address!: boolean;
    public form!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    createForm() {
        this.form = this.formBuilder.group(Faculty.getForm());
    }

    public static getForm() {
        return {
            Id: new FormControl(''),
            Name: new FormControl(''),
            Email: new FormControl(''),
            Phone: new FormControl(''),
            Address: new FormControl(''),
        }
    }
}