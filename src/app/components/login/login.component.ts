import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof (window as any).google !== 'undefined') {
      // Initialize Google Identity with cliend_id and callback
      (window as any).google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: this.handleCredentialResponse.bind(this),
        context: 'signin',
        ux_mode: 'popup',
        auto_select: false,
      });
    }

    this.renderGoogleLoginButton();
  }

  // Render Google's login button
  renderGoogleLoginButton(): void {
    if (typeof window !== 'undefined' && typeof (window as any).google !== 'undefined') {
      (window as any).google.accounts.id.renderButton(
        document.getElementById("google-login"),
        {
          type: "standard",
          shape: "pill",
          theme: "outline",
          text: "continue_with",
          size: "large",
          logo_alignment: "left",
          width: "360"
        }
      );
    }
  }

  // Callback function
  handleCredentialResponse(response: any) {
    const token = response.credential;
    this.authService.loginWithToken(token);
  }
}
