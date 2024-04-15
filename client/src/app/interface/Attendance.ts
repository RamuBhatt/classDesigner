import { Subject } from "./subject";
import { Standard } from "./standard";
import { Student } from "./student";

export interface AttendanceOutDto {
    Id: string;
    TimeStamp: Date;
    SubjectId: string;
    FacultyId: string;
    Students: calcAttendance[];
}

export interface calcAttendance {
    Id: string;
    UserName: string;
    Name: string;
    /**
     * True = present
     * False = absent
     */
    Status: boolean;
}

export interface AttendanceSummery {
    Subject: Subject;
    Standard: Standard;
    TotalStudents: number;
    LessPresentStd: Student[];
}

