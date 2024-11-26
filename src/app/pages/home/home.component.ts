import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { LoginModalComponent } from "../../modals/login-modal/login-modal.component";
import { RegisterModalComponent } from "../../modals/register-modal/register-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, LoginModalComponent, RegisterModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
}
