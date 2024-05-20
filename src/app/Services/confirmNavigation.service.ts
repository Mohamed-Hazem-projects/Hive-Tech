import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmNavigationService {

  constructor() { }

  confirmNavEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  confirmNav(confirmation: Boolean) {
    this.confirmNavEvent.emit(confirmation)
  }
}
