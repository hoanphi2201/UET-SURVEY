import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private nzMessageService: NzMessageService,
        private router: Router,
        private authService: AuthService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let allow = false;
        this.authService.getCurrentUser().subscribe(res => {
            if (res) {
                const { role } = res;
                if (res && role && role.roleAcp) allow = true;
            }
        });
        if (allow) return true;
        this.nzMessageService.error('Access is denied. You do not have access to this resource.');
        this.router.navigate(['/dashboard']);
        return false;
    }
}