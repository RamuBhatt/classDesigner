import { Routes } from '@angular/router';
import { ContainerComponent } from './core/public-layout/container/container.component';
import { Users } from './enums/users';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        canActivate: [AuthGuard], data: { role: [Users.Student, Users.Admin, Users.Faculty, Users.Parents] },
        path: '',
        component: ContainerComponent
    },
];
