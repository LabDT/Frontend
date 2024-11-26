import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  /** Sends a registration request */
  registerWithToken(token: string) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const payload = { token };

    return this.http.post(`${environment.backendUrl}/user/register`, payload)
      .pipe(
        tap(response => {
          console.log("Successfully registered", response);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
    .subscribe(
      response => {},
      error => {
        console.error("Failed to register", error);
      }
    )
  }

  /** Sends a login request */
  loginWithToken(token: string) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const payload = { token };

    return this.http.post(`${environment.backendUrl}/user/login`, payload)
      .pipe(
        tap(response => {
          console.log("Successfully logged", response);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
    .subscribe(
      response => {},
      error => {
        console.error("Failed to login", error);
      }
    )
  }
}
