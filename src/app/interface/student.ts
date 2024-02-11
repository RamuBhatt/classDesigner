import { Parents } from "./parents";
import { User } from "./user";

export interface Student extends User{
    RollNumber: number;
    Standerd: number;
    Division: string;
    Medium: 'English';
    Address: string;
    Parents: Parents[];
}
