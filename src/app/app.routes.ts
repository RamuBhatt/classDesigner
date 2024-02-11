import { Routes } from '@angular/router';
import { ContainerComponent } from './core/public-layout/container/container.component';
import { Users } from './enums/users';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AppRoute } from './class/app-route';

export const routes: Routes = [
    {
        canActivate: [AuthGuard, RoleGuard], data: { role: [Users.Student, Users.Admin, Users.Faculty, Users.Parents] },
        path: '',
        component: ContainerComponent
    },
    {
        canActivate: [AuthGuard, RoleGuard], data: { role: [Users.Student] },
        path: '',
        component: ContainerComponent,
        loadChildren: () => import("./module/student.module").then(m => m.StudentModule)
    }
];
