import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CanDeactivateUser } from '../../Models/canDeactivateUser';
import { ConfirmExitComponent } from './confirm-exit/confirm-exit.component';
import { ConfirmNavigationService } from '../../Services/confirmNavigation.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    ConfirmExitComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements CanDeactivateUser {

  @ViewChild('theForm') form!: NgForm;
  userInfo: { email: string, password: string } = { email: '', password: '' }

  emailTouched: Boolean = false;
  passwordTouched: Boolean = false;
  submitClicked: Boolean = false;
  confirmExitFlag: Boolean = true;
  showConfirmation: Boolean = false;

  onFormSubmit() {
    this.submitClicked = true;
    this.confirmExitFlag = true;
    if (this.form.valid) {
      this.userInfo.email = this.form.value.email
      this.userInfo.password = this.form.value.password

      //console.log(this.userInfo)
    }
  }

  inputChange(num: number) {
    this.confirmExitFlag = false;
    if (num === 1) {
      this.form.value.email !== '' ? this.emailTouched = true : this.emailTouched = false
    }
    else {
      this.form.value.password !== '' ? this.passwordTouched = true : this.passwordTouched = false
    }
  }

  closePopUp(ev: Boolean) {
    this.showConfirmation = ev;
  }
  confirmNav: ConfirmNavigationService = inject(ConfirmNavigationService)
  confirmExit() {

    if (this.confirmExitFlag === true) {
      return true;
    } else {
      this.showConfirmation = true;
      return this.confirmNav.confirmNavEvent
    }
  }

}
