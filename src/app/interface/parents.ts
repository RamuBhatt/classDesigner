import { Relation } from "../enums/relation";
import { Student } from "./student";
import { User } from "./user";

export interface Parents extends User{
    StudentId: number;
    relation: Relation;
}

