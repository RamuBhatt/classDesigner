export interface BaseEntities {
    Id: number;
    IsActive: boolean;
    CreatedOn?: Date;
    CreatedBy?: number;
    UpdatedOn?: Date;
    UpdatedBy?: number;
}
export interface User extends BaseEntities {
    SchoolId: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    Email: string;
    RoleId: string;
    Phone: number;
    Password: string;
}
