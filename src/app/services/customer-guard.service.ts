import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.type === 'customer') {
      return true;
    }

    this.router.navigateByUrl('login');
    return false;
  }
}
