import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.sass'
})
export class LogoComponent {
  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();
}
