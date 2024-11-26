import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { finalize, lastValueFrom, map, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading: boolean = false;
  private isSignedIn: boolean = false;
  private accessToken: string | null = null;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  /** Initialize authentication state */
  initializeAuth(): Promise<void> {
    return new Promise((resolve, reject) => {
      const refreshToken = this.getRefreshToken();

      if (!refreshToken) {
        console.warn('No refresh token available');
        this.isSignedIn = false;
        resolve();
        return;
      }

      this.refreshAccessToken().subscribe({
        next: (newAccessToken) => {
          this.isSignedIn = true;
          resolve();
        },
        error: (e) => {
          console.error('Failed to refresh access token during initialization', e);
          this.logout();
          resolve();
        },
      });
    })
  }

  /** Returns true if the user is currently signed in */
  get signedIn() {
    return this.isSignedIn;
  }

  /** Returns the access token */
  getAccessToken() {
    return this.accessToken;
  }

  /** Returns the refresh token */
  getRefreshToken() {
    return this.cookieService.get('refresh_token') || null;
  }

  /** Save tokens after login/register */
  private storeTokens(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.cookieService.set('refresh_token', refreshToken, {
      path: '/',
      secure: true,
      sameSite: 'Strict',
    });
  }

  /** Sends a registration request */
  async registerWithToken(token: string): Promise<void> {
    if (this.isLoading) {
      console.warn('Duplicate register attempt');
      return;
    }

    this.logout();
    this.isLoading = true;

    try {
      const response: any = await lastValueFrom(this.http
        .post(`${environment.backendUrl}/user/register`, { token })
      );

      this.storeTokens(response.access_token, response.refresh_token);
      this.isSignedIn = true;
      console.log('Signed in');
    } catch (error) {
      console.error('Failed to register', error);
    } finally {
      this.isLoading = false;
    }
  }

  /** Sends a login request */
  async loginWithToken(token: string): Promise<void> {
    if (this.isLoading) {
      console.warn('Duplicate login attempt');
      return;
    }

    this.logout();
    this.isLoading = true;

    try {
      const response: any = await lastValueFrom(
        this.http.post(`${environment.backendUrl}/user/login`, { token })
      );

      this.storeTokens(response.access_token, response.refresh_token);
      this.isSignedIn = true;
      console.log('Signed in');
    } catch (error) {
      console.error('Failed to login', error);
    } finally {
      this.isLoading = false;
    }
  }

  /** Refresh access token */
  refreshAccessToken(): Observable<string> {
    if (this.isLoading) {
      return throwError(() => new Error('Already refreshing token'));
    }

    const token = this.getRefreshToken();
    if (!token) {
      return throwError(() => new Error('No refresh token available'));
    }

    this.isLoading = true;

    return this.http
      .post<any>(`${environment.backendUrl}/user/refresh-token`, { token })
      .pipe(
        tap({
          next: (response: any) => {
            this.accessToken = response.access_token;
          },
          error: (e) => {
            console.error("Failed to refresh access token", e);
          },
          complete: () => {
            this.isLoading = false;
          },
        }),
        finalize(() => {
          this.isLoading = false;
        }),
        map((response: any) => response.refresh_token)
      );
  }

  /** Logout and remove all tokens */
  logout() {
    if (this.signedIn) {
      this.accessToken = null;

      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        this.cookieService.delete('refresh_token', '/');
      }

      this.isSignedIn = false;

      this.router.navigate(['']);

      console.log('User logget out');
    }
  }
}
