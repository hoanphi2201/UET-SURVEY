import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';
import { LoaderService } from '@app/shared/services';
import { environment as env } from '@env/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    public authService: AuthService,
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<| HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (this.authService.getJwtToken() && (request.url.includes(env.serverAdminUrl) || request.url.includes(env.serverDefaultUrl) || request.url.includes(env.serverPublishUrl))) {
      request = this.addToken(request, this.authService.getJwtToken());
    }
    return next.handle(request).pipe(
      catchError(error => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === 401 &&
          this.authService.getJwtToken()
        ) {
          return this.handle401Error(request, next);
        } else {
          this.loaderService.clear();
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap(res => {
          if (res.status.code === 200) {
            this.refreshTokenSubject.next(res.results[0].access_token);
            return next.handle(
              this.addToken(request, res.results[0].access_token)
            );
          }
          return this.logoutUser();
        }),
        catchError(error => {
          this.logoutUser();
          return throwError(error.error);
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      this.isRefreshingToken = false;
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }

  logoutUser() {
    this.authService.logout();
    return throwError('');
  }
}
