import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  /** Styling variant of the button */
  @Input()
  variant: 'primary'
    | 'secondary'
    | 'light'
    | 'header'
    | 'minimalist'
    = 'primary';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /** Fill all available content with the button */
  @Input()
  fill: boolean = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let classes = ['labdt-button', this.size, this.variant];
    if (this.fill) {
      classes.push('fill');
    }
    return classes;
  }
}
