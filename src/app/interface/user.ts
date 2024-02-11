export interface BaseEntities {
    Id: number;
    isActive: boolean;
    CreatedOn: Date;
    CreatedBy: number;
    UpdatedOn: Date;
    UpdatedBy: number;
}
export interface User extends BaseEntities{
    SchoolId: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    Email: string;
    Phone: number;
}
