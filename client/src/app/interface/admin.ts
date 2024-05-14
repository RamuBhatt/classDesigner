import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class Admin {
    Id!: number;
    FirstName!: string;
    LastName!: string;
    Email?: string;
    Phone!: string;
    DOB!: Date;
    Gender!: boolean;
    Address!: boolean;
    SchoolId!: string;
    public form!: FormGroup;
}