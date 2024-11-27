import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { Subscription, finalize } from 'rxjs';
import { DeleteModalService } from '../../services/delete-modal.service';
import { CrudService } from '../../services/crud.service';

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
  what: string = 'this';

  /** Data endpoint */
  endpoint: string = '';

  /** Data identifier */
  identifier: any = null;

  private isActiveSubscription: Subscription = new Subscription;
  private whatSubscription: Subscription = new Subscription;
  private endpointSubscription: Subscription = new Subscription;
  private identifierSubscription: Subscription = new Subscription;

  constructor(
    private deleteModalService: DeleteModalService,
    private crudService: CrudService,
  ) { }

  ngOnInit() {
    this.isActiveSubscription = this.deleteModalService.isActive$.subscribe(
      isActive => this.isActive = isActive
    );
    this.whatSubscription = this.deleteModalService.what$.subscribe(
      what => this.what = what
    );
    this.endpointSubscription = this.deleteModalService.endpoint$.subscribe(
      endpoint => this.endpoint = endpoint
    );
    this.identifierSubscription = this.deleteModalService.identifier$.subscribe(
      identifier => this.identifier = identifier
    );
  }

  ngOnDestroy() {
    if (this.isActiveSubscription) {
      this.isActiveSubscription.unsubscribe();
    }
    if (this.whatSubscription) {
      this.whatSubscription.unsubscribe();
    }
    if (this.endpointSubscription) {
      this.endpointSubscription.unsubscribe();
    }
    if (this.identifierSubscription) {
      this.identifierSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.deleteModalService.close();
  }

  deleteData() {
    this.closeModal();
    this.crudService.delete(this.endpoint, this.identifier).subscribe({
      next: () => {
        this.deleteModalService.callback$.subscribe(callback => {
          callback();
        }).unsubscribe();
      },
      error: (error) => {
        throw Error(`Failed to delete '${this.identifier}' at '${this.endpoint}':`, error);
      },
    });
  }
}
