import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { role } from './../classes/user';

@Injectable({
  providedIn: 'root'
})
export class BossGuardGuard implements CanActivate {
  roles = role;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkBossLogin();
  }

  checkBossLogin(): boolean {
    if (
      this.authService.loggedInUser.roles[0] === role.Boss
    ) {
      return true;
    }
    return false;
  }
}
