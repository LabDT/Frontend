import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.initializeAuth().then(() => {
      if (this.authService.signedIn) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
