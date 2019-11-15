import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { I18nService, AuthService, IValidators } from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from '@app/shared';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    private i18nService: I18nService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(
        this.route.snapshot.queryParams['returnUrl'] || '/dashboard'
      );
    }
    this.buildForm();
  }

  ngOnInit() {
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  ngOnDestroy() { }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loaderService.display(true);
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.nzMessageService.success('Login success');
      this.router.navigate(
        [this.route.snapshot.queryParams.redirect || '/dashboard'],
        { replaceUrl: true }
      );
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(err.message);
    }, () => {
      this.loaderService.display(false);
    }
    );
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, IValidators.spaceStringValidator()]],
      password: ['', Validators.required]
    });
  }
}
