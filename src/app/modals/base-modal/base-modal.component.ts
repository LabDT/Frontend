import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.sass'
})
export class BaseModalComponent {
  iconClose = faClose;

  /** Is the modal currently active? */
  @Input()
  isActive: boolean = false;

  /** Should it have a close button? */
  @Input()
  closeButton: boolean = false;

  /** Should it have an ok button? */
  @Input()
  okButton: boolean = false;

  /** Should it have a cancel button? */
  @Input()
  cancelButton: boolean = false;

  /** Optional ok handler */
  @Output()
  onOk = new EventEmitter<Event>();

  /** Optional cancel handler */
  @Output()
  onCancel = new EventEmitter<Event>();

  onClose() {
    this.isActive = false;
  }
}
