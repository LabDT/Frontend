import { inject } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();

  const addAuthHeader = (request: HttpRequest<any>, accessToken: string | null) => {
    if (accessToken) {
      return request.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
    }
    return request;
  }

  const clonedRequest = addAuthHeader(req, accessToken);

  return next(clonedRequest).pipe(
    catchError((error) => {
      // Verifies if response has error 401
      if (error.status === 401) {
        return authService.refreshAccessToken().pipe(
          switchMap((newAccessToken) => {
            const newRequest = addAuthHeader(req, newAccessToken);
            return next(newRequest);
          }),
          catchError((refreshError) => {
            authService.logout();
            return throwError(() => refreshError);
          }),
        );
      }
      return throwError(() => error);
    })
  );
};
