import { AbstractControl, FormControl } from '@angular/forms';

export class IValidators {
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
  static includeSpaceStringValidator() {
    return function(input: FormControl) {
      if (input.value) {
        for (let t = 0; t < input.value.length; t++) {
          if (' '.indexOf(input.value[t]) >= 0) {
            return { validateIncludeSpaceString: true };
          }
        }
        return null;
      }
      return null;
    };
  }
  static spaceStringValidator() {
    return function(input: FormControl) {
      if (input.value) {
        return input.value.trim() === ''
          ? { validatespaceString: { valid: false } }
          : null;
      }
      return null;
    };
  }
  static phoneValidator() {
    return function(input: FormControl) {
      const PHONE_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      if (input.value) {
        return PHONE_REGEXP.test(input.value)
          ? null
          : { validatePhone: { valid: false } };
      }
      return null;
    };
  }
  static emailValidator() {
    return function(input: FormControl) {
      const EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (input.value) {
        return EMAIL_REGEXP.test(input.value)
          ? null
          : { validateEmail: { valid: false } };
      }
      return null;
    };
  }
  static positiveIntegerValidator() {
    return function(input: FormControl) {
      if (input.value) {
        return Number(input.value) % 1 === 0
          ? null
          : { validatePositiveInteger: { valid: false } };
      }
      return null;
    };
  }
}
