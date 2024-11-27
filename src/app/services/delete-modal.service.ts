import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {
  what: string = '';

  private isActiveSubject = new BehaviorSubject<boolean>(false);
  private whatActiveSubject = new BehaviorSubject<string>('');

  isActive$ = this.isActiveSubject.asObservable();
  what$ = this.whatActiveSubject.asObservable();

  /** Method to open the delete modal */
  open(what: string) {
    this.whatActiveSubject.next(what);
    this.isActiveSubject.next(true);
  }

  /** Merthod to close the delete modal */
  close() {
    this.isActiveSubject.next(false);
  }
}
