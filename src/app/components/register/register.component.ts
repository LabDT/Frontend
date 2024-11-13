import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Initialize Google Identity with cliend_id and callback
      (window as any).google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: this.handleCredentialResponse.bind(this),
        context: 'signup',
        ux_mode: 'popup',
        auto_select: false,
      });
    }

    this.renderGoogleRegisterButton();
  }

  // Render Google's register button
  renderGoogleRegisterButton(): void {
    if (typeof window !== 'undefined') {
      (window as any).google.accounts.id.renderButton(
        document.getElementById("google-register"),
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
    console.log("Token ID:", token);
    this.authService.registerWithToken(token);
  }
}
