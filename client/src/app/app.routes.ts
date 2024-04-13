import { Routes } from '@angular/router';
import { ContainerComponent } from './core/public-layout/container/container.component';
import { Users } from './enums/users';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './module/login/login/login.component';
import { SignupComponent } from './module/signup/signup.component';
import { AppRoute } from './class/app-route';

export const routes: Routes = [
    {
        path: AppRoute.Login,
        component: LoginComponent
    },
    {
        path: AppRoute.Signup,
        component: SignupComponent
    },
    {
        canActivate: [AuthGuard, RoleGuard], data: { role: [Users.Student, Users.Admin, Users.Faculty, Users.Parents] },
        path: '',
        component: ContainerComponent,
        loadChildren: () => import("./module/basic.module").then(m => m.BasicModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    },
    // {
    //     canActivate: [AuthGuard, RoleGuard], data: { role: [Users.Student,  Users.Faculty, Users.Parents] },
    //     path: '**',
    //     component: ContainerComponent
    // },
];
