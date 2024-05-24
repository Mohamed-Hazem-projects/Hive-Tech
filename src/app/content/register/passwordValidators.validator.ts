import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static required(password: AbstractControl) {
    if (password.value === '') {
      return { requiredPW: true }
    }
    return null;
  }
  static minLength(password: AbstractControl) {
    if ((<string>password.value).length < 8) {
      return { pwMinLength: true }
    }
    return null;
  }
  static lowerUpper(password: AbstractControl) {
    if (/[A-Z]+/.test(<string>password.value) && /[a-z]+/.test(<string>password.value)) {
      return null;
    }
    return { lowerUpper: true };
  }
  static numberPW(password: AbstractControl) {
    if (/[0-9]+/.test(<string>password.value)) {
      return null;
    }
    return { numbermin: true };
  }
  static specialChar(password: AbstractControl) {
    if (/[-+_!@#$%^&*.,?()]/.test(<string>password.value)) {
      return null;
    }
    return { specialChar: true };
  }
  static confirmPassword(form: AbstractControl): null | ValidationErrors {
    let pw = form.get('password')?.value
    let pwconfirm = form.get('confirmPW')?.value
    return pw && pwconfirm && pw === pwconfirm ? null : { confirmPW: true }
  }
}
