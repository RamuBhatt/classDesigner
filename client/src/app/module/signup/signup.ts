import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class SignUp{
    Id!: string;
    UserName!: string;
    Password!: string;
    RoleId!: string;
    public form!: FormGroup;

    constructor(private formbuilder: FormBuilder){
        this.createForm()
    }

    createForm(){
        this.form = this.formbuilder.group(SignUp.getForm());
    }

    public static getForm(){
        return{
            Id: new FormControl(''),
            UserName: new FormControl('', [Validators.required]),
            Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
            RoleId: new FormControl('')
        }
    }
}