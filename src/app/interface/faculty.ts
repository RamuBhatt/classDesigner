import { User } from "./user";

export interface Faculty extends User{
    Subject: string;
    Standerd: number;
    Medium: 'English';
    JoiningDate: Date;
}
