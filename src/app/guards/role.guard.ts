import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppRoute } from '../class/app-route';
import { Users } from '../enums/users';

export const RoleGuard: CanActivateFn = (route, state) => {
  let user = inject(UserService);
  let router = inject(Router);
  let acceptedRoles:number[] = route.data['role']
  
  let isAcceptable = acceptedRoles.includes(user.getRole())
  
  if (isAcceptable) return true;
  else {
    router.navigate([AppRoute.Dashboard])
    return false;
  }
};
