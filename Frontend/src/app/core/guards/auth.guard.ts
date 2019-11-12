import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Logger } from '../logger.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url, state);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canLoad(
    route: Route,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url, state);
  }

  private checkLogin(
    url: string,
    state: any
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/auth/login'], {
            queryParams: { redirect: state.url },
            replaceUrl: true
          });
        }
      })
    );
  }
}
