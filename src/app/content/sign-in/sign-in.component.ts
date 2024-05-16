import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  @ViewChild('theForm') form!: NgForm;
  userInfo: { email: string, password: string } = { email: '', password: '' }

  emailTouched: boolean = false;
  passwordTouched: Boolean = false;
  submitClicked: boolean = false;

  onFormSubmit() {
    if (this.form.valid) {
      this.submitClicked = true;
      console.log(this.form)
      console.log(this.userInfo.email)
      console.log(this.userInfo.password)
    } else {
      this.submitClicked = true;
    }
  }

  inputChange(num: number) {

    if (num === 1) {
      this.userInfo.email = this.form.value.email
      this.userInfo.email !== '' ? this.emailTouched = true : this.emailTouched = false
    }
    else {
      this.userInfo.password = this.form.value.password
      this.userInfo.password !== '' ? this.passwordTouched = true : this.passwordTouched = false
    }

  }
}
