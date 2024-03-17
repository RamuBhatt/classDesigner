import { Faculty } from "../../interface/faculty";

export interface Subject {
    Id: string;
    StandardId: string;
    Name: string;
    Faculty: Faculty;
}