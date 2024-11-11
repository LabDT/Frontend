import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
