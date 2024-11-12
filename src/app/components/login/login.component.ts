import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
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
    if (typeof window !== 'undefined') {
      (window as any).google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
          type: "standard",
          shape: "pill",
          theme: "outline",
          text: "continue_with",
          size: "large",
          logo_alignment: "left",
          width: "400"
        }
      );
    }
  }

  // Callback function
  handleCredentialResponse(response: any) {
    const token = response.credential;
    console.log("Token ID:", token);
  }
}
