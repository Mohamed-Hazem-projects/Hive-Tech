import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordValidators } from './passwordValidators.validator';
import { CanDeactivateUser } from '../../Models/canDeactivateUser';
import { Observable } from 'rxjs';
import { ConfirmExitComponent } from '../sign-in/confirm-exit/confirm-exit.component';
import { ConfirmNavigationService } from '../../Services/confirmNavigation.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ConfirmExitComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, CanDeactivateUser {

  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNo: new FormControl(''),
      password: new FormControl('', [
        PasswordValidators.required,
        PasswordValidators.minLength,
        PasswordValidators.lowerUpper,
        PasswordValidators.numberPW,
        PasswordValidators.specialChar
      ]),
      confirmPW: new FormControl('', Validators.required),
      newsletter: new FormControl(false)
    }, { validators: PasswordValidators.confirmPassword })
  }

  confirmExitFlag: Boolean = true;
  //input changes for css class
  inputChangeFlags: Boolean[] = [false, false, false, false, false, false]
  inputChanged(value: number) {
    this.confirmExitFlag = false;
    switch (value) {
      case 0:
        this.form.value.firstname !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
      case 1:
        this.form.value.lastname !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
      case 2:
        this.form.value.email !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
      case 3:
        this.form.value.phoneNo !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
      case 4:
        this.form.value.password !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
      case 5:
        this.form.value.confirmPW !== ''
          ? this.inputChangeFlags[value] = true
          : this.inputChangeFlags[value] = false
        break;
    }
  }

  showPassword: Boolean = false;
  showPasswordConfirm: Boolean = false;

  //user details and submit
  user!: {
    firstname: string,
    lastname: string,
    email: string,
    phoneNo: string,
    password: string,
    newsletter: Boolean
  }
  formSubmitFlag: Boolean = false;
  formSubmitted() {
    if (this.form.invalid) {
      this.formSubmitFlag = true;
    } else if (this.form.valid) {
      this.confirmExitFlag = true;
      this.user = this.form.value;
      //console.log(this.user)
      //http stuff
    }
  }

  showConfirmation: Boolean = false;
  closePopUp(ev: Boolean) {
    //this is to close the confirmation after user picks an option
    this.showConfirmation = ev;
  }
  confirmNav: ConfirmNavigationService = inject(ConfirmNavigationService)
  confirmExit(): Boolean | Observable<Boolean> {
    if (this.confirmExitFlag === true) {
      return true;
    } else {
      this.showConfirmation = true;
      //return an observable (event) which returns the value from confirmation popup
      return this.confirmNav.confirmNavEvent
    }
  }
}
