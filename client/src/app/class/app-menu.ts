import { Users } from "../enums/users";
import { AppRoute } from "./app-route";

export const App = [
    {
        menu: AppRoute.Dashboard,
        url: AppRoute.getRoute(AppRoute.Dashboard),
        isActive: true,
        roles: [Users.Admin, Users.Faculty, Users.Parents, Users.Student]
    },
    {
        menu: AppRoute.TimeTable,
        url: AppRoute.getRoute(AppRoute.TimeTable),
        isActive: false,
        roles: [Users.Admin, Users.Faculty, Users.Parents, Users.Student],
        children: [{
            menu: AppRoute.Add,
            url: AppRoute.getRoute(AppRoute.TimeTable, AppRoute.Add),
            roles: [Users.Admin, Users.Faculty]
        }]
    },
    {
        menu: AppRoute.Attendance,
        url: AppRoute.getRoute(AppRoute.Attendance),
        roles: [Users.Admin, Users.Faculty, Users.Parents, Users.Student],
        isActive: false,
        children: [{
            menu: AppRoute.Add,
            url: AppRoute.getRoute(AppRoute.Attendance, AppRoute.Add),
            roles: [Users.Admin, Users.Faculty]
        }]
    },
    {
        menu: AppRoute.Standard,
        url: AppRoute.Standard,
        roles: [Users.Admin, Users.Faculty],
        isActive: false,
    },
    {
        menu: AppRoute.Profile,
        url: AppRoute.getRoute(AppRoute.Profile),
        roles: [Users.Admin, Users.Faculty, Users.Parents, Users.Student],
        isActive: false,
    }
]