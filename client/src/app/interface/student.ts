import { Medium } from "../enums/medium";
import { Parents } from "./parents";
import { User } from "./user";

export interface Student extends User{
    RollNumber: number;
    Standard: number;
    Division: string;
    Medium: Medium;
    Address: string;
    Parents: Parents[];
}
