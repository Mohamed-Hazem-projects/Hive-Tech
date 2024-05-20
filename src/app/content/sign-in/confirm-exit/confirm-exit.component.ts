import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmNavigationService } from '../../../Services/confirmNavigation.service';

@Component({
  selector: 'confirm-exit',
  standalone: true,
  imports: [],
  templateUrl: './confirm-exit.component.html',
  styleUrl: './confirm-exit.component.scss'
})
export class ConfirmExitComponent {
  constructor(private confirmNav: ConfirmNavigationService) { }
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  stopProp(ev: MouseEvent) {
    ev.stopPropagation()
  }
  sendConfirmExit(ev: MouseEvent, val: number) {
    ev.stopPropagation()
    if (val === 1) {
      this.confirmNav.confirmNav(true)
    } else {
      this.confirmNav.confirmNav(false)
      this.closePopup.emit(false)
    }
  }
}
