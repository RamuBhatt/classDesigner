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

/**
 * Name: "",
    Email: "",
    Phone: 0,
    Address: "",
    Students: [],
    Faculty: [],
    Parents: [],
    Id: 0,
    isActive: false,
    CreatedOn: undefined,
    CreatedBy: 0,
    UpdatedOn: undefined,
    UpdatedBy: 0
 */