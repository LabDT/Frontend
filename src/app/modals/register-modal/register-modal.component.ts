import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterModalService } from '../../services/register-modal.service';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RegisterComponent } from "../../components/register/register.component";
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, BaseModalComponent, LogoComponent, InputComponent, ButtonComponent, RegisterComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.sass'
})
export class RegisterModalComponent {
  /** Is the modal currently active? */
  @Input()
  isActive: boolean = false;

  private subscription: Subscription = new Subscription;

  constructor(
    private registerModalService: RegisterModalService,
    private loginModalService: LoginModalService,
  ) { }

  ngOnInit() {
    this.subscription = this.registerModalService.isActive$.subscribe(
      isActive => this.isActive = isActive
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeModal() {
    this.registerModalService.close();
  }

  openLoginModal() {
    this.closeModal();
    this.loginModalService.open();
  }
}
