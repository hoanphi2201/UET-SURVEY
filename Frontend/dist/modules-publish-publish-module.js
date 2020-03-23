(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-publish-publish-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/publish/pages/answer-survey/answer-survey.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/publish/pages/answer-survey/answer-survey.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container\n  *ngIf=\"surveyCollectorDetail?.status === 'OPEN' && isCorrectPassword\"\n>\n  <div class=\"survey-page\">\n    <div class=\"container\">\n      <ng-container>\n        <ng-container *ngIf=\"!surveyFormDetail?.json?.title\">\n          <h1 class=\"survey-title\">\n            <span class=\"title-text\"> {{ surveyFormDetail?.title }} </span>\n          </h1>\n          <h5>\n            <span class=\"description-text\">{{\n              surveyFormDetail?.description\n            }}</span>\n          </h5>\n        </ng-container>\n        <app-survey\n          (submitSurvey)=\"onSubmitSurveyResponse($event)\"\n          [json]=\"surveyFormDetail.json\"\n        >\n        </app-survey>\n      </ng-container>\n      <ng-container *ngIf=\"displaySurveyResults\">\n        <div class=\"wds-type-section-title\" translate>\n          default.layout.YOUR_SURVEY_RESPONSE\n        </div>\n        <app-survey-response\n          [data]=\"dataSurveyResults\"\n          [disabled]=\"true\"\n          [json]=\"surveyFormDetail.json\"\n        >\n        </app-survey-response>\n      </ng-container>\n    </div>\n    <footer class=\"survey-footer bottom\">\n      <div class=\"standard-footer notranslate\">\n        <p class=\"survey-footer-title\">\n          {{ \"default.layout.POWERED_BY\" | translate }}\n          <a target=\"_blank\" class=\"footer-brand-name survey-footer-link\">\n            <img\n              src=\"./assets/images/logo/full-logo-green.png\"\n              alt=\"UetSurvey\"\n              class=\"responsive-logo\"\n            />\n          </a>\n        </p>\n        {{ \"default.layout.SEE_HOW_EASY_IT_IS_TO\" | translate }}\n        <a\n          target=\"_blank\"\n          class=\"survey-footer-link create-a-survey\"\n          [routerLink]=\"['/dashboard']\"\n          translate\n          >default.layout.CREATE_A_SURVEY</a\n        >.\n      </div>\n      <div class=\"survey-footer-privacy-link-container\">\n        <a\n          target=\"_blank\"\n          class=\"survey-footer-link survey-footer-privacy-link\"\n          href=\"\"\n          >Privacy</a\n        >\n        <span class=\"survey-footer-privacy-text\"> &amp; </span>\n        <a\n          target=\"_blank\"\n          class=\"survey-footer-link survey-footer-privacy-link\"\n          href=\"\"\n          >Cookie Policy</a\n        >\n      </div>\n    </footer>\n  </div>\n</ng-container>\n\n<ng-container\n  *ngIf=\"surveyCollectorDetail?.status === 'OPEN' && !isCorrectPassword\"\n>\n  <div class=\"survey-page\">\n    <div class=\"container survey-page-body question-body-font-theme\">\n      <div\n        class=\"survey-title-container clearfix survey-title-align-left has-survey-title \"\n      >\n        <div class=\"survey-title-table-wrapper\">\n          <table role=\"presentation\" class=\"survey-title-table table-reset\">\n            <tbody>\n              <tr>\n                <td class=\"survey-title-cell\">\n                  <h1 class=\"survey-title user-generated notranslate\">\n                    <span class=\"title-text\">\n                      {{ surveyFormDetail.title }}\n                    </span>\n                  </h1>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div\n          *ngIf=\"errorPasswordMessage\"\n          class=\"password-invalid-message user-generated clearfix\"\n        >\n          <i nz-icon nzType=\"info-circle\" nzTheme=\"outline\"></i>\n          {{ errorPasswordMessage }}\n        </div>\n        <div class=\"password-message user-generated clearfix\" translate>\n          default.layout.THIS_SURVEY_REQUIRES_A_PASSWORD_IF_YOU_DO_NOT_KNOW_THE_PASSWORD_CONTACT_THE_AUTHOR_OF_THIS_SURVEY_FOR_FURTHER_ASSISTANCE.\n        </div>\n        <div class=\"password-field\">\n          <form nz-form [formGroup]=\"form\">\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\"\n                >{{ \"default.layout.ENTER_PASSWORD\" | translate }}\n              </nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                <input\n                  tabindex=\"1\"\n                  nz-input\n                  autocomplete=\"password\"\n                  type=\"password\"\n                  formControlName=\"password\"\n                />\n              </nz-form-control>\n            </nz-form-item>\n            <field-error-display\n              [displayError]=\"isFieldValid(form, 'password')\"\n              [errors]=\"f.password.errors\"\n            ></field-error-display>\n          </form>\n        </div>\n        <button\n          tabindex=\"2\"\n          (click)=\"onSubmitPassword(form)\"\n          nz-button\n          nzType=\"primary\"\n          nzSize=\"large\"\n        >\n          {{ \"default.layout.SUBMIT_PASSWORD\" | translate | uppercase }}\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"surveyCollectorDetail?.status === 'CLOSED'\">\n  <div class=\"wrapper\">\n    <div class=\"error-message-wrapper\">\n      <h1 class=\"wds-type-page-title\" translate>\n        default.layout.OH_BANANAS\n      </h1>\n      <div class=\"error-message-container\">\n        <h2 class=\"wds-type-section-title\">\n          {{ surveyCollectorDetail?.closedMessage }}\n        </h2>\n        <a href=\"\" class=\"error-logo\" target=\"_top\">\n          <img src=\"./assets/images/logo/full-logo-green.png\" alt=\"UetSurvey\" />\n        </a>\n        <h3 class=\"wds-type-card-title\" translate>\n          default.layout.WANT_TO_CREATE_YOUR_OWN_SURVEY\n        </h3>\n        <button\n          [routerLink]=\"['/auth', 'signup']\"\n          nz-button\n          nzType=\"primary\"\n          nzSize=\"large\"\n        >\n          {{ \"default.layout.SIGN_UP_FREE\" | translate }}\n        </button>\n        <div class=\"links\">\n          <a href=\"\" target=\"_top\">UetSurvey Home</a>|\n          <a href=\"\" target=\"_top\">Sitemap</a>|\n          <a href=\"\" target=\"_top\">How It Works</a>\n        </div>\n        <div class=\"links\">\n          <a href=\"\" target=\"_top\">Survey Types</a>|\n          <a href=\"\" target=\"_top\">Customer Satisfaction Surveys</a>|\n          <a href=\"\" target=\"_top\">Employee Surveys</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"!surveyFormDetail && !surveyCollectorDetail\">\n  <div class=\"wrapper\">\n    <div class=\"error-message-wrapper\">\n      <h1 class=\"wds-type-page-title\" translate>default.layout.OH_BANANAS</h1>\n      <div class=\"error-message-container\">\n        <h2 class=\"wds-type-section-title\" translate>\n          default.layout.WE_CANT_FIND_THE_PAGE_YOU_REQUESTED\n        </h2>\n        <p translate>\n          default.layout.IF_YOU_ARE_TRYING_TO_ACCESS_A_SURVEY_PLEASE_CONTACT_THE_SURVEY_ADMINISTRATOR_THE_URL_MAY_HAVE_BEEN_CHANGED_OR_THE_SURVEY_MAY_NO_LONGER_EXIST\n        </p>\n        <a href=\"\" class=\"error-logo\" target=\"_top\">\n          <img src=\"./assets/images/logo/full-logo-green.png\" alt=\"UetSurvey\" />\n        </a>\n        <h3 class=\"wds-type-card-title\" translate>\n          default.layout.WANT_TO_CREATE_YOUR_OWN_SURVEY\n        </h3>\n        <button\n          [routerLink]=\"['/auth', 'signup']\"\n          nz-button\n          nzType=\"primary\"\n          nzSize=\"large\"\n        >\n          Sign Up FREE\n        </button>\n        <div class=\"links\">\n          <a href=\"\" target=\"_top\">UetSurvey Home</a>|\n          <a href=\"\" target=\"_top\">Sitemap</a>|\n          <a href=\"\" target=\"_top\">How It Works</a>\n        </div>\n        <div class=\"links\">\n          <a href=\"\" target=\"_top\">Survey Types</a>|\n          <a href=\"\" target=\"_top\">Customer Satisfaction Surveys</a>|\n          <a href=\"\" target=\"_top\">Employee Surveys</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/modules/publish/pages/answer-survey/answer-survey.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/publish/pages/answer-survey/answer-survey.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .sv_header {\n  background-color: #fff;\n  padding-left: 0px !important;\n}\n::ng-deep .sv_header h3 {\n  font-weight: 700 !important;\n  color: #00bf6f;\n}\n.wrapper {\n  text-align: center;\n}\n.error-message-wrapper {\n  width: 550px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -250px 0 0 -250px;\n}\n.error-message-wrapper .error-message-container {\n  padding: 32px;\n  background-color: #fff;\n  border: 1px solid #d0d2d3;\n  border-radius: 2px;\n}\n.error-message-wrapper p {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.error-message-wrapper p {\n  color: #6b787f;\n  line-height: 1.4;\n  font-size: 15px;\n}\n.error-message-wrapper .error-logo {\n  position: fixed;\n  top: 24px;\n  left: 24px;\n  margin: 0;\n}\n.error-message-wrapper .error-logo img {\n  display: block;\n  margin: 0;\n  width: 200px;\n}\n.error-message-wrapper h3 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n.error-message-wrapper .links {\n  margin: 0;\n  margin-top: 32px;\n  font-size: 13px;\n  color: #d0d2d3;\n}\n.survey-page {\n  margin-top: 40px;\n}\n.survey-page .survey-title {\n  font-size: 26px;\n  font-style: normal;\n  font-weight: 700;\n  text-decoration: none;\n  color: #00bf6f;\n  line-height: 1.25;\n}\n.survey-page .title-text {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n}\n.survey-page .description-text {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  color: #6d7072;\n}\n.survey-page .survey-footer {\n  text-align: center;\n  padding: 0 0 40px 0;\n  margin-bottom: 40px;\n}\n.survey-page .survey-footer-title {\n  margin: 0;\n  font-size: 12px;\n  line-height: 15px;\n}\n.survey-page .survey-footer-title:before {\n  content: \" \";\n  width: 149px;\n  display: block;\n  margin: 0 auto 18.5px auto;\n}\n.survey-page .footer-brand-name {\n  font-size: 15px;\n  font-weight: bold;\n  display: block;\n}\n.survey-page .responsive-logo {\n  margin: 2px 0;\n  height: 35px;\n}\n.survey-page .survey-footer-link {\n  width: 207px;\n  margin: 0 auto;\n  text-decoration: underline;\n  text-transform: none;\n  color: #333e48;\n}\n.survey-page .survey-footer .survey-footer-privacy-link-container,\n.survey-page .v3theme .survey-page .survey-footer .report-problem-trigger-spacing {\n  display: inline-block;\n  padding-top: 80px;\n}\n.survey-page .survey-footer-privacy-link {\n  text-decoration: none;\n  color: #6b787f;\n}\n.survey-page .survey-footer-privacy-text {\n  text-decoration: none;\n  color: #6b787f;\n}\n.survey-page .survey-title-container {\n  min-height: 20px;\n  overflow: hidden;\n  text-align: center;\n}\n.survey-page .question-body,\n.survey-page .question-body-font-theme,\n.file-upload-clear-btn,\n.slider-clear a,\n::ng-deep nz-form-label label {\n  color: #333e48;\n  font-size: 18px !important;\n  font-style: normal;\n  font-weight: 300;\n  text-decoration: none;\n  line-height: 1.25;\n}\n.thank-you-v3 .survey-page-body .survey-title-table,\n.password-wrapper-v3 .survey-page-body .survey-title-table {\n  margin: 40px 0 0 0;\n}\n.survey-page .survey-title-cell {\n  padding: 0;\n  vertical-align: middle;\n}\n.survey-title-table {\n  table-layout: fixed;\n  width: 100%;\n}\n.survey-page .survey-page-body {\n  padding: 80px 140px 0 140px;\n}\n@media only screen and (max-width: 768px) {\n  .survey-page .survey-page-body {\n    padding: 80px 80px 0 80px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .survey-page .survey-page-body {\n    padding: 40px 40px 0 40px;\n  }\n\n  .ant-form-item-label {\n    text-align: center;\n  }\n}\n.survey-page .password-invalid-message {\n  display: inline-block;\n  padding-left: 5px;\n}\n.password-invalid-message {\n  margin: 40px 0 0 0;\n  color: red !important;\n}\n.survey-page .question-validation-theme,\n.survey-page .slider-warning,\n.survey-page .password-invalid-message,\n.survey-page .question-preset-theme {\n  color: #333e48;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  text-decoration: none;\n  outline: 0;\n}\n.password-message {\n  margin: 40px 0 0 0;\n}\n.password-field {\n  margin: 40px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL3B1Ymxpc2gvcGFnZXMvYW5zd2VyLXN1cnZleS9hbnN3ZXItc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3B1Ymxpc2gvcGFnZXMvYW5zd2VyLXN1cnZleS9hbnN3ZXItc3VydmV5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BoaXh1YW5ob2FuL0Rlc2lnbi1XZWIvNS4gQW5ndWxhci9EdUFuL1ByaXZhdGUtVUVULVNVUlZFWS9Gcm9udGVuZC9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0FGO0FEQ0U7RUFDRSwyQkFBQTtFQUNBLGNFTFU7QURNZDtBREVBO0VBQ0Usa0JBQUE7QUNDRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0VGO0FEREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDR0o7QURERTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjtBRERFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0dKO0FERkk7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNJTjtBRERFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEQUE7RUFDRSxnQkFBQTtBQ0dGO0FERkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0VoRVU7RUZpRVYsaUJBQUE7QUNJSjtBREZFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNJSjtBREZFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSUo7QURGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSUo7QURISTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDS047QURGRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjtBREZFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNJSjtBREZFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0lKO0FERkU7O0VBRUUscUJBQUE7RUFDQSxpQkFBQTtBQ0lKO0FERkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNJSjtBREZFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDSUo7QURBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEREE7Ozs7O0VBS0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNJRjtBRERBOztFQUVFLGtCQUFBO0FDSUY7QURGQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQ0tGO0FESEE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNNRjtBREpBO0VBQ0UsMkJBQUE7QUNPRjtBRExBO0VBQ0U7SUFDRSx5QkFBQTtFQ1FGO0FBQ0Y7QUROQTtFQUNFO0lBQ0UseUJBQUE7RUNRRjs7RUROQTtJQUNFLGtCQUFBO0VDU0Y7QUFDRjtBRE5BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDU0Y7QURQQTs7OztFQUlFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ1VGO0FEUkE7RUFDRSxrQkFBQTtBQ1dGO0FEVEE7RUFDRSxjQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3B1Ymxpc2gvcGFnZXMvYW5zd2VyLXN1cnZleS9hbnN3ZXItc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuOjpuZy1kZWVwIC5zdl9oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XG4gIH1cbn1cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVycm9yLW1lc3NhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA1NTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0yNTBweCAwIDAgLTI1MHB4O1xuICAuZXJyb3ItbWVzc2FnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6ICM2Yjc4N2Y7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmVycm9yLWxvZ28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDI0cHg7XG4gICAgbGVmdDogMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgfVxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIC5saW5rcyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZDBkMmQzO1xuICB9XG59XG4uc3VydmV5LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICAuc3VydmV5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbiAgLnRpdGxlLXRleHQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzZkNzA3MjtcbiAgfVxuICAuc3VydmV5LWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMCA0MHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuc3VydmV5LWZvb3Rlci10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHdpZHRoOiAxNDlweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTguNXB4IGF1dG87XG4gICAgfVxuICB9XG4gIC5mb290ZXItYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5yZXNwb25zaXZlLWxvZ28ge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5zdXJ2ZXktZm9vdGVyLWxpbmsge1xuICAgIHdpZHRoOiAyMDdweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBjb2xvcjogIzMzM2U0ODtcbiAgfVxuICAuc3VydmV5LWZvb3RlciAuc3VydmV5LWZvb3Rlci1wcml2YWN5LWxpbmstY29udGFpbmVyLFxuICAudjN0aGVtZSAuc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXIgLnJlcG9ydC1wcm9ibGVtLXRyaWdnZXItc3BhY2luZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG4gIC5zdXJ2ZXktZm9vdGVyLXByaXZhY3ktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNmI3ODdmO1xuICB9XG4gIC5zdXJ2ZXktZm9vdGVyLXByaXZhY3ktdGV4dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNmI3ODdmO1xuICB9XG59XG5cbi5zdXJ2ZXktcGFnZSAuc3VydmV5LXRpdGxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tYm9keSxcbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tYm9keS1mb250LXRoZW1lLFxuLmZpbGUtdXBsb2FkLWNsZWFyLWJ0bixcbi5zbGlkZXItY2xlYXIgYSxcbjo6bmctZGVlcCBuei1mb3JtLWxhYmVsIGxhYmVsIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi50aGFuay15b3UtdjMgLnN1cnZleS1wYWdlLWJvZHkgLnN1cnZleS10aXRsZS10YWJsZSxcbi5wYXNzd29yZC13cmFwcGVyLXYzIC5zdXJ2ZXktcGFnZS1ib2R5IC5zdXJ2ZXktdGl0bGUtdGFibGUge1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS10aXRsZS1jZWxsIHtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zdXJ2ZXktdGl0bGUtdGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdXJ2ZXktcGFnZSAuc3VydmV5LXBhZ2UtYm9keSB7XG4gIHBhZGRpbmc6IDgwcHggMTQwcHggMCAxNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN1cnZleS1wYWdlIC5zdXJ2ZXktcGFnZS1ib2R5IHtcbiAgICBwYWRkaW5nOiA4MHB4IDgwcHggMCA4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zdXJ2ZXktcGFnZSAuc3VydmV5LXBhZ2UtYm9keSB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgfVxuICAuYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5zdXJ2ZXktcGFnZSAucGFzc3dvcmQtaW52YWxpZC1tZXNzYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5wYXNzd29yZC1pbnZhbGlkLW1lc3NhZ2Uge1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tdmFsaWRhdGlvbi10aGVtZSxcbi5zdXJ2ZXktcGFnZSAuc2xpZGVyLXdhcm5pbmcsXG4uc3VydmV5LXBhZ2UgLnBhc3N3b3JkLWludmFsaWQtbWVzc2FnZSxcbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tcHJlc2V0LXRoZW1lIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG4ucGFzc3dvcmQtbWVzc2FnZSB7XG4gIG1hcmdpbjogNDBweCAwIDAgMDtcbn1cbi5wYXNzd29yZC1maWVsZCB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuIiwiOjpuZy1kZWVwIC5zdl9oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zdl9oZWFkZXIgaDMge1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBiZjZmO1xufVxuXG4ud3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLW1lc3NhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiA1NTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0yNTBweCAwIDAgLTI1MHB4O1xufVxuLmVycm9yLW1lc3NhZ2Utd3JhcHBlciAuZXJyb3ItbWVzc2FnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZXJyb3ItbWVzc2FnZS13cmFwcGVyIHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuLmVycm9yLW1lc3NhZ2Utd3JhcHBlciBwIHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5lcnJvci1tZXNzYWdlLXdyYXBwZXIgLmVycm9yLWxvZ28ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuLmVycm9yLW1lc3NhZ2Utd3JhcHBlciAuZXJyb3ItbG9nbyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMjAwcHg7XG59XG4uZXJyb3ItbWVzc2FnZS13cmFwcGVyIGgzIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5lcnJvci1tZXNzYWdlLXdyYXBwZXIgLmxpbmtzIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZDBkMmQzO1xufVxuXG4uc3VydmV5LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnN1cnZleS1wYWdlIC5zdXJ2ZXktdGl0bGUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwYmY2ZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uc3VydmV5LXBhZ2UgLnRpdGxlLXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN1cnZleS1wYWdlIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM2ZDcwNzI7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMCA0MHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXItdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXItdGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxNDlweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDE4LjVweCBhdXRvO1xufVxuLnN1cnZleS1wYWdlIC5mb290ZXItYnJhbmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN1cnZleS1wYWdlIC5yZXNwb25zaXZlLWxvZ28ge1xuICBtYXJnaW46IDJweCAwO1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXItbGluayB7XG4gIHdpZHRoOiAyMDdweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMzMzNlNDg7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXIgLnN1cnZleS1mb290ZXItcHJpdmFjeS1saW5rLWNvbnRhaW5lcixcbi5zdXJ2ZXktcGFnZSAudjN0aGVtZSAuc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXIgLnJlcG9ydC1wcm9ibGVtLXRyaWdnZXItc3BhY2luZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4uc3VydmV5LXBhZ2UgLnN1cnZleS1mb290ZXItcHJpdmFjeS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzZiNzg3Zjtcbn1cbi5zdXJ2ZXktcGFnZSAuc3VydmV5LWZvb3Rlci1wcml2YWN5LXRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNmI3ODdmO1xufVxuXG4uc3VydmV5LXBhZ2UgLnN1cnZleS10aXRsZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tYm9keSxcbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tYm9keS1mb250LXRoZW1lLFxuLmZpbGUtdXBsb2FkLWNsZWFyLWJ0bixcbi5zbGlkZXItY2xlYXIgYSxcbjo6bmctZGVlcCBuei1mb3JtLWxhYmVsIGxhYmVsIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi50aGFuay15b3UtdjMgLnN1cnZleS1wYWdlLWJvZHkgLnN1cnZleS10aXRsZS10YWJsZSxcbi5wYXNzd29yZC13cmFwcGVyLXYzIC5zdXJ2ZXktcGFnZS1ib2R5IC5zdXJ2ZXktdGl0bGUtdGFibGUge1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG59XG5cbi5zdXJ2ZXktcGFnZSAuc3VydmV5LXRpdGxlLWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc3VydmV5LXRpdGxlLXRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdXJ2ZXktcGFnZSAuc3VydmV5LXBhZ2UtYm9keSB7XG4gIHBhZGRpbmc6IDgwcHggMTQwcHggMCAxNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3VydmV5LXBhZ2UgLnN1cnZleS1wYWdlLWJvZHkge1xuICAgIHBhZGRpbmc6IDgwcHggODBweCAwIDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN1cnZleS1wYWdlIC5zdXJ2ZXktcGFnZS1ib2R5IHtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xuICB9XG5cbiAgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLnN1cnZleS1wYWdlIC5wYXNzd29yZC1pbnZhbGlkLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ucGFzc3dvcmQtaW52YWxpZC1tZXNzYWdlIHtcbiAgbWFyZ2luOiA0MHB4IDAgMCAwO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tdmFsaWRhdGlvbi10aGVtZSxcbi5zdXJ2ZXktcGFnZSAuc2xpZGVyLXdhcm5pbmcsXG4uc3VydmV5LXBhZ2UgLnBhc3N3b3JkLWludmFsaWQtbWVzc2FnZSxcbi5zdXJ2ZXktcGFnZSAucXVlc3Rpb24tcHJlc2V0LXRoZW1lIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5wYXNzd29yZC1tZXNzYWdlIHtcbiAgbWFyZ2luOiA0MHB4IDAgMCAwO1xufVxuXG4ucGFzc3dvcmQtZmllbGQge1xuICBtYXJnaW46IDQwcHggMDtcbn0iLCIvLyBjb2xvcnNcbiR0aGVtZS1jb2xvcjogIzAwYmY2ZjtcbiRicm93bmlzaC1ncmV5OiAjNjg2ODY4O1xuJHBhbGUtZ3JleTogI2VhZWNlZTtcbiRwYW5lbC1ib3JkZXItY29sb3I6ICRwYWxlLWdyZXk7XG4kc3VydmV5LWxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kY2hhcmNvYWwtZ3JleTogIzNlM2Y0MjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/publish/pages/answer-survey/answer-survey.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/publish/pages/answer-survey/answer-survey.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnswerSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerSurveyComponent", function() { return AnswerSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var AnswerSurveyComponent = /** @class */ (function () {
    function AnswerSurveyComponent(activatedRoute, loaderService, nzMessageService, translateService, pSurveyCollectorService, pSurveyResponseService, visitorsService, formBuilder, titleService) {
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.pSurveyCollectorService = pSurveyCollectorService;
        this.pSurveyResponseService = pSurveyResponseService;
        this.visitorsService = visitorsService;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.subscriptions = [];
    }
    AnswerSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIpAndGeoLocation();
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var url = params.url;
            _this.getSurveyCollectorByUrl(url);
        }));
        this.startTime = new Date();
    };
    AnswerSurveyComponent.prototype.getIpAndGeoLocation = function () {
        var _this = this;
        this.visitorsService.getIpAddress().subscribe(function (res) {
            _this.ipAddress = res["ip"];
            _this.visitorsService.getGeoLocation(_this.ipAddress).subscribe(function (res) {
                _this.geoLocation = res;
            });
        });
    };
    AnswerSurveyComponent.prototype.getSurveyCollectorByUrl = function (url) {
        var _this = this;
        this.loaderService.display(true);
        this.pSurveyCollectorService.getSurveyCollectorByUrl(url).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.surveyCollectorDetail = res.results[0];
                if (_this.surveyCollectorDetail.surveyForm) {
                    _this.surveyFormDetail = _this.surveyCollectorDetail.surveyForm;
                    _this.titleService.setTitle("UetSurvey - " + _this.surveyFormDetail.title);
                    _this.customFormByCollector();
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    AnswerSurveyComponent.prototype.customFormByCollector = function () {
        if (this.surveyCollectorDetail.passwordEnabled) {
            this.isCorrectPassword = false;
            this.buildForm();
        }
        else {
            this.isCorrectPassword = true;
        }
        if (this.surveyCollectorDetail.thankYouMessage &&
            this.surveyFormDetail.json) {
            this.surveyFormDetail.json.completedHtml = "<h3>" + this.surveyCollectorDetail.thankYouMessage + "</h3>";
        }
        if (!this.surveyCollectorDetail.allowMultipleResponses &&
            this.surveyFormDetail.json) {
            this.surveyFormDetail.json.cookieName = this.surveyCollectorDetail.url;
        }
    };
    AnswerSurveyComponent.prototype.onSubmitSurveyResponse = function (json) {
        var _this = this;
        if (!json) {
            return;
        }
        var endTime = new Date();
        var surveyResponse = {
            surveyFormId: this.surveyFormDetail.id,
            surveyCollectorId: this.surveyCollectorDetail.id,
            totalTime: endTime.getTime() - this.startTime.getTime(),
            startTime: this.startTime,
            endTime: endTime,
            ipAddress: this.ipAddress,
            json: json && Object.keys(json).length > 0 ? json : null,
            geoLocation: this.geoLocation,
            collectorPassword: this.collectorPassword
        };
        this.loaderService.display(true);
        this.pSurveyResponseService
            .addSurveySurveyResponse(surveyResponse)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                if (_this.surveyCollectorDetail.displaySurveyResults) {
                    _this.displaySurveyResults = true;
                    _this.dataSurveyResults = json;
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(AnswerSurveyComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    AnswerSurveyComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    AnswerSurveyComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2)]]
        });
    };
    AnswerSurveyComponent.prototype.onSubmitPassword = function (formData) {
        var _this = this;
        this.errorPasswordMessage = null;
        if (formData.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_3__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.errorPasswordMessage = null;
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_3__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formData.value, { surveyCollectorId: this.surveyCollectorDetail.id });
        this.pSurveyCollectorService.compareSurveyCollectorPassword(data).subscribe(function (res) {
            if (res.status.code === 200 &&
                res.results[0].id === _this.surveyCollectorDetail.id) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.isCorrectPassword = true;
                _this.collectorPassword = formData.value.password;
            }
        }, function (err) {
            _this.errorPasswordMessage = _this.translateService.instant("default.layout.THE_PASSWORD_ENTERED_WAS_INCORRECT_PLEASE_CHECK_YOUR_DATA_AND_TRY_AGAIN");
            _this.isCorrectPassword = false;
            _this.loaderService.display(false);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    AnswerSurveyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["PSurveyCollectorService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["PSurveyResponseService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["VisitorsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
    ]; };
    AnswerSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-answer-survey",
            template: __webpack_require__(/*! raw-loader!./answer-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/publish/pages/answer-survey/answer-survey.component.html"),
            styles: [__webpack_require__(/*! ./answer-survey.component.scss */ "./src/app/modules/publish/pages/answer-survey/answer-survey.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_shared__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["PSurveyCollectorService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["PSurveyResponseService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["VisitorsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], AnswerSurveyComponent);
    return AnswerSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/publish/publish.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/publish/publish.module.ts ***!
  \***************************************************/
/*! exports provided: PublishModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishModule", function() { return PublishModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_answer_survey_answer_survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/answer-survey/answer-survey.component */ "./src/app/modules/publish/pages/answer-survey/answer-survey.component.ts");
/* harmony import */ var _publish_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish.routing */ "./src/app/modules/publish/publish.routing.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");





var COMPONENTS = [_pages_answer_survey_answer_survey_component__WEBPACK_IMPORTED_MODULE_2__["AnswerSurveyComponent"]];
var PublishModule = /** @class */ (function () {
    function PublishModule() {
    }
    PublishModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _publish_routing__WEBPACK_IMPORTED_MODULE_3__["PublishRouting"]],
            declarations: COMPONENTS.slice()
        })
    ], PublishModule);
    return PublishModule;
}());



/***/ }),

/***/ "./src/app/modules/publish/publish.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/publish/publish.routing.ts ***!
  \****************************************************/
/*! exports provided: PublishRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishRouting", function() { return PublishRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_answer_survey_answer_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/answer-survey/answer-survey.component */ "./src/app/modules/publish/pages/answer-survey/answer-survey.component.ts");




var routes = [
    {
        path: "",
        redirectTo: "answer-survey",
        pathMatch: "full"
    },
    {
        path: "answer-survey/:url",
        component: _pages_answer_survey_answer_survey_component__WEBPACK_IMPORTED_MODULE_3__["AnswerSurveyComponent"]
    }
];
var PublishRouting = /** @class */ (function () {
    function PublishRouting() {
    }
    PublishRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PublishRouting);
    return PublishRouting;
}());



/***/ })

}]);
//# sourceMappingURL=modules-publish-publish-module.js.map