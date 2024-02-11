import { Medium } from "../enums/medium";
import { User } from "./user";

export interface Faculty extends User{
    Subject: string;
    Standard: number;
    Medium: Medium;
    JoiningDate: Date;
}
