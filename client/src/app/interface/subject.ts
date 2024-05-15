import { Faculty } from "./faculty";

export interface Subject {
    Id: string;
    StandardId: string;
    Name: string;
    SchoolId: string;
    FacultyId: string;
    faculty: any;
}