(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/login/login.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-md-5\">\n    <nz-card>\n      <h2 class=\"m-t-20\" translate>default.layout.SIGN_IN</h2>\n      <p class=\"m-b-30\" translate>\n        default.layout.ENTER_YOUR_CREDENTIAL_TO_GET_ACCESS\n      </p>\n      <form\n        class=\"login-form\"\n        [formGroup]=\"loginForm\"\n        (ngSubmit)=\"onLogin()\"\n        novalidate\n        nz-form\n      >\n        <nz-form-item>\n          <nz-form-label nzFor=\"userName\" nzRequired\n            >{{ \"default.layout.USERNAME\" | translate }}\n          </nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(loginForm, 'userName') }\"\n          >\n            <nz-input-group [nzPrefix]=\"prefixUsername\">\n              <input\n                tabindex=\"1\"\n                formControlName=\"userName\"\n                type=\"text\"\n                nz-input\n                [placeholder]=\"'default.layout.ENTER_YOUR_USERNAME' | translate\"\n              />\n            </nz-input-group>\n            <field-error-display\n              [displayError]=\"isFieldValid(loginForm, 'userName')\"\n              [errors]=\"f.userName.errors\"\n            ></field-error-display>\n            <ng-template #prefixUsername\n              ><i nz-icon nzType=\"user\"></i\n            ></ng-template>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"password\" nzRequired\n            >{{ \"default.layout.PASSWORD\" | translate }}\n          </nz-form-label>\n          <a class=\"float-right p-t-10 text-muted\"\n            >{{ \"default.layout.FORGET_PASSWORD\" | translate }} ?</a\n          >\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(loginForm, 'password') }\"\n          >\n            <nz-input-group [nzPrefix]=\"prefixPassword\">\n              <input\n                tabindex=\"2\"\n                formControlName=\"password\"\n                type=\"password\"\n                autocomplete=\"password\"\n                nz-input\n                [placeholder]=\"'default.layout.ENTER_YOUR_PASSWORD' | translate\"\n              />\n            </nz-input-group>\n            <field-error-display\n              [displayError]=\"isFieldValid(loginForm, 'password')\"\n              [errors]=\"f.password.errors\"\n            ></field-error-display>\n            <ng-template #prefixPassword\n              ><i nz-icon nzType=\"lock\"></i\n            ></ng-template>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <span class=\" text-muted\">\n                {{ \"default.layout.DONT_HAVE_AN_ACCOUNT\" | translate }} ?\n                <a [routerLink]=\"['/auth', 'signup']\" translate\n                  >default.layout.SIGN_UP_HERE</a\n                >\n              </span>\n              <button\n                tabindex=\"3\"\n                type=\"submit\"\n                class=\"login-form-button\"\n                [nzType]=\"'primary'\"\n                nz-button\n              >\n                {{ \"default.layout.SIGN_IN\" | translate }}\n              </button>\n            </div>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </nz-card>\n  </div>\n  <div class=\"offset-md-1 col-md-6 d-none d-md-block\">\n    <img alt=\"\" class=\"img-fluid\" src=\"./assets/images/others/login-2.png\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/sign-up/sign-up.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/sign-up/sign-up.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-md-6 d-none d-md-block\">\n    <img alt=\"\" class=\"img-fluid\" src=\"./assets/images/others/sign-up-2.png\" />\n  </div>\n  <div class=\"m-l-auto col-md-5\">\n    <nz-card>\n      <h2 class=\"m-t-20\" translate>default.layout.SIGN_UP</h2>\n      <p class=\"m-b-30\" translate>\n        default.layout.CREATE_YOUR_ACCOUNT_TO_GET_ACCESS\n      </p>\n      <form\n        [formGroup]=\"signUpForm\"\n        (ngSubmit)=\"onSignUp(signUpForm)\"\n        novalidate\n        nz-form\n      >\n        <nz-form-item>\n          <nz-form-label nzFor=\"userName\" nzRequired>{{\n            \"default.layout.USERNAME\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(signUpForm, 'userName') }\"\n          >\n            <input\n              formControlName=\"userName\"\n              id=\"userName\"\n              nz-input\n              [placeholder]=\"'default.layout.ENTER_YOUR_USERNAME' | translate\"\n              type=\"text\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(signUpForm, 'userName')\"\n            [errors]=\"f.userName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"firstName\" nzRequired>{{\n                \"default.layout.FIRST_NAME\" | translate\n              }}</nz-form-label>\n              <nz-form-control\n                [ngClass]=\"{\n                  'has-error': isFieldValid(signUpForm, 'firstName')\n                }\"\n              >\n                <input\n                  formControlName=\"firstName\"\n                  id=\"firstName\"\n                  nz-input\n                  [placeholder]=\"\n                    'default.layout.ENTER_YOUR_FIRST_NAME' | translate\n                  \"\n                  type=\"text\"\n                />\n              </nz-form-control>\n              <field-error-display\n                [displayError]=\"isFieldValid(signUpForm, 'firstName')\"\n                [errors]=\"f.firstName.errors\"\n              ></field-error-display>\n            </nz-form-item>\n          </div>\n          <div class=\"col-md-6\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"lastName\" nzRequired>{{\n                \"default.layout.LAST_NAME\" | translate\n              }}</nz-form-label>\n              <nz-form-control\n                [ngClass]=\"{\n                  'has-error': isFieldValid(signUpForm, 'lastName')\n                }\"\n              >\n                <input\n                  formControlName=\"lastName\"\n                  id=\"lastName\"\n                  nz-input\n                  [placeholder]=\"\n                    'default.layout.ENTER_YOUR_LAST_NAME' | translate\n                  \"\n                  type=\"text\"\n                />\n              </nz-form-control>\n              <field-error-display\n                [displayError]=\"isFieldValid(signUpForm, 'lastName')\"\n                [errors]=\"f.lastName.errors\"\n              ></field-error-display>\n            </nz-form-item>\n          </div>\n        </div>\n\n        <nz-form-item>\n          <nz-form-label nzFor=\"email\" nzRequired\n            >{{ \"default.layout.EMAIL\" | translate }}\n          </nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(signUpForm, 'email') }\"\n          >\n            <input\n              formControlName=\"email\"\n              id=\"email\"\n              nz-input\n              [placeholder]=\"'default.layout.ENTER_YOUR_EMAIL' | translate\"\n              type=\"text\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(signUpForm, 'email')\"\n            [errors]=\"f.email.errors\"\n          ></field-error-display>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"password\" nzRequired>\n            {{ \"default.layout.PASSWORD\" | translate }}\n          </nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(signUpForm, 'password') }\"\n          >\n            <input\n              formControlName=\"password\"\n              id=\"password\"\n              autocomplete=\"password\"\n              nz-input\n              [placeholder]=\"'default.layout.ENTER_YOUR_PASSWORD' | translate\"\n              type=\"password\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(signUpForm, 'password')\"\n            [errors]=\"f.password.errors\"\n          ></field-error-display>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"checkPassword\" nzRequired>\n            {{ \"default.layout.CONFIRM_PASSWORD\" | translate }}\n          </nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{\n              'has-error': isFieldValid(signUpForm, 'confirmPassword')\n            }\"\n          >\n            <input\n              formControlName=\"confirmPassword\"\n              id=\"checkPassword\"\n              autocomplete=\"confirmPassword\"\n              nz-input\n              [placeholder]=\"\n                'default.layout.ENTER_CONFIRM_PASSWORD' | translate\n              \"\n              type=\"password\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(signUpForm, 'confirmPassword')\"\n            [errors]=\"f.confirmPassword.errors\"\n          ></field-error-display>\n        </nz-form-item>\n        <div class=\"d-flex align-items-center justify-content-between\">\n          <nz-form-item>\n            <nz-form-control\n              [ngClass]=\"{ 'has-error': isFieldValid(signUpForm, 'agree') }\"\n            >\n              <label nz-checkbox formControlName=\"agree\"\n                >I have read the <a>agreement</a></label\n              >\n            </nz-form-control>\n            <field-error-display\n              [displayError]=\"isFieldValid(signUpForm, 'agree')\"\n              [errors]=\"f.agree.errors\"\n            ></field-error-display>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-control>\n              <button\n                type=\"submit\"\n                class=\"login-form-button\"\n                [nzType]=\"'primary'\"\n                nz-button\n              >\n                <span translate>default.layout.SIGN_UP</span>\n              </button>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </form>\n    </nz-card>\n    <div class=\"signup-bottom\">\n      <span class=\"parse-html\"\n        >{{ \"default.layout.ALREADY_ON\" | translate }} UetSurvey?\n        {{ \"default.layout.LET_US_TAKE_YOU_TO\" | translate }}\n        <a [routerLink]=\"['/auth', 'login']\">Sign In!</a>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_5__["AuthRouting"]],
            declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouting", function() { return AuthRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");






var routes = [
    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full"
    },
    {
        path: "",
        children: [
            {
                path: "login",
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_5__["extract"])("Log in to your account") }
            },
            {
                path: "signup",
                component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"],
                data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_5__["extract"])("Sign up for a FREE SurveyMonkey account") }
            }
        ]
    }
];
var AuthRouting = /** @class */ (function () {
    function AuthRouting() {
    }
    AuthRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRouting);
    return AuthRouting;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.less":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(i18nService, authService, formBuilder, router, route, loaderService, nzMessageService) {
        this.i18nService = i18nService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.loaderService = loaderService;
        this.nzMessageService = nzMessageService;
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl(this.route.snapshot.queryParams["returnUrl"] || "/dashboard");
        }
        this.buildForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl =
            this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["Helpers"].validateAllFormFields(this.loginForm);
            return;
        }
        this.loaderService.display(true);
        this.authService.login(this.loginForm.value).subscribe(function (res) {
            _this.nzMessageService.success("Login success");
            _this.router.navigate([_this.route.snapshot.queryParams.redirect || "/dashboard"], { replaceUrl: true });
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(err.message);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    LoginComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(LoginComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () { };
    LoginComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["I18nService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/modules/auth/pages/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_3__["I18nService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/sign-up/sign-up.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/pages/sign-up/sign-up.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-bottom {\n  line-height: 40px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtYm90dG9tIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLnNpZ251cC1ib3R0b20ge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/auth/pages/sign-up/sign-up.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/pages/sign-up/sign-up.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, authService, loaderService, formBuilder, translateService, nzMessageService) {
        this.router = router;
        this.authService = authService;
        this.loaderService = loaderService;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    Object.defineProperty(SignUpComponent.prototype, "f", {
        get: function () {
            return this.signUpForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    SignUpComponent.prototype.buildForm = function () {
        this.signUpForm = this.formBuilder.group({
            userName: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ]
            ],
            firstName: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ]
            ],
            lastName: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ]
            ],
            password: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ]
            ],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].emailValidator()]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            agree: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].passwordMatchValidator
        });
    };
    SignUpComponent.prototype.onSignUp = function (formData) {
        var _this = this;
        if (formData.invalid || !formData.controls.agree.value) {
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_4__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        this.authService.signup(formData.value).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.router.navigate(["/auth", "login"]);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sign-up",
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.less */ "./src/app/modules/auth/pages/sign-up/sign-up.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map