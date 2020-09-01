import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.type === 'company') {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
