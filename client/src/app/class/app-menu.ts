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
        menu: AppRoute.Attandance,
        url: AppRoute.getRoute(AppRoute.Attandance),
        roles: [Users.Admin, Users.Faculty, Users.Parents, Users.Student],
        isActive: false,
        children: [{
            menu: AppRoute.Add,
            url: AppRoute.getRoute(AppRoute.Attandance, AppRoute.Add),
            roles: [Users.Admin, Users.Faculty]
        }]
    }
]