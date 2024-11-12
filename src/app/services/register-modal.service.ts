import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  private isActiveSubject = new BehaviorSubject<boolean>(false);

  isActive$ = this.isActiveSubject.asObservable();

  /** Method to open the register modal */
  open() {
    this.isActiveSubject.next(true);
  }

  /** Method to close the register modal */
  close() {
    this.isActiveSubject.next(false);
  }
}
