import { Injectable } from "@angular/core";
import { of, Observable, BehaviorSubject, Subscription } from "rxjs";
import { tap, distinctUntilChanged, map } from "rxjs/operators";
import { ApiService } from "../services/admin/api.service";
import { Router } from "@angular/router";
import { LoaderService } from "@app/shared/services";
import { User, Tokens } from "../domain";
import { environment as env } from "@env/environment";
import { DCityService } from "../services";
import { NzModalService } from "ng-zorro-antd";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  listOfAllJobRole = env.jobRole;
  private currentUserSubject$ = new BehaviorSubject<User>({} as User);
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";

  constructor(
    private router: Router,
    private apiService: ApiService,
    private loaderService: LoaderService,
    private dCityService: DCityService,
    private modalService: NzModalService
  ) {}
  public getCurrentUser(): Observable<User> {
    return this.currentUserSubject$.asObservable().pipe(distinctUntilChanged());
  }
  public async setCurrentUser(user: any, update?: boolean) {
    if (user) {
      const subscription: Subscription = this.getCurrentUser().subscribe(
        async userData => {
          if (userData) {
            const { jobRole } = user;
            if (
              (!update && jobRole) ||
              (update && jobRole !== userData.jobRole)
            ) {
              try {
                user.jobRoleView = this.listOfAllJobRole.filter(
                  o => o.value === jobRole
                )[0].viewValue;
              } catch (error) {
                user.jobRoleView = "Job Role";
              }
            } else {
              user.jobRoleView = "Job Role";
            }
            if (
              (!update && user.organization && user.organization.location) ||
              (update &&
                user.organization &&
                user.organization.location &&
                user.organization.location !== userData.organization.location)
            ) {
              await this.dCityService
                .getCityById(user.organization.location)
                .then(res => {
                  subscription.unsubscribe();
                  user.organizationLocationView = `${res.results[0].name}, ${res.results[0].state.country.name}`;
                })
                .catch(e => {
                  console.warn(e);
                });
            } else {
              user.organizationLocationView = "Organization";
            }
          }
        }
      );
    }

    if (update) {
      const codeError = [400, 404, 403];
      this.refreshTokenPromise()
        .then(res => {
          if (res.status.code === 200) {
            const decoded: User = jwt_decode(res.results[0].access_token);
            this.setCurrentUser(decoded);
            this.storeJwtToken(res.results[0].access_token);
          } else if (codeError.includes(res.status.code)) {
            this.doLogoutUser();
            this.router.navigate(["/auth/login"]);
            this.modalService.closeAll();
          }
        })
        .catch(e => {
          this.modalService.closeAll();
          this.doLogoutUser();
          this.router.navigate(["/auth/login"]);
        });
    } else {
      this.currentUserSubject$.next(user);
    }
  }

  login(user: { userName: string; password: string }): Observable<any> {
    return this.apiService.post("/auth/login", user).pipe(
      map(res => {
        if (res.status.code === 200) {
          const decoded: User = jwt_decode(res.results[0].access_token);
          this.setCurrentUser(decoded);
          this.storeTokens(res.results[0]);
        }
        return res;
      })
    );
  }

  logout() {
    this.doLogoutUser();
    this.loaderService.clear();
    this.router.navigate(["/login"]);
  }

  populate() {
    if (this.getJwtToken()) {
      const decoded: User = jwt_decode(this.getJwtToken());
      this.setCurrentUser(decoded);
    } else {
      this.doLogoutUser();
    }
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshTokenPromise(): Promise<any> {
    return this.apiService
      .post(`/auth/refresh_token`, { refresh_token: this.getRefreshToken() })
      .toPromise();
  }

  refreshToken() {
    return this.apiService
      .post(`/auth/refresh_token`, { refresh_token: this.getRefreshToken() })
      .pipe(
        tap(res => {
          const codeError = [400, 404, 403];
          if (res.status.code === 200) {
            this.storeJwtToken(res.results[0].access_token);
          } else if (codeError.includes(res.status.code)) {
            this.doLogoutUser();
          }
        })
      );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  doLogoutUser() {
    this.setCurrentUser(null);
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  public isAuthenticated(): Observable<boolean> {
    if (!this.getJwtToken()) {
      return of(false);
    }
    return of(true);
  }

  signup(user: User): Observable<any> {
    return this.apiService.post("/auth/signup", user);
  }
}
