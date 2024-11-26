import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass'
})
export class InputComponent {
  /** Input variant */
  @Input()
  variant: 'text' | 'email' | 'password'| 'search' = 'text';

  /** Optional label */
  @Input()
  label: string = '';

  /** Optional placeholder */
  @Input()
  placeholder: string = '';

  /** Optional button click handler
   *
   * Only gets called if the selected variant has a button
   */
  @Output()
  onClick = new EventEmitter<Event>();

  // Uniquely generated ID for the instance
  inputId: string = `input-${uuidv4()}`;

  get classes(): string[] {
    return ['labdt-input']
  }

  get type(): string {
    switch (this.variant) {
      case 'text':
        return 'text';
      case 'email':
        return 'email';
      case 'password':
        return 'password';
      case 'search':
        return 'text';
      default:
        return 'text';
    }
  }

  get button(): 'search' | null {
    switch (this.variant) {
      case 'search':
        return 'search';
      default:
        return null;
    }
  }
}
