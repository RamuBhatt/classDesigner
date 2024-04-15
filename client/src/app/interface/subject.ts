import { Faculty } from "./faculty";

export interface Subject {
    Id: string;
    StandardId: string;
    Name: string;
    Faculty: Faculty;
}