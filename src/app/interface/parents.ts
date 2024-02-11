import { Student } from "./student";
import { User } from "./user";

export interface Parents extends User{
    Student: Student;
    relation: 'mother' | 'father';
}