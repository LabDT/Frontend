import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faPencil, faPlus, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.sass'
})
export class IconButtonComponent {
  iconSearch = faSearch;
  iconNext = faChevronRight;
  iconEdit = faPencil;
  iconDelete = faTrashCan;
  iconAdd = faPlus;

  /** Styling variant of the button */
  @Input()
  variant:
    'search'
    | 'next'
    | 'edit'
    | 'delete'
    | 'add'
    = 'search';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /** Background color of the button */
  @Input()
  color:
    'primary'
    | 'secondary'
    | 'red'
    = 'primary';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['icon-button', this.size, this.variant, this.color];
  }

  public get icon(): IconDefinition {
    switch (this.variant) {
      case 'search':
        return this.iconSearch;
      case 'next':
        return this.iconNext;
        case 'edit':
          return this.iconEdit;
      case 'delete':
        return this.iconDelete;
      case 'add':
        return this.iconAdd;
    }
  }
}
