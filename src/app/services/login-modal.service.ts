import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  private isActiveSubject = new BehaviorSubject<boolean>(false);

  isActive$ = this.isActiveSubject.asObservable();

  /** Method to open the login modal */
  open() {
    this.isActiveSubject.next(true);
  }

  /** Method to close the login modal */
  close() {
    this.isActiveSubject.next(false);
  }
}
