import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IValidators, AuthService } from '@app/core';
import { Helpers, LoaderService } from '@app/shared';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  get f() {
    return this.signUpForm.controls;
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  private buildForm(): void {
    this.signUpForm = this.formBuilder.group({
      userName: ['', [
        Validators.required,
        IValidators.spaceStringValidator(),
        Validators.minLength(6),
        Validators.maxLength(100)
      ]],
      firstName: ['', [
        Validators.required,
        IValidators.spaceStringValidator(),
        Validators.maxLength(100)
      ]],
      lastName: ['', [
        Validators.required,
        IValidators.spaceStringValidator(),
        Validators.maxLength(100)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required,
        IValidators.emailValidator(),
      ]],
      confirmPassword: ['', Validators.compose([Validators.required])],
      agree: [null, [
        Validators.required,
      ]]
    }, {
      validator: IValidators.passwordMatchValidator
    });
  }


  onSignUp(formData: FormGroup) {
    if (formData.invalid || !formData.controls.agree.value) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    this.authService.signup(formData.value).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.router.navigate(['/auth', 'login']);
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }

}
