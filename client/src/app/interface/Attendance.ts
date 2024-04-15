export interface AttendanceOutDto {
    Id: string;
    Date: Date;
    SubjectId: string;
    FacultyId: string;
    Students: calcAttendance[];
}

export interface calcAttendance {
    Id: string;
    Name: string;
    /**
     * True = present
     * False = absent
     */
    Status: boolean;
}

