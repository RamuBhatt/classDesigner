import { Faculty } from "./faculty";
import { Parents } from "./parents";
import { Student } from "./student";
import { BaseEntities } from "./user";

export interface School extends BaseEntities {
    Name: string;
    Email: string;
    Phone: number;
    Address: string;
    Students: Student[];
    Faculty: Faculty[];
    Parents: Parents[];
}