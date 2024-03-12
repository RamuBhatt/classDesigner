import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppRoute } from '../class/app-route';

export const AuthGuard: CanActivateFn = (route, state) => {
  let user = inject(UserService);
  let router = inject(Router);

  if (user.isAuthenticated()) return user.setAuth;
  else {
    router.navigate([AppRoute.Login])
    return false;
  }
};
