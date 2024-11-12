import { Component, Input } from '@angular/core';
import { BaseModalComponent } from "../base-modal/base-modal.component";
import { CommonModule } from '@angular/common';
import { LogoComponent } from "../../components/logo/logo.component";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { Subscription } from 'rxjs';
import { LoginModalService } from '../../services/login-modal.service';
import { LoginComponent } from "../../components/login/login.component";
import { RegisterModalService } from '../../services/register-modal.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, BaseModalComponent, LogoComponent, InputComponent, ButtonComponent, LoginComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.sass'
})
export class LoginModalComponent {
  /** Is the modal currently active? */
  @Input()
  isActive: boolean = false;

  private subscription: Subscription = new Subscription;

  constructor(
    private loginModalService: LoginModalService,
    private registerModalService: RegisterModalService,
  ) { }

  ngOnInit() {
    this.subscription = this.loginModalService.isActive$.subscribe(
      isActive => this.isActive = isActive
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeModal() {
    this.loginModalService.close();
  }

  openRegisterModal() {
    this.closeModal();
    this.registerModalService.open();
  }
}
