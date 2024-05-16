import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseEntities } from "../../../interface/user";

export class Faculty {
    Id!: number;
    FirstName!: string;
    LastName!: string;
    Email?: string;
    Phone!: string;
    DOB!: Date;
    Gender!: boolean;
    UserName?: string;
    Address!: boolean;
    Division!: string;
    Medium!: string;
    RollNumber!: string;
    StandardId!: string;
    public form!: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { }

    createForm() {
        this.form = this.formBuilder.group(Faculty.getForm());
    }

    public static getForm() {
        return {
            Id: new FormControl(''),
            FirstName: new FormControl(''),
            LastName: new FormControl(''),
            Email: new FormControl(''),
            Phone: new FormControl(''),
            Gender: new FormControl(''),
            DOB: new FormControl(''),
            UserName: new FormControl(''),
            Address: new FormControl(''),
            Division: new FormControl(''),
            Medium: new FormControl(''),
            RollNumber: new FormControl(''),
            StandardId: new FormControl('')
        }
    }
}