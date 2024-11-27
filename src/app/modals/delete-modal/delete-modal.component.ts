import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { Subscription } from 'rxjs';
import { DeleteModalService } from '../../services/delete-modal.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [BaseModalComponent],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass'
})
export class DeleteModalComponent {
  /** Is the modal currently active? */
  @Input()
  isActive: boolean = false;

  /** What is being deleted? */
  @Input()
  what: string = 'this';

  /** Delete handler */
  @Output()
  onDelete = new EventEmitter<Event>();

  private isActiveSubscription: Subscription = new Subscription;
  private whatSubscription: Subscription = new Subscription;

  constructor(
    private deleteModalService: DeleteModalService,
  ) { }

  ngOnInit() {
    this.isActiveSubscription = this.deleteModalService.isActive$.subscribe(
      isActive => this.isActive = isActive
    );
    this.whatSubscription = this.deleteModalService.what$.subscribe(
      what => this.what = what
    );
  }

  ngOnDestroy() {
    if (this.isActiveSubscription) {
      this.isActiveSubscription.unsubscribe();
    }
    if (this.whatSubscription) {
      this.whatSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.deleteModalService.close();
  }
}
