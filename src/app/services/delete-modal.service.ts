import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {
  what: string = '';

  private isActiveSubject = new BehaviorSubject<boolean>(false);
  private whatActiveSubject = new BehaviorSubject<string>('');
  private endpointActiveSubject = new BehaviorSubject<string>('');
  private identifierActiveSubject = new BehaviorSubject<any>('');

  private callbackSubject = new ReplaySubject<() => void>(1);

  isActive$ = this.isActiveSubject.asObservable();
  what$ = this.whatActiveSubject.asObservable();
  endpoint$ = this.endpointActiveSubject.asObservable();
  identifier$ = this.identifierActiveSubject.asObservable();

  callback$ = this.callbackSubject.asObservable();

  /** Method to open the delete modal */
  open(
    what: string,
    endpoint: string,
    identifier: any,
    callback: () => void,
  ) {
    this.whatActiveSubject.next(what);
    this.endpointActiveSubject.next(endpoint);
    this.identifierActiveSubject.next(identifier);
    this.isActiveSubject.next(true);
    this.callbackSubject.next(callback);
  }

  /** Merthod to close the delete modal */
  close() {
    this.isActiveSubject.next(false);
  }
}
