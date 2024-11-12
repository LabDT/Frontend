import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { ButtonComponent } from "../button/button.component";
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  constructor(private loginModalService: LoginModalService) {}

  onOpenLoginModal() {
    this.loginModalService.open();
  }
}
