import { Medium } from "../enums/medium";
import { User } from "./user";

export interface Faculty extends User {
    SubjectId: string;
    StandardId: number;
    JoiningDate: Date;
    Users?: User;
}
