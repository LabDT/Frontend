import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
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

  // Uniquely generated ID for the instance
  inputId: string = `input-${uuidv4()}`;

  public get classes(): string[] {
    return ['labdt-input']
  }

  public get type(): string {
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
}
