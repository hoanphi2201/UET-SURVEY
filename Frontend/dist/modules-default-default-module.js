(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-default-default-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/layout/layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/layout/layout.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page>\n  <div class=\"global-navigation-header \">\n    <div\n      class=\"global-navigation-header-title-container global-navigation-header-centered\"\n    >\n      <h2\n        (click)=\"setStateNzDrawer(true)\"\n        class=\"global-navigation-header-title\"\n      >\n        {{ surveyFormDetail?.title }}\n      </h2>\n    </div>\n    <div class=\"global-navigation-header-tabs-container clearfix\">\n      <div class=\"global-navigation-header-centered\">\n        <ul *ngIf=\"surveyFormDetail\" class=\"global-navigation-header-tabs-left\">\n          <li routerLinkActive=\"selected\" class=\"progressive\">\n            <a [routerLink]=\"['/create', 'summary', surveyFormDetail.id]\">{{\n              \"default.layout.SUMMARY\" | translate | uppercase\n            }}</a>\n          </li>\n          <li routerLinkActive=\"selected\" class=\"progressive \">\n            <a\n              [routerLink]=\"['/create', 'design-survey', surveyFormDetail.id]\"\n              >{{ \"default.layout.DESIGN_SURVEY\" | translate | uppercase }}</a\n            >\n          </li>\n          <li routerLinkActive=\"selected\" class=\"progressive \">\n            <a\n              [routerLink]=\"['/create', 'preview-score', surveyFormDetail.id]\"\n              >{{ \"default.layout.PREVIEW_SCORE\" | translate | uppercase }}</a\n            >\n          </li>\n          <li\n            routerLinkActive=\"selected\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            class=\"progressive\"\n          >\n            <a\n              [routerLink]=\"[\n                '/create',\n                'collector-responses',\n                surveyFormDetail.id\n              ]\"\n              >{{\n                \"default.layout.COLLECT_RESPONSES\" | translate | uppercase\n              }}</a\n            >\n          </li>\n          <li routerLinkActive=\"selected\" class=\" progressive \">\n            <a\n              [routerLink]=\"['/create', 'analyze-results', surveyFormDetail.id]\"\n              >{{ \"default.layout.ANALYZE_RESULTS\" | translate | uppercase }}</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <nz-drawer\n    *ngIf=\"surveyFormDetail\"\n    [nzClosable]=\"false\"\n    [nzVisible]=\"visibleNzDrawer\"\n    [nzPlacement]=\"'top'\"\n    [nzTitle]=\"'default.layout.EDIT_TITLE' | translate\"\n    (nzOnClose)=\"setStateNzDrawer(false)\"\n  >\n    <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n      <div nz-row nzGutter=\"24\">\n        <div nz-col nzSpan=\"12\">\n          <nz-form-item>\n            <nz-form-label>{{\n              \"default.layout.TITLE\" | translate\n            }}</nz-form-label>\n            <nz-form-control\n              [ngClass]=\"{ 'has-error': isFieldValid(form, 'title') }\"\n            >\n              <input\n                formControlName=\"title\"\n                nz-input\n                [placeholder]=\"'default.layout.ENTER_TITLE' | translate\"\n              />\n            </nz-form-control>\n            <field-error-display\n              [displayError]=\"isFieldValid(form, 'title')\"\n              [errors]=\"f.title.errors\"\n            ></field-error-display>\n          </nz-form-item>\n        </div>\n        <div nz-col nzSpan=\"12\">\n          <nz-form-item>\n            <nz-form-label>{{\n              \"default.layout.DESCRIPTION\" | translate\n            }}</nz-form-label>\n            <nz-form-control\n              [ngClass]=\"{ 'has-error': isFieldValid(form, 'description') }\"\n            >\n              <input\n                formControlName=\"description\"\n                nz-input\n                [placeholder]=\"'default.layout.ENTER_DESCRIPTION' | translate\"\n              />\n            </nz-form-control>\n            <field-error-display\n              [displayError]=\"isFieldValid(form, 'description')\"\n              [errors]=\"f.description.errors\"\n            ></field-error-display>\n          </nz-form-item>\n        </div>\n      </div>\n    </form>\n    <div class=\"footer\">\n      <button\n        nz-button\n        nzType=\"default\"\n        (click)=\"setStateNzDrawer(false)\"\n        class=\"mr-8\"\n      >\n        <span>{{ \"default.layout.CANCEL\" | translate }}</span>\n      </button>\n      <button\n        nz-button\n        nzType=\"primary\"\n        [nzLoading]=\"buttonLoading\"\n        (click)=\"onSurveySaved(form, formDirective)\"\n      >\n        <span>{{ \"default.layout.SAVE\" | translate }}</span>\n      </button>\n    </div>\n  </nz-drawer>\n\n  <ng-container>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-page>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"listOfAllData.length > 0; else emptyList\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let survey of listOfAllData\">\n      <div class=\"sm-base-tile sm-survey-tile\">\n        <div\n          (click)=\"onPreviewCopy(survey)\"\n          class=\"h-100 sm-base-tile-container\"\n        >\n          <div class=\"sm-survey-tile-inner\">\n            <div\n              class=\"wds-type-card-title sm-survey-tile-title sm-truncate-multi-line\"\n              style=\"-webkit-line-clamp: 2;\"\n            >\n              {{ survey.title }}\n            </div>\n            <div class=\"sm-survey-tile-details wds-flex wds-flex-y\">\n              <div class=\"wds-type-dark-muted wds-type-body-sm\">\n                {{ countQuestionSurvey(survey.json) }}\n                {{ \"default.layout.QUESTIONS\" | translate | lowercase }}\n              </div>\n              <div class=\"wds-type-dark-muted wds-type-body-sm\">\n                {{ survey.response }}\n                {{ \"default.layout.RESPONSES\" | translate | lowercase }}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div\n          (click)=\"onUpdateFavorite(survey.id)\"\n          [nzTooltipTitle]=\"'default.layout.FAVORITES' | translate\"\n          nzTooltipPlacement=\"top\"\n          nz-tooltip\n          class=\"sm-survey-tile-badge-container\"\n        >\n          <i\n            [ngClass]=\"{ 'sm-survey-tile-badge-favorite': survey.isFavorite }\"\n            nz-icon\n            nzType=\"star\"\n            [nzTheme]=\"'fill'\"\n          >\n          </i>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div>\n    <button\n      nz-button\n      nzType=\"link\"\n      *ngIf=\"pagging?.total - pagging.pageSize * pagging.page > 0\"\n      (click)=\"loadMoreSurvey()\"\n      class=\"wds-button-text\"\n    >\n      {{ \"default.layout.VIEW\" | translate }}\n      {{\n        pagging.pageSize * (pagging.page + 1) > pagging?.total\n          ? pagging?.total - pagging.pageSize * pagging.page\n          : pagging.pageSize\n      }}\n      {{ \"default.layout.MORE\" | translate | lowercase }}\n    </button>\n  </div>\n</ng-container>\n\n<ng-template #emptyList>\n  <div class=\"row\">\n    <nz-empty\n      [nzNotFoundImage]=\"'assets/images/empty.png'\"\n      [nzNotFoundContent]=\"contentTpl\"\n    >\n      <ng-template #contentTpl>\n        <span\n          >{{ emptyDescription | translate }}\n          {{ filter.searchValue !== \"\" ? '\"' + filter.searchValue + '\".' : \"\" }}\n        </span>\n      </ng-template>\n    </nz-empty>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"listOfAllData.length > 0; else emptyList\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let survey of listOfAllData\">\n      <div class=\"wds-card sm-base-list-item sm-survey-card\">\n        <div class=\"row h-100 sm-base-list-item-container\">\n          <div\n            (click)=\"onPreviewCopy(survey)\"\n            class=\"wds-flex h-100   wds-flex-y-center sm-base-list-item-inner\"\n          >\n            <div class=\"wds-flex wds-flex-y\">\n              <span\n                class=\"wds-type-card-title sm-survey-card-title-text sm-truncate-multi-line\"\n                style=\"-webkit-line-clamp: 2;\"\n                >3453454</span\n              >\n              <div class=\"wds-flex-nowrap\">\n                <span class=\"wds-type-dark-muted wds-type-body-sm\">\n                  {{ \"default.layout.CREATED\" | translate }}:\n                  {{ survey.createdAt | date: \"dd/MM/yyyy\" }} |\n                  {{ \"default.layout.MODIFIED\" | translate }}:\n                  {{ survey.updatedAt | date: \"dd/MM/yyyy\" }}\n                </span>\n              </div>\n            </div>\n            <div class=\"sm-survey-card-actions\">\n              <div\n                class=\"wds-flex wds-flex-y wds-flex-x-center wds-flex-nowrap sm-survey-card-separator sm-survey-card-detail-section sm-survey-card-response-count\"\n              >\n                <span class=\"wds-type-dark-muted wds-type-section-title\">\n                  {{ survey.response }}</span\n                >\n                <span class=\"wds-type-dark-muted wds-type-body-sm\" translate\n                  >default.layout.RESPONSES</span\n                >\n              </div>\n              <div\n                class=\"wds-flex wds-flex-y wds-flex-x-center wds-flex-nowrap sm-survey-card-separator sm-survey-card-detail-section\"\n              >\n                <span class=\"wds-type-dark-muted wds-type-section-title\">\n                  {{ countQuestionSurvey(survey.json) }}</span\n                >\n                <span class=\"wds-type-dark-muted wds-type-body-sm\" translate\n                  >default.layout.QUESTIONS</span\n                >\n              </div>\n              <div\n                class=\"wds-flex wds-flex-y wds-flex-x-center wds-flex-nowrap sm-survey-card-separator sm-survey-card-detail-section sm-survey-card-completion-time\"\n              >\n                <span class=\"wds-type-dark-muted wds-type-section-title\">\n                  {{ calculateTimeComplete(survey.json) }}</span\n                >\n                <span class=\"wds-type-dark-muted wds-type-body-sm\" translate>\n                  default.layout.TYPICAL_TIME_SPENT\n                </span>\n              </div>\n              <div\n                class=\"wds-flex wds-flex-y wds-flex-x-center wds-flex-nowrap sm-survey-card-separator sm-survey-card-detail-section sm-survey-card-preview\"\n              >\n                <span class=\"wds-type-dark-muted wds-type-section-title\"\n                  ><i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i></span\n                ><br />\n                <span class=\"wds-type-dark-muted wds-type-body-sm\" translate>\n                  default.layout.PREVIEW\n                </span>\n              </div>\n            </div>\n          </div>\n          <div\n            (click)=\"onUpdateFavorite(survey.id)\"\n            [nzTooltipTitle]=\"'default.layout.FAVORITES' | translate\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            class=\"sm-survey-tile-badge-container\"\n          >\n            <i\n              [ngClass]=\"{ 'sm-survey-tile-badge-favorite': survey.isFavorite }\"\n              nz-icon\n              nzType=\"star\"\n              [nzTheme]=\"'fill'\"\n            >\n            </i>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div>\n    <button\n      nz-button\n      nzType=\"link\"\n      *ngIf=\"pagging?.total - pagging.pageSize * pagging.page > 0\"\n      (click)=\"loadMoreSurvey()\"\n      class=\"wds-button-text\"\n    >\n      {{ \"default.layout.VIEW\" | translate }}\n      {{\n        pagging.pageSize * (pagging.page + 1) > pagging?.total\n          ? pagging?.total - pagging.pageSize * pagging.page\n          : pagging.pageSize\n      }}\n      {{ \"default.layout.MORE\" | translate | lowercase }}\n    </button>\n  </div>\n</ng-container>\n\n<ng-template #emptyList>\n  <div class=\"row\">\n    <nz-empty\n      [nzNotFoundImage]=\"'assets/images/empty.png'\"\n      [nzNotFoundContent]=\"contentTpl\"\n    >\n      <ng-template #contentTpl>\n        <span>{{ emptyDescription | translate }}</span>\n      </ng-template>\n    </nz-empty>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-my-surveys-tab-container w-100 h-100\">\n  <div class=\"sm-my-surveys-tab-action-buttons\">\n    <div *ngIf=\"!searching\" class=\"sm-my-surveys-tab-action-buttons-inner\">\n      <div class=\"wds-flex wds-flex-x\">\n        <div class=\"wds-button-group\">\n          <button\n            (click)=\"onChangeTab('all')\"\n            [nzTooltipTitle]=\"'default.layout.ALL_SURVEYS' | translate\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            class=\"sm-my-surveys-tab-all-button\"\n            nz-button\n            nzType=\"default\"\n            [ngClass]=\"{ secondary: currentTab === 'all' }\"\n          >\n            {{ \"default.layout.ALL\" | translate }}\n          </button>\n          <button\n            (click)=\"onChangeTab('favorites')\"\n            [nzTooltipTitle]=\"'default.layout.FAVORITES_SURVEYS' | translate\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            class=\"sm-my-surveys-tab-all-button\"\n            nz-button\n            nzType=\"default\"\n            [ngClass]=\"{ secondary: currentTab === 'favorites' }\"\n          >\n            <i nz-icon nzType=\"star\" [nzTheme]=\"'fill'\"></i>\n            {{ \"default.layout.FAVORITES\" | translate }}\n          </button>\n        </div>\n        <div class=\"sm-list-view-toggle\">\n          <div class=\"wds-button-group\">\n            <button\n              (click)=\"onChangeViewType('grid')\"\n              [nzTooltipTitle]=\"'default.layout.GIRD_VIEW' | translate\"\n              nzTooltipPlacement=\"top\"\n              nz-tooltip\n              class=\"sm-list-view-toggle-grid-button\"\n              nz-button\n              nzType=\"default\"\n              [ngClass]=\"{ secondary: viewType === 'grid' }\"\n            >\n              <i class=\"fa fa-th\"></i>\n            </button>\n            <button\n              (click)=\"onChangeViewType('list')\"\n              [nzTooltipTitle]=\"'default.layout.LIST_VIEW' | translate\"\n              nzTooltipPlacement=\"top\"\n              nz-tooltip\n              class=\"sm-list-view-toggle-grid-button\"\n              nz-button\n              nzType=\"default\"\n              [ngClass]=\"{ secondary: viewType === 'list' }\"\n            >\n              <i class=\"fa fa-th-list\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-container *ngIf=\"!searching; else listSearch\">\n    <ng-container *ngIf=\"currentTab === 'all'; else favoritesTemplate\">\n      <div class=\"sm-my-surveys-tab-row\">\n        <div class=\"wds-flex wds-flex-y\">\n          <span class=\"wds-type-section-title\">{{\n            \"default.layout.RECENT\" | translate\n          }}</span>\n          <ng-container [ngSwitch]=\"viewType\">\n            <ng-container *ngSwitchCase=\"'grid'\">\n              <app-grid-survey\n                [listOfAllData]=\"listOfRecentData\"\n                [pagging]=\"paggingRecent\"\n                [filter]=\"filterRecent\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n              >\n              </app-grid-survey>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'list'\">\n              <app-list-survey\n                [listOfAllData]=\"listOfRecentData\"\n                [pagging]=\"paggingRecent\"\n                [filter]=\"filterRecent\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n              >\n              </app-list-survey>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n\n      <div class=\"sm-my-surveys-tab-row\">\n        <div class=\"wds-flex wds-flex-y\">\n          <span class=\"wds-type-section-title\"\n            >{{ \"default.layout.ALL\" | translate }}\n          </span>\n          <ng-container [ngSwitch]=\"viewType\">\n            <ng-container *ngSwitchCase=\"'grid'\">\n              <app-grid-survey\n                [listOfAllData]=\"listOfAllData\"\n                [pagging]=\"paggingAll\"\n                [filter]=\"filterAll\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n              >\n              </app-grid-survey>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'list'\">\n              <app-list-survey\n                [listOfAllData]=\"listOfAllData\"\n                [pagging]=\"paggingAll\"\n                [filter]=\"filterAll\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n              >\n              </app-list-survey>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #favoritesTemplate>\n      <div class=\"sm-my-surveys-tab-row\">\n        <div class=\"wds-flex wds-flex-y\">\n          <div class=\"w-100\">\n            <div class=\"w-100 wds-flex wds-flex-y\">\n              <ng-container [ngSwitch]=\"viewType\">\n                <ng-container *ngSwitchCase=\"'grid'\">\n                  <app-grid-survey\n                    [listOfAllData]=\"listOfFavoriteData\"\n                    [pagging]=\"paggingFavorite\"\n                    [filter]=\"filterFavorite\"\n                    (loadMore)=\"loadMore($event)\"\n                    (previewSurvey)=\"openModalPreview($event)\"\n                  >\n                  </app-grid-survey>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'list'\">\n                  <app-list-survey\n                    [listOfAllData]=\"listOfFavoriteData\"\n                    [pagging]=\"paggingFavorite\"\n                    [filter]=\"filterFavorite\"\n                    (loadMore)=\"loadMore($event)\"\n                    (previewSurvey)=\"openModalPreview($event)\"\n                  >\n                  </app-list-survey>\n                </ng-container>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #listSearch>\n    <ng-container>\n      <div class=\"sm-my-surveys-tab-row\">\n        <div class=\"wds-flex wds-flex-y\">\n          <span class=\"wds-type-section-title\"\n            >{{ \"default.layout.MY_SURVEYS\" | translate }}\n          </span>\n          <ng-container [ngSwitch]=\"viewType\">\n            <ng-container *ngSwitchCase=\"'grid'\">\n              <app-grid-survey\n                [listOfAllData]=\"listOfSearchData\"\n                [pagging]=\"paggingSearch\"\n                [filter]=\"filterSearch\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n                [emptyDescription]=\"\n                  'default.layout.SORRY_WE_COULDN_FIND_ANYTHING_RELATED_TO'\n                \"\n              >\n              </app-grid-survey>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'list'\">\n              <app-list-survey\n                [listOfAllData]=\"listOfSearchData\"\n                [pagging]=\"paggingSearch\"\n                [filter]=\"filterASearch\"\n                (loadMore)=\"loadMore($event)\"\n                (previewSurvey)=\"openModalPreview($event)\"\n                [emptyDescription]=\"\n                  'default.layout.SORRY_WE_COULDN_FIND_ANYTHING_RELATED_TO'\n                \"\n              >\n              </app-list-survey>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-all-templates-tab-container\">\n  <div\n    class=\"sm-all-templates-tab-actions sm-all-templates-tab-actions-no-tabs\"\n  >\n    <div class=\"wds-flex wds-flex-x w-100 sm-all-templates-tab-actions-inner\">\n      <div>\n        <button\n          nz-dropdown\n          nzTrigger=\"click\"\n          [nzDropdownMenu]=\"menuFolder\"\n          nz-button\n          [nzSize]=\"'large'\"\n          nzType=\"default\"\n        >\n          View all templates\n          <i class=\"icon\" nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n        </button>\n      </div>\n      <div class=\"sm-list-view-toggle\">\n        <div class=\"wds-button-group\">\n          <button\n            class=\"sm-list-view-toggle-grid-button secondary\"\n            nz-button\n            nzType=\"primary\"\n          >\n            <i class=\"fa fa-th\"></i>\n          </button>\n          <button\n            class=\"sm-list-view-toggle-grid-button\"\n            nz-button\n            nzType=\"default\"\n          >\n            <i class=\"fa fa-th-list\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <div\n    class=\"m-b-2 sm-all-templates-tab-category-heading sm-all-templates-tab-category-heading-no-tabs\"\n  >\n    <div class=\"sm-all-templates-tab-category-heading-inner\">\n      <span class=\"wds-type-section-title\">Most Popular</span>\n    </div>\n  </div>\n  <div class=\"wds-flex wds-flex-x sm-all-templates-tab-row w-100 p-b-5\">\n    <div class=\"w-100\">\n      <div class=\"w-100 wds-flex wds-flex-y\">\n        <div class=\"row\">\n          <div class=\"sm-base-tile sm-survey-template-tile\">\n            <div class=\"h-100 sm-base-tile-container\">\n              <div class=\"sm-survey-template-tile-inner p-0\">\n                <div class=\"sm-survey-template-tile-image-content wds-flex\">\n                  <img\n                    class=\"sm-survey-template-tile-stock-image\"\n                    src=\"assets/images/customer_satisfaction_template.jpg\"\n                  />\n                </div>\n                <div class=\"sm-survey-template-tile-text-content\">\n                  <div class=\"p-0\">\n                    <div class=\"type-left type-body\">\n                      <div>\n                        <span\n                          class=\"wds-type-card-title sm-survey-template-tile-title sm-truncate-multi-line\"\n                          style=\"-webkit-line-clamp: 2;\"\n                        >\n                          Customer Satisfaction Survey Template\n                        </span>\n                      </div>\n                      <div>\n                        <span\n                          class=\"wds-type-body-sm sm-survey-template-tile-description sm-truncate-multi-line\"\n                          style=\"-webkit-line-clamp: 2;\"\n                        >\n                          Your customers can make or break your business. Hear\n                          from them directly about what you're doing well and\n                          what you need to improve.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/create-survey.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/create-survey/create-survey.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [title]=\"'UetSurvey - New Survey'\">\n  <div class=\"sm-create-survey\">\n    <div class=\"h-100 m-0 grid-fluid\">\n      <div class=\"row grid-row wds-flex m-0\">\n        <div\n          class=\"type-center wds-flex wds-flex-y p-t-6 sm-get-started-button-bar\"\n        >\n          <div\n            class=\"type-left wds-type-section-title sm-get-started-button-bar-heading\"\n          >\n            {{ \"default.layout.CREATE_A_NEW_SURVEY\" | translate }}\n          </div>\n          <div class=\"type-center sm-get-started-button-bar-buttons p-t-2\">\n            <button\n              type=\"button\"\n              (click)=\"changeCreateType('past')\"\n              [ngClass]=\"{ selected: createType === 'past' }\"\n              class=\"m-t-2 m-b-1 sm-get-started-button-bar-button wds-button\"\n            >\n              <i nz-icon nzType=\"copy\" nzTheme=\"outline\"></i>\n              {{ \"default.layout.COPY_A_PAST_SURVEY\" | translate }}\n            </button>\n            <button\n              (click)=\"openModalScratch()\"\n              type=\"button\"\n              class=\"m-t-2 m-b-1 sm-get-started-button-bar-button wds-button\"\n            >\n              <i class=\"fa fa-file-o\"></i>\n              {{ \"default.layout.START_FROM_SCRATCH\" | translate }}\n            </button>\n            <button\n              type=\"button\"\n              (click)=\"changeCreateType('template')\"\n              [ngClass]=\"{ selected: createType === 'template' }\"\n              class=\"m-t-2 m-b-1 sm-get-started-button-bar-button wds-button\"\n            >\n              <i nz-icon nzType=\"diff\" nzTheme=\"outline\"></i>\n              {{ \"default.layout.START_FROM_TEMPLATE\" | translate }}\n            </button>\n          </div>\n        </div>\n        <div class=\"wds-flex h-100 wds-flex-y sm-explore-main-container\">\n          <div\n            *ngIf=\"createType === 'past'\"\n            class=\"wds-flex wds-flex-x wds-flex-between p-6 p-b-5 sm-explore-templates-heading\"\n          >\n            <div class=\"wds-type-section-title\">\n              {{ \"default.layout.COPY_A_PAST_SURVEY\" | translate }}\n            </div>\n            <div class=\"wds-input-group\">\n              <nz-input-group [nzSize]=\"'large'\" [nzSuffix]=\"suffixIconSearch\">\n                <input\n                  #inputSearchPast\n                  type=\"text\"\n                  nz-input\n                  [placeholder]=\"'default.layout.SEARCH_SURVEYS' | translate\"\n                />\n              </nz-input-group>\n              <ng-template #suffixIconSearch>\n                <i nz-icon nzType=\"search\"></i>\n              </ng-template>\n            </div>\n          </div>\n          <div\n            *ngIf=\"createType === 'template'\"\n            class=\"wds-flex wds-flex-x wds-flex-between p-6 p-b-5 sm-explore-templates-heading\"\n          >\n            <div class=\"wds-type-section-title\">\n              {{ \"default.layout.EXPLORE_TEMPLATES\" | translate }}\n            </div>\n            <div class=\"wds-input-group\">\n              <nz-input-group [nzSize]=\"'large'\" [nzSuffix]=\"suffixIconSearch\">\n                <input\n                  type=\"text\"\n                  nz-input\n                  [placeholder]=\"'default.layout.SEARCH_TEMPLATE' | translate\"\n                />\n              </nz-input-group>\n              <ng-template #suffixIconSearch>\n                <i nz-icon nzType=\"search\"></i>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"wds-flex wds-flex-x wds-flex-item-grow\">\n            <div class=\"wds-flex wds-flex-y w-100 sm-explore-gallery\">\n              <app-past-survey\n                [searchValue]=\"searchPastValue\"\n                *ngIf=\"createType === 'past'\"\n              >\n              </app-past-survey>\n              <app-template-survey *ngIf=\"createType === 'template'\">\n              </app-template-survey>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-page>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <div class=\"welcome-banner container-fluid\">\n    <div style=\"position: relative;\">\n      <h1 class=\"welcome-line\">\n        {{ \"default.layout.WELCOME_BACK\" | translate }},\n        <a (click)=\"showProfile(0)\">{{ currentUser?.lastName }}</a\n        >!\n      </h1>\n      <p class=\"wb-subline\">\n        <ng-container\n          *ngIf=\"currentUser?.accountComplete; else completeTaskTpl\"\n        >\n          <span class=\"wb-subline-text\">\n            <a (click)=\"showProfile(1)\">{{\n              currentUser?.organizationLocationView\n            }}</a>\n          </span>\n        </ng-container>\n\n        <ng-template #completeTaskTpl>\n          <span class=\"wb-subline-text\">\n            <i\n              nz-icon\n              nzType=\"check-circle\"\n              [nzTheme]=\"'twotone'\"\n              [nzTwotoneColor]=\"'#00BF6F'\"\n            ></i>\n            {{ \"default.layout.YOU_COMPLETED\" | translate }} 1\n            {{ \"default.layout.OF\" | translate }} 3\n            {{ \"default.layout.TASKS\" | translate }}.\n            <a\n              (click)=\"\n                progressPanelState = progressPanelState === 'in' ? 'out' : 'in'\n              \"\n            >\n              {{ \"default.layout.EXPLORE_YOUR_ACCOUNT\" | translate }}\n              <i\n                *ngIf=\"progressPanelState == 'in'\"\n                nz-icon\n                nzType=\"caret-down\"\n                nzTheme=\"outline\"\n              ></i>\n              <i\n                *ngIf=\"progressPanelState == 'out'\"\n                nz-icon\n                nzType=\"caret-right\"\n                nzTheme=\"outline\"\n              ></i>\n            </a>\n          </span>\n        </ng-template>\n      </p>\n      <div *ngIf=\"progressPanelState === 'in'\" class=\"tooth\"></div>\n    </div>\n  </div>\n  <div [@slideInOut]=\"progressPanelState\" class=\"progress-panel\">\n    <div (click)=\"progressPanelState = 'out'\" class=\"x-button\">\n      <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n    </div>\n    <div class=\"container\" style=\"position: relative;\">\n      <div\n        style=\"position: relative; display: inline-block; width: 100%; overflow-x: auto;\"\n      >\n        <hr class=\"dotted-line\" style=\"left: 18%; width: 30%;\" />\n        <hr class=\"dotted-line \" style=\"left: 54%; width: 30%;\" />\n        <ul class=\"progress-badges-list\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              completeTemplate;\n              context: {\n                $implicit: { title: 'default.layout.CREATE_AN_ACCOUNT' }\n              }\n            \"\n          ></ng-container>\n\n          <ng-template #completeTemplate let-item>\n            <li class=\"progress-badge-item active\">\n              <div class=\"active-badge\" style=\"display: inline-block;\">\n                <div class=\"circle\">\n                  <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                    <i nz-icon nzType=\"check\" nzTheme=\"outline\"></i>\n                  </span>\n                </div>\n                <div class=\"c-label\" translate>{{ item.title }}</div>\n              </div>\n            </li>\n          </ng-template>\n          <ng-container\n            *ngTemplateOutlet=\"\n              percentDoneProfile < 100\n                ? completeProfileTemplate\n                : completeTemplate;\n              context: {\n                $implicit: { title: 'default.layout.COMPLETE_YOUR_PROFILE' }\n              }\n            \"\n          >\n          </ng-container>\n\n          <ng-template #completeProfileTemplate>\n            <li class=\"progress-badge-item \">\n              <a (click)=\"showProfile(0)\">\n                <div style=\"display: inline-block;\">\n                  <div class=\"circle\">\n                    <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                      <i nz-icon nzType=\"user\" nzTheme=\"outline\"></i>\n                    </span>\n                  </div>\n                  <div class=\"c-label\" translate>\n                    default.layout.CREATE_AN_ACCOUNT\n                  </div>\n                </div>\n              </a>\n            </li>\n          </ng-template>\n\n          <ng-container\n            *ngTemplateOutlet=\"\n              countStatus?.length == 0\n                ? designSurveyTemplate\n                : completeTemplate;\n              context: {\n                $implicit: { title: 'default.layout.DESIGN_A_SURVEY' }\n              }\n            \"\n          >\n          </ng-container>\n\n          <ng-template #designSurveyTemplate>\n            <li class=\"progress-badge-item \">\n              <a [routerLink]=\"['/create-survey']\">\n                <div class=\"\" style=\"display: inline-block;\">\n                  <div class=\"circle\">\n                    <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </span>\n                  </div>\n                  <div class=\"c-label\" translate>\n                    default.layout.DESIGN_A_SURVEY\n                  </div>\n                </div>\n              </a>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<app-page [header]=\"header\" [title]=\"'Welcome to SurveyUet!'\">\n  <ng-container\n    *ngIf=\"!currentUser?.accountComplete && countStatus?.length === 0\"\n  >\n    <div class=\"row no-gutters\">\n      <div class=\"col-sm-12\">\n        <div class=\"create-survey-ribbon\">\n          <div class=\"title-line\">\n            Let's get started &amp; create your first survey!\n          </div>\n          <div class=\"row ribbon-and-button no-gutters\">\n            <div class=\"airplane hidden-sm-down\"></div>\n            <div class=\"button-holder\">\n              <button\n                [routerLink]=\"['/create-survey']\"\n                nz-button\n                nzType=\"primary\"\n              >\n                {{ \"header.sidebar.CREATE_SURVEY\" | translate | uppercase }}\n              </button>\n            </div>\n          </div>\n          <div class=\"container survey-gal\">\n            <h2 class=\"dw-pane-title\">Survey Gallery</h2>\n            <div class=\"dw-card survey-gal-card\">\n              <img\n                class=\"survey-gal-graphic\"\n                src=\"assets/images/survey_gal_rocket.png\"\n              />\n              <p class=\"card-headline\">\n                Results\n                <i nz-icon nzType=\"arrow-right\" nzTheme=\"outline\"></i>\n                Insights\n                <i nz-icon nzType=\"arrow-right\" nzTheme=\"outline\"></i>\n                Action!\n              </p>\n              <p class=\"card-text\">\n                Survey results can help you understand how you’re doing now, but\n                also what you need to do next. See examples of how you can\n                discover insights in your survey results:\n                <a id=\"survey-gallery-link\" href=\"#\" class=\"dw-link\">\n                  Explore the Survey Gallery »\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <div class=\"container\">\n    <ng-container *ngIf=\"countStatus?.length > 0\">\n      <div class=\"row\">\n        <div class=\"custom-card col-xs-6 col-md-3\">\n          <nz-card>\n            <div class=\"ss-item\">\n              <div class=\"left\">\n                <span class=\"c-label\" translate>\n                  default.layout.OPEN\n                  <span class=\"smf-icon tooltip-trigger top\">i</span>\n                </span>\n                <span class=\"value\">{{ displayCountStatus(\"OPEN\") }}</span>\n              </div>\n              <div class=\"right\">\n                <span class=\"c-label\" translate>\n                  default.layout.DRAFT\n                  <span class=\"smf-icon tooltip-trigger top\">i</span>\n                </span>\n                <span class=\"value\">{{ displayCountStatus(\"DRAFT\") }}</span>\n              </div>\n            </div>\n          </nz-card>\n        </div>\n        <div class=\"custom-card col-xs-6 col-md-3\">\n          <nz-card>\n            <div class=\"ss-item\">\n              <span class=\"c-label\" translate\n                >default.layout.TOTAL_RESPONSES</span\n              >\n              <span class=\"value\"\n                >{{ totalResponse ? totalResponse : 0 }}\n                <span class=\"smf-icon tooltip-trigger\">i</span>\n              </span>\n            </div>\n          </nz-card>\n        </div>\n        <div class=\"custom-card col-xs-6 col-md-3\">\n          <nz-card>\n            <div class=\"ss-item\">\n              <span class=\"c-label\" translate\n                >default.layout.AVERAGE_COMPLETION_RATE</span\n              >\n              <span class=\"value\"\n                >{{ averageCompletionRate ? averageCompletionRate + \"%\" : \"—\" }}\n                <span class=\"smf-icon tooltip-trigger\">i</span>\n              </span>\n            </div>\n          </nz-card>\n        </div>\n        <div class=\"custom-card col-xs-6 col-md-3\">\n          <nz-card>\n            <div class=\"ss-item\">\n              <span class=\"c-label\" translate\n                >default.layout.TYPICAL_TIME_SPENT</span\n              >\n              <span class=\"value\"\n                >{{ msToHMSTypicalTimeSpent ? msToHMSTypicalTimeSpent : \"—\" }}\n                <span class=\"smf-icon tooltip-trigger\">i</span>\n              </span>\n            </div>\n          </nz-card>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"survey-list\" style=\"position: relative;\">\n            <a [routerLink]=\"['/home']\" class=\"view-all-surveys\" translate>\n              default.layout.MANAGE_ALL_SURVEYS\n              <span class=\"notranslate\" style=\"position: relative; top: -1px;\"\n                >»</span\n              >\n            </a>\n            <h2 translate>default.layout.RECENT_SURVEYS</h2>\n            <div class=\"search-box\">\n              <nz-input-group [nzSuffix]=\"suffixIconSearch\">\n                <input\n                  [placeholder]=\"'Search recent surveys by name'\"\n                  nz-input\n                  [(ngModel)]=\"searchValue\"\n                  (ngModelChange)=\"onSearchSelect($event)\"\n                  (keyup.enter)=\"onSearchList($event.target.value)\"\n                  [nzAutocomplete]=\"auto\"\n                />\n              </nz-input-group>\n              <nz-autocomplete [nzDefaultActiveFirstOption]=\"false\" #auto>\n                <nz-auto-option\n                  *ngFor=\"let o of listOfSurvey\"\n                  [nzValue]=\"o.title\"\n                >\n                  {{ o.title }}\n                </nz-auto-option>\n              </nz-autocomplete>\n              <ng-template #suffixIconSearch>\n                <i nz-icon nzType=\"search\"></i>\n              </ng-template>\n            </div>\n            <div>\n              <ul class=\"survey-items-list\">\n                <li *ngFor=\"let survey of listOfAllData\" class=\"status-holder\">\n                  <span\n                    class=\"si-status\"\n                    [ngClass]=\"\n                      survey.status === 'DRAFT'\n                        ? 'survey-status-draft'\n                        : 'survey-status-open'\n                    \"\n                  >\n                    {{ survey.status }}\n                  </span>\n                  <div class=\"survey-item\">\n                    <div class=\"si-main-heading\">\n                      <div class=\"si-survey-title\">\n                        <a [routerLink]=\"['/create', 'summary', survey.id]\">{{\n                          survey.title\n                        }}</a>\n                      </div>\n                      <div class=\"si-subtitle\">\n                        <ul class=\"si-subtitle-items-list\">\n                          <li>\n                            {{ \"default.layout.CREATED\" | translate }}:\n                            {{ survey.createdAt | date: \"dd/MM/yyyy\" }}\n                          </li>\n                          <li>|</li>\n                          <li>\n                            {{ \"default.layout.MODIFIED\" | translate }}:\n                            {{ survey.updatedAt | date: \"dd/MM/yyyy\" }}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <ul class=\"si-metadata\">\n                      <li>\n                        <div>\n                          <span class=\"si-token-large\">{{\n                            countQuestionSurvey(survey.json)\n                          }}</span>\n                          {{ \"default.layout.QUESTIONS\" | translate }}\n                        </div>\n                      </li>\n                      <li>\n                        <div>\n                          <span class=\"si-token-large\">{{\n                            calculateTimeComplete(survey.json)\n                          }}</span>\n                          {{ \"default.layout.ESTIMATED_TIME\" | translate }}\n                          <br />\n                          {{ \"default.layout.TO_COMPLETE\" | translate }}\n                        </div>\n                      </li>\n                      <li>\n                        <div>\n                          <span class=\"si-token-large\">{{\n                            survey.collector\n                          }}</span>\n                          {{ \"default.layout.COLLECTORS\" | translate }}\n                        </div>\n                      </li>\n                    </ul>\n\n                    <ul class=\"show-on-hover si-actions\">\n                      <div class=\"variant-sm hidden-md-up\">\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a\n                              [routerLink]=\"[\n                                '/create',\n                                'analyze-results',\n                                survey.id\n                              ]\"\n                            >\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"bar-chart\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.ANALYZE_RESULTS</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a\n                              [routerLink]=\"[\n                                '/create',\n                                'design-survey',\n                                survey.id\n                              ]\"\n                            >\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"form\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.EDIT_SURVEY</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a\n                              [routerLink]=\"[\n                                '/create',\n                                'collector-responses',\n                                survey.id\n                              ]\"\n                            >\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"link\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.SEND_SURVEY</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a href=\"#\" class=\"\">\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"share-alt\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.SHARE_SURVEY</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a (click)=\"onMakeCopy(survey)\">\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"copy\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.MAKE_A_COPY</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                        <li class=\"action-token\">\n                          <div class=\"variant-sm hidden-md-up\">\n                            <a\n                              (click)=\"\n                                showDeleteConfirm(survey, tplContentDeleteForm)\n                              \"\n                            >\n                              <i\n                                class=\"icon-option\"\n                                nz-icon\n                                nzType=\"delete\"\n                                nzTheme=\"outline\"\n                              ></i>\n                              <span class=\"c-label\" translate\n                                >default.layout.DELETE_SURVEY</span\n                              >\n                            </a>\n                          </div>\n                        </li>\n                      </div>\n                      <div class=\"variant-lg hidden-sm-down\">\n                        <li class=\"action-token\">\n                          <div class=\"variant-lg hidden-sm-down\">\n                            <a\n                              version=\"4\"\n                              title=\"test\"\n                              data-action-source=\"survey_list_item\"\n                            >\n                              <div\n                                [ngClass]=\"{ clicked: survey.clicked }\"\n                                class=\"more-options action-icon-holder\"\n                              >\n                                <span\n                                  (nzVisibleChange)=\"setClicked($event, survey)\"\n                                  nz-dropdown\n                                  nzTrigger=\"click\"\n                                  [nzDropdownMenu]=\"menuAction\"\n                                  class=\"si-token-large action-icon smf-icon\"\n                                >\n                                  <i\n                                    nz-icon\n                                    nzType=\"ellipsis\"\n                                    nzTheme=\"outline\"\n                                    class=\"options-action\"\n                                  ></i>\n                                </span>\n                                <nz-dropdown-menu\n                                  nzPlacement=\"bottomRight\"\n                                  #menuAction=\"nzDropdownMenu\"\n                                >\n                                  <ul class=\"dropdown-action\" nz-menu>\n                                    <li\n                                      nz-menu-item\n                                      [routerLink]=\"[\n                                        '/create',\n                                        'analyze-results',\n                                        survey.id\n                                      ]\"\n                                    >\n                                      <i\n                                        nz-icon\n                                        nzType=\"bar-chart\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.ANALYZE_RESULTS\"\n                                          | translate\n                                      }}\n                                    </li>\n                                    <li\n                                      nz-menu-item\n                                      [routerLink]=\"[\n                                        '/create',\n                                        'design-survey',\n                                        survey.id\n                                      ]\"\n                                    >\n                                      <i\n                                        nz-icon\n                                        nzType=\"form\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.EDIT_SURVEY\" | translate\n                                      }}\n                                    </li>\n                                    <li\n                                      nz-menu-item\n                                      [routerLink]=\"[\n                                        '/create',\n                                        'collector-responses',\n                                        survey.id\n                                      ]\"\n                                    >\n                                      <i\n                                        nz-icon\n                                        nzType=\"link\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.SEND_SURVEY\" | translate\n                                      }}\n                                    </li>\n                                    <li nz-menu-item>\n                                      <i\n                                        nz-icon\n                                        nzType=\"share-alt\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.SHARE_SURVEY\"\n                                          | translate\n                                      }}\n                                    </li>\n                                    <li\n                                      (click)=\"onMakeCopy(survey)\"\n                                      nz-menu-item\n                                    >\n                                      <i\n                                        nz-icon\n                                        nzType=\"copy\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.MAKE_A_COPY\" | translate\n                                      }}\n                                    </li>\n                                    <li\n                                      (click)=\"\n                                        showDeleteConfirm(\n                                          survey,\n                                          tplContentDeleteForm\n                                        )\n                                      \"\n                                      nz-menu-item\n                                    >\n                                      <i\n                                        nz-icon\n                                        nzType=\"delete\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        \"default.layout.DELETE_SURVEY\"\n                                          | translate\n                                      }}\n                                    </li>\n                                  </ul>\n                                </nz-dropdown-menu>\n                              </div>\n                              <div class=\"c-label\" translate>\n                                default.layout.OPTIONS\n                              </div>\n                            </a>\n                          </div>\n                        </li>\n                      </div>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n              <div\n                *ngIf=\"!searchValue && listOfAllData.length <= 0\"\n                class=\"sl-empty\"\n              >\n                <h2 class=\"sl-no-activity\" translate>\n                  default.layout.NO_RECENT_SURVEYS_FOUND\n                </h2>\n              </div>\n              <div\n                *ngIf=\"searchValue && listOfAllData.length <= 0\"\n                class=\"sl-empty\"\n              >\n                <h2 class=\"sl-no-activity\">\n                  {{\n                    \"default.layout.NO_RECENT_SURVEYS_FOUND_WITH_THE_NAME\"\n                      | translate\n                  }}\n                  <strong>{{ searchValue }}</strong>\n                </h2>\n                <div>\n                  {{ \"default.layout.TO_SEARCH_ALL_SURVEYS_GO_TO\" | translate }}\n                  <a>\n                    {{ \"default.layout.MY_SURVEYS\" | translate }}\n                    <span\n                      class=\"notranslate\"\n                      style=\"position: relative; top: -1px;\"\n                      >»</span\n                    >\n                  </a>\n                </div>\n              </div>\n              <div class=\"sl-footer\">\n                <div class=\"sl-pagination\">\n                  <ng-container *ngIf=\"!searchValue\">\n                    {{ \"default.layout.SHOWING\" | translate }}\n                    {{ listOfAllData.length }}\n                    {{ \"default.layout.OF\" | translate }} {{ pagging.total }}\n                    {{ \"default.layout.RECENT_SURVEYS\" | translate }}.\n                  </ng-container>\n                  <ng-container *ngIf=\"searchValue\">\n                    {{ listOfAllData.length }}\n                    {{ \"default.layout.OF\" | translate }} {{ pagging.total }}\n                    {{\n                      \"default.layout.RECENT_SURVEY_NAMES_CONTAIN\" | translate\n                    }}\n                    \"{{ searchValue }}\"\n                  </ng-container>\n                  <a\n                    *ngIf=\"listOfAllData.length < pagging.total\"\n                    (click)=\"loadMoreSurvey()\"\n                    translate\n                  >\n                    default.layout.SHOW_MORE\n                    <i nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n                  </a>\n                </div>\n                <div class=\"buttons-ctnr\">\n                  <div class=\"gal-cta-holder\">\n                    <button\n                      [routerLink]=\"['/create-survey']\"\n                      nz-button\n                      nzType=\"primary\"\n                    >\n                      {{\n                        \"header.sidebar.CREATE_SURVEY\" | translate | uppercase\n                      }}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <div class=\"row\">\n      <div class=\"custom-card col-xs-12 col-md-4\">\n        <h2 class=\"pane-title\">\n          {{ \"default.layout.YOUR PROFILE\" | translate }}\n          <span class=\"smf-icon tooltip-trigger\">i</span>\n        </h2>\n        <nz-card class=\"profile-pane-box\">\n          <div (click)=\"showProfile(0)\" class=\"chart-container\">\n            <nz-progress\n              [nzStrokeWidth]=\"10\"\n              [nzPercent]=\"percentDoneProfile\"\n              nzType=\"circle\"\n              nzStrokeLinecap=\"square\"\n              [nzFormat]=\"formatInfoProgress\"\n            >\n            </nz-progress>\n          </div>\n          <a class=\"name-title\">{{\n            currentUser?.lastName + currentUser?.firstName\n          }}</a>\n          <p class=\"email\">{{ currentUser?.email }}</p>\n          <p class=\"job-function\">\n            <a (click)=\"showProfile(0)\">\n              {{ currentUser?.jobRoleView }}\n            </a>\n            {{ \"default.layout.AT\" | translate }}\n            <a (click)=\"showProfile(1)\">\n              {{ currentUser?.organizationLocationView }}\n            </a>\n          </p>\n        </nz-card>\n      </div>\n      <div class=\"custom-card col-xs-12 col-md-4\">\n        <h2 class=\"pane-title\">\n          {{ \"default.layout.QUICK POLL\" | translate }}\n          <span class=\"smf-icon tooltip-trigger\">i</span>\n        </h2>\n        <nz-card class=\"poll-pane-box\">\n          <div class=\"question-form\">\n            <div class=\"question-text\">\n              Benchmarks add a ton of context to your results. How can you make\n              sure you’re taking advantage of them?\n            </div>\n            <ul class=\"question-choices\">\n              <li data-choice-id=\"11050115149\" class=\"\">\n                <span class=\"checkbox\"></span>\n                <span class=\"choice-text\">Write your own questions</span>\n              </li>\n              <li data-choice-id=\"11050115150\" class=\"\">\n                <span class=\"checkbox\"></span>\n                <span class=\"choice-text\"\n                  >Use expert-written survey templates</span\n                >\n              </li>\n              <li data-choice-id=\"11050115151\" class=\"\">\n                <span class=\"checkbox\"></span>\n                <span class=\"choice-text\"\n                  >Use questions with a Benchmark icon</span\n                >\n              </li>\n              <p class=\"disclaimer-text\">\n                <strong class=\"disclaimer-strong\">\n                  <i class=\"fa fa-question-circle\"></i>\n                </strong>\n                <strong class=\"disclaimer-strong\"> What is this?</strong>\n                We’re generally curious about all sorts of topics and like to\n                ask questions to gather data. Don’t worry, your personal data\n                will never be shared.\n                <a href=\"\" target=\"_blank\">Privacy Policy »</a>\n              </p>\n            </ul>\n          </div>\n        </nz-card>\n      </div>\n      <div class=\"custom-card col-xs-12 col-md-4\">\n        <div class=\"content-pane\">\n          <h2 class=\"pane-title\">\n            {{ \"default.layout.SURVEY TIPS\" | translate }}\n          </h2>\n          <div class=\"dw-pane-box\">\n            <div class=\"splash\"></div>\n            <div class=\"padded-content\">\n              <h3 class=\"headline\">Which collector is right for you?</h3>\n              <span class=\"byline\">By Deanna H.</span>\n              <p class=\"excerpt\">\n                Ready to send your survey? The type of collector you use depends\n                a lot on whom you’re targeting and why.\n              </p>\n              <div class=\"read-more-cta\">\n                Learn More <span class=\"notranslate\">»</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-page>\n\n<!-- Template content modal delele -->\n<ng-template #tplContentDeleteForm>\n  <div>\n    {{ \"default.layout.SURVEY_TITLE\" | translate }}:\n    {{ surveyFormDelete?.title }}\n  </div>\n  <div>\n    {{ \"default.layout.RESPONSES\" | translate }}:\n    {{ surveyFormDelete?.response }}\n  </div>\n  <div class=\"delete-modal-warning\" translate>\n    default.layout.THIS_IS_A_PERMANENT_ACTION_AND_CANNOT_BE_UNDONE.\n  </div>\n</ng-template>\n<!-- End Template content modal delele -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/pages/home/home.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [header]=\"header\" [title]=\"'Welcome to SurveyUet!'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <div class=\"pbt-12 col-sm-12 col-md-5\">\n            <button\n              nz-dropdown\n              nzTrigger=\"click\"\n              [nzDropdownMenu]=\"menuFolder\"\n              nz-button\n              class=\"select-folder\"\n              [nzSize]=\"'large'\"\n              nzType=\"default\"\n            >\n              {{ folderSelectTitle }}\n              <i class=\"icon\" nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n            </button>\n            <nz-dropdown-menu\n              nzPlacement=\"bottomRight\"\n              #menuFolder=\"nzDropdownMenu\"\n            >\n              <div class=\"folders-menu\">\n                <ul class=\"dropdown-folder-top\" nz-menu>\n                  <li nz-menu-item (click)=\"showSurveyInFolder('all')\">\n                    {{ \"default.layout.ALL\" | translate }}\n                    <i\n                      class=\"float-right\"\n                      *ngIf=\"folderSelectId === 'all'\"\n                      nz-icon\n                      nzType=\"check\"\n                      nzTheme=\"outline\"\n                    ></i>\n                  </li>\n                  <ng-container\n                    *ngFor=\"let surveyFolder of listOfAllSurveyFolder\"\n                  >\n                    <li\n                      nz-menu-item\n                      (click)=\"showSurveyInFolder(surveyFolder.id)\"\n                    >\n                      {{ surveyFolder.title }}\n                      <i\n                        class=\"float-right\"\n                        *ngIf=\"folderSelectId === surveyFolder.id\"\n                        nz-icon\n                        nzType=\"check\"\n                        nzTheme=\"outline\"\n                      ></i>\n                    </li>\n                  </ng-container>\n                </ul>\n                <div class=\"buttons\">\n                  <button\n                    (click)=\"openModal()\"\n                    nz-button\n                    [nzSize]=\"'large'\"\n                    nzType=\"default\"\n                  >\n                    {{\n                      \"default.layout.MANAGE_FOLDERS\" | translate | uppercase\n                    }}\n                  </button>\n                </div>\n              </div>\n            </nz-dropdown-menu>\n            <button\n              nz-button\n              (click)=\"onShowMoveToFolder()\"\n              [nzSize]=\"'large'\"\n              nzType=\"default\"\n            >\n              <i\n                class=\"icon-folder\"\n                nz-icon\n                [nzType]=\"showMoveToFolder ? 'folder-open' : 'folder'\"\n                nzTheme=\"outline\"\n              ></i>\n            </button>\n          </div>\n          <div class=\"pbt-12 col-sm-12 col-md-offset-2 col-md-5\">\n            <nz-input-group [nzSize]=\"'large'\" [nzSuffix]=\"suffixIconSearch\">\n              <input\n                [(ngModel)]=\"searchValue\"\n                (keyup.enter)=\"search()\"\n                type=\"text\"\n                nz-input\n                placeholder=\"Search by survey name\"\n              />\n            </nz-input-group>\n            <ng-template #suffixIconSearch>\n              <i nz-icon nzType=\"search\"></i>\n            </ng-template>\n          </div>\n        </div>\n        <div nz-row>\n          <div class=\"col-sm-12\">\n            <nz-table\n              #userTable\n              nzShowPagination\n              nzShowSizeChanger\n              [nzData]=\"listOfAllSurveyForm\"\n              [nzPageSize]=\"pagging.pageSize\"\n              [nzTotal]=\"pagging.total\"\n              [nzFrontPagination]=\"false\"\n              (nzPageIndexChange)=\"pageIndexChange($event)\"\n              (nzPageSizeChange)=\"pageSizeChange($event)\"\n              [nzBordered]=\"true\"\n              [nzTitle]=\"titleTemplate\"\n            >\n              <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n                <tr *ngIf=\"columns.length > 0\">\n                  <th>\n                    {{ \"default.layout.TABLE_NO\" | translate | uppercase }}\n                  </th>\n                  <th\n                    *ngIf=\"showMoveToFolder\"\n                    nzShowCheckbox\n                    [(nzChecked)]=\"isAllDisplayDataChecked\"\n                    (nzCheckedChange)=\"checkAll($event)\"\n                    [nzIndeterminate]=\"isIndeterminate\"\n                  ></th>\n                  <ng-container *ngIf=\"showMoveToFolder\">\n                    <th [nzAlign]=\"'left'\" colspan=\"8\">\n                      <button\n                        nz-dropdown\n                        nzTrigger=\"click\"\n                        [nzDropdownMenu]=\"menuMoveToFolder\"\n                        [nzDisabled]=\"numberOfChecked <= 0\"\n                        nz-button\n                        nzType=\"dashed\"\n                      >\n                        Move to...\n                        <i nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n                      </button>\n                      <nz-dropdown-menu\n                        class=\"move-to-menu\"\n                        nzPlacement=\"bottomRight\"\n                        #menuMoveToFolder=\"nzDropdownMenu\"\n                      >\n                        <ul\n                          id=\"#move-to-menu\"\n                          class=\"dropdown-folder-top\"\n                          nz-menu\n                        >\n                          <ng-container\n                            *ngFor=\"let surveyFolder of listOfAllSurveyFolder\"\n                          >\n                            <li\n                              nz-menu-item\n                              (click)=\"onMoveSurveyToFolder(surveyFolder.id)\"\n                            >\n                              {{ surveyFolder.title }}\n                              <span class=\"float-right\">{{\n                                surveyFolder.totalForm\n                              }}</span>\n                            </li>\n                          </ng-container>\n                        </ul>\n                        <div *ngIf=\"!newFolder\" class=\"buttons\">\n                          <button\n                            (click)=\"updateNewFolder(true)\"\n                            nz-button\n                            nzType=\"default\"\n                            class=\"secondary\"\n                          >\n                            +\n                            {{\n                              \"default.layout.NEW_FOLDERS\"\n                                | translate\n                                | uppercase\n                            }}\n                          </button>\n                        </div>\n                        <div *ngIf=\"newFolder\" class=\"add-folder-form\">\n                          <form [formGroup]=\"addFolderForm\">\n                            <input\n                              formControlName=\"title\"\n                              nz-input\n                              class=\"folder-name\"\n                            />\n                            <field-error-display\n                              [displayError]=\"\n                                isFieldValid(addFolderForm, 'title')\n                              \"\n                              [errors]=\"f.title.errors\"\n                            ></field-error-display>\n                            <div>\n                              <button\n                                (click)=\"onAddNewFolder(addFolderForm)\"\n                                nz-button\n                                nzType=\"primary\"\n                              >\n                                {{\n                                  \"default.layout.SAVE_AND_MOVE\"\n                                    | translate\n                                    | uppercase\n                                }}\n                              </button>\n                              <button\n                                (click)=\"updateNewFolder(false)\"\n                                nz-button\n                                nzType=\"default\"\n                              >\n                                {{\n                                  \"default.layout.CANCEL\"\n                                    | translate\n                                    | uppercase\n                                }}\n                              </button>\n                            </div>\n                          </form>\n                        </div>\n                      </nz-dropdown-menu>\n                    </th>\n                  </ng-container>\n                  <ng-container *ngIf=\"!showMoveToFolder\">\n                    <ng-container *ngFor=\"let column of columns\">\n                      <th\n                        [nzAlign]=\"'center'\"\n                        nzCustomFilter\n                        *ngIf=\"!column.hidden\"\n                        [nzShowSort]=\"column.sortable\"\n                        [nzSortKey]=\"column.id\"\n                        [nzShowFilter]=\"column.filter\"\n                        [nzFilters]=\"column.filter ? column.filter : []\"\n                        (nzFilterChange)=\"\n                          filter($event, column.filterKey || column.id)\n                        \"\n                      >\n                        {{ column.header | translate | uppercase }}\n                        <i\n                          *ngIf=\"column.search\"\n                          class=\"ant-table-filter-icon\"\n                          nz-icon\n                          nz-dropdown\n                          #dropdown=\"nzDropdown\"\n                          nzType=\"search\"\n                          [nzDropdownMenu]=\"menuSearch\"\n                          [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                          nzTrigger=\"click\"\n                          nzPlacement=\"bottomRight\"\n                          [nzClickHide]=\"false\"\n                          nzTableFilter\n                          (click)=\"searchKey = column.id\"\n                        >\n                        </i>\n                      </th>\n                    </ng-container>\n                  </ng-container>\n                  <th *ngIf=\"!showMoveToFolder\" [nzAlign]=\"'center'\">\n                    {{ \"default.layout.MORE\" | translate | uppercase }}\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of userTable.data; let i = index\">\n                  <td>{{ i + 1 }}</td>\n                  <td\n                    *ngIf=\"showMoveToFolder\"\n                    nzShowCheckbox\n                    [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                    [nzDisabled]=\"data.disabled\"\n                    (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                  ></td>\n                  <ng-container *ngFor=\"let column of columns\">\n                    <td\n                      [nzAlign]=\"'center'\"\n                      [ngClass]=\"column.className\"\n                      *ngIf=\"!column.hidden\"\n                    >\n                      <ng-container [ngSwitch]=\"column.type\">\n                        <ng-container *ngSwitchCase=\"'text'\">\n                          <div\n                            *ngIf=\"data[column.id]?.length > 40\"\n                            [nzTooltipTitle]=\"data[column.id]\"\n                            nzTooltipPlacement=\"top\"\n                            nz-tooltip\n                          >\n                            <a\n                              *ngIf=\"column.action\"\n                              [routerLink]=\"column.action.link(data.id)\"\n                            >\n                              {{ data[column.id] | summary: 40 }}\n                            </a>\n                            <ng-container *ngIf=\"!column.action\">\n                              {{ data[column.id] | summary: 40 }}\n                            </ng-container>\n                          </div>\n                          <div *ngIf=\"data[column.id]?.length <= 40\">\n                            <a\n                              *ngIf=\"column.action\"\n                              [routerLink]=\"column.action.link(data.id)\"\n                            >\n                              {{ data[column.id] }}\n                            </a>\n                            <ng-container *ngIf=\"!column.action\">\n                              {{ data[column.id] }}\n                            </ng-container>\n                          </div>\n                          <div *ngIf=\"column.td_two\">\n                            {{ \"default.layout.CREATED\" | translate }}\n                            {{ data[column.td_two] | date: \"yyyy-MM-dd\" }}\n                          </div>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'date'\">\n                          <i\n                            nz-icon\n                            nzType=\"clock-circle\"\n                            nzTheme=\"outline\"\n                          ></i>\n                          {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'action'\">\n                          <span class=\"action-icon\">\n                            <a [routerLink]=\"column.action.link(data.id)\">\n                              <i\n                                nz-icon\n                                [nzType]=\"column?.action?.icon\"\n                                nzTheme=\"outline\"\n                              ></i>\n                            </a>\n                          </span>\n                        </ng-container>\n                      </ng-container>\n                    </td>\n                  </ng-container>\n                  <td [nzAlign]=\"'center'\">\n                    <a\n                      [nzTrigger]=\"'click'\"\n                      [nzDropdownMenu]=\"menuAction\"\n                      [nzPlacement]=\"'bottomCenter'\"\n                      nz-dropdown\n                    >\n                      <i\n                        nz-icon\n                        nzType=\"ellipsis\"\n                        nzTheme=\"outline\"\n                        class=\"icon-action\"\n                      ></i>\n                    </a>\n                    <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                      <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                        <li\n                          (click)=\"\n                            onShowModalSendCopyTransfer(data, 'SEND_COPY')\n                          \"\n                          nz-menu-item\n                        >\n                          <i class=\"fa fa-share\"></i>&nbsp;\n                          {{ \"default.layout.SEND_A_COPY\" | translate }}\n                        </li>\n                        <li\n                          (click)=\"\n                            onShowModalSendCopyTransfer(data, 'TRANSFER')\n                          \"\n                          nz-menu-item\n                        >\n                          <i class=\"fa fa-paper-plane\"></i>&nbsp;\n                          {{ \"default.layout.TRANSFER\" | translate }}\n                        </li>\n                        <li (click)=\"onMakeCopy(data)\" nz-menu-item>\n                          <i nz-icon nzType=\"copy\" nzTheme=\"outline\"></i>\n                          {{ \"default.layout.MAKE_A_COPY\" | translate }}\n                        </li>\n                        <li\n                          (click)=\"\n                            showClearResponsesConfirm(\n                              data,\n                              tplContentClearResponsesForm\n                            )\n                          \"\n                          nz-menu-item\n                        >\n                          <i\n                            nz-icon\n                            nzType=\"close-circle\"\n                            nzTheme=\"outline\"\n                          ></i>\n                          {{ \"default.layout.CLEAR_RESPONSES\" | translate }}\n                        </li>\n                        <li\n                          (click)=\"\n                            showDeleteConfirm(data, tplContentDeleteForm)\n                          \"\n                          nz-menu-item\n                        >\n                          <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                          {{ \"default.layout.DELETE\" | translate }}\n                        </li>\n                      </ul>\n                    </nz-dropdown-menu>\n                  </td>\n                </tr>\n              </tbody>\n            </nz-table>\n            <div class=\"buttons-ctnr\">\n              <button\n                [routerLink]=\"['/create-survey']\"\n                nz-button\n                nzType=\"primary\"\n              >\n                {{ \"header.sidebar.CREATE_SURVEY\" | translate | uppercase }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n\n<!-- Template content modal delele -->\n<ng-template #tplContentDeleteForm>\n  <div>\n    {{ \"default.layout.SURVEY_TITLE\" | translate }}:\n    {{ surveyFormDelete?.title }}\n  </div>\n  <div>\n    {{ \"default.layout.RESPONSES\" | translate }}:\n    {{ surveyFormDelete?.response }}\n  </div>\n  <div class=\"delete-modal-warning\" translate>\n    default.layout.THIS_IS_A_PERMANENT_ACTION_AND_CANNOT_BE_UNDONE.\n  </div>\n</ng-template>\n<!-- End Template content modal delele -->\n\n<!-- Template content modal clear response -->\n<ng-template #tplContentClearResponsesForm>\n  <div>\n    {{ \"default.layout.TITLE\" | translate }}:\n    {{ surveyFormClearResponses?.title }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_CREATED\" | translate }}:\n    {{ surveyFormClearResponses?.createdAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_MODIFIED\" | translate }}:\n    {{ surveyFormClearResponses?.updatedAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.NUMBER_OF_RESPONSES\" | translate }}:\n    {{ surveyFormClearResponses?.response }}\n  </div>\n</ng-template>\n<!-- End Template content modal clear response -->\n"

/***/ }),

/***/ "./src/app/modules/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/modules/default/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/default/pages/home/home.component.ts");
/* harmony import */ var _modules_create_form_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/create-form/layout/layout.component */ "./src/app/modules/default/modules/create-form/layout/layout.component.ts");
/* harmony import */ var _default_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default.routing */ "./src/app/modules/default/default.routing.ts");
/* harmony import */ var _pages_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/create-survey/create-survey.component */ "./src/app/modules/default/pages/create-survey/create-survey.component.ts");
/* harmony import */ var _pages_create_survey_components_past_survey_past_survey_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/create-survey/components/past-survey/past-survey.component */ "./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.ts");
/* harmony import */ var _pages_create_survey_components_template_survey_template_survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/create-survey/components/template-survey/template-survey.component */ "./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.ts");
/* harmony import */ var _pages_create_survey_components_grid_survey_grid_survey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/create-survey/components/grid-survey/grid-survey.component */ "./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.ts");
/* harmony import */ var _pages_create_survey_components_list_survey_list_survey_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create-survey/components/list-survey/list-survey.component */ "./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.ts");












var COMPONENTS = [
    _modules_create_form_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    _pages_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_7__["CreateSurveyComponent"],
    _pages_create_survey_components_past_survey_past_survey_component__WEBPACK_IMPORTED_MODULE_8__["PastSurveyComponent"],
    _pages_create_survey_components_template_survey_template_survey_component__WEBPACK_IMPORTED_MODULE_9__["TemplateSurveyComponent"],
    _pages_create_survey_components_grid_survey_grid_survey_component__WEBPACK_IMPORTED_MODULE_10__["GridSurveyComponent"],
    _pages_create_survey_components_list_survey_list_survey_component__WEBPACK_IMPORTED_MODULE_11__["ListSurveyComponent"]
];
var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _default_routing__WEBPACK_IMPORTED_MODULE_6__["DefaultRouting"]],
            declarations: COMPONENTS.slice()
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/app/modules/default/default.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/default/default.routing.ts ***!
  \****************************************************/
/*! exports provided: DefaultRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRouting", function() { return DefaultRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/modules/default/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/default/pages/home/home.component.ts");
/* harmony import */ var _modules_create_form_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/create-form/layout/layout.component */ "./src/app/modules/default/modules/create-form/layout/layout.component.ts");
/* harmony import */ var _pages_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-survey/create-survey.component */ "./src/app/modules/default/pages/create-survey/create-survey.component.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");








var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_7__["extract"])("Welcome to SurveyMonkey!") }
    },
    {
        path: "home",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_7__["extract"])("Welcome to SurveyMonkey!") }
    },
    {
        path: "create-survey",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _pages_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_6__["CreateSurveyComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_7__["extract"])("UetSurvey - New Survey") }
    },
    {
        path: "create",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _modules_create_form_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | modules-create-form-create-form-module */ "modules-create-form-create-form-module").then(__webpack_require__.bind(null, /*! ./modules/create-form/create-form.module */ "./src/app/modules/default/modules/create-form/create-form.module.ts")).then(function (m) { return m.CreateFormModule; });
        }
    }
];
var DefaultRouting = /** @class */ (function () {
    function DefaultRouting() {
    }
    DefaultRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefaultRouting);
    return DefaultRouting;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/layout/layout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/layout/layout.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nh2,\nul {\n  margin: 0 !important;\n}\n.global-navigation-header {\n  position: relative;\n  font-weight: normal;\n  background-color: #fff;\n}\n.global-navigation-header::after {\n  position: absolute;\n  left: 0;\n  right: 0;\n  content: \"\";\n  height: 1px;\n  bottom: 0;\n  background: #d0d2d3;\n}\n.global-navigation-header-centered {\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 0 24px;\n  position: relative;\n  box-sizing: border-box;\n}\n.global-navigation-header-title-container {\n  display: block;\n  padding-top: 24px;\n  padding-bottom: 12px;\n  position: relative;\n}\n.global-navigation-header-title-container::before {\n  position: absolute;\n  left: 0;\n  right: 0;\n  content: \"\";\n  height: 1px;\n  bottom: -2px;\n  background: #edeeee;\n  z-index: 3;\n}\n.global-navigation-header-title {\n  display: block;\n  white-space: nowrap;\n  font-size: 26px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  vertical-align: bottom;\n  cursor: pointer;\n}\n.global-navigation-header-tabs-container {\n  background: #fff;\n  border-bottom: 1px solid transparent !important;\n  border-top: 1px solid transparent !important;\n}\n.global-navigation-header-tabs-left {\n  float: left;\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.global-navigation-header-tabs-left .selected a {\n  color: #00bf6f !important;\n  border-bottom: 3px solid #00bf6f !important;\n}\n.global-navigation-header-tabs-left a {\n  color: #333e48;\n  font-weight: 500;\n  text-decoration: none;\n  display: inline-block;\n  padding: 16px 2px;\n  box-sizing: border-box;\n  transition: color 100ms linear;\n  background-color: #fff;\n}\n.global-navigation-header-tabs-left li {\n  display: inline-block;\n  margin-right: 16px;\n}\n.global-navigation-header-tabs-left li.progressive:not(:last-child)::after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-weight: normal;\n  font-size: 12px;\n  display: inline-block;\n  color: #dadad8;\n  vertical-align: middle;\n  margin-left: 8px;\n  margin-right: -8px;\n}\n.global-navigation-header-tabs-left li.progressive:not(.selected):hover {\n  border-bottom: 3px solid #d0d2d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjs7RUFFRSxvQkFBQTtBRENGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURFRjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FER0o7QUNBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0FER0Y7QUNEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURJRjtBQ0hFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBREtKO0FDRkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QURLRjtBQ0hBO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRDQUFBO0FETUY7QUNKQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRE9GO0FDTEk7RUFDRSx5QkFBQTtFQUNBLDJDQUFBO0FET047QUNKRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRE1KO0FDSkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FETUo7QUNMSTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRE9OO0FDTEk7RUFDRSxnQ0FBQTtBRE9OIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmgyLFxudWwge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2QwZDJkMztcbn1cblxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci1jZW50ZXJlZCB7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZ2xvYmFsLW5hdmlnYXRpb24taGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXItdGl0bGUtY29udGFpbmVyOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgYm90dG9tOiAtMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xuICB6LWluZGV4OiAzO1xufVxuXG4uZ2xvYmFsLW5hdmlnYXRpb24taGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci10YWJzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci10YWJzLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2xvYmFsLW5hdmlnYXRpb24taGVhZGVyLXRhYnMtbGVmdCAuc2VsZWN0ZWQgYSB7XG4gIGNvbG9yOiAjMDBiZjZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBiZjZmICFpbXBvcnRhbnQ7XG59XG4uZ2xvYmFsLW5hdmlnYXRpb24taGVhZGVyLXRhYnMtbGVmdCBhIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxNnB4IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci10YWJzLWxlZnQgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXItdGFicy1sZWZ0IGxpLnByb2dyZXNzaXZlOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCLvhbhcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNkYWRhZDg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXItdGFicy1sZWZ0IGxpLnByb2dyZXNzaXZlOm5vdCguc2VsZWN0ZWQpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkMGQyZDM7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuaDIsXG51bCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNkMGQyZDM7XG4gIH1cbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXItY2VudGVyZWQge1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5nbG9iYWwtbmF2aWdhdGlvbi1oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJhY2tncm91bmQ6ICNlZGVlZWU7XG4gICAgei1pbmRleDogMztcbiAgfVxufVxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2xvYmFsLW5hdmlnYXRpb24taGVhZGVyLXRhYnMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmdsb2JhbC1uYXZpZ2F0aW9uLWhlYWRlci10YWJzLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5zZWxlY3RlZCB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNnB4IDJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICYucHJvZ3Jlc3NpdmU6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcXGYxNzhcIjtcbiAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjb2xvcjogI2RhZGFkODtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICAgIH1cbiAgICAmLnByb2dyZXNzaXZlOm5vdCguc2VsZWN0ZWQpOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZDBkMmQzO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/layout/layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/layout/layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");








var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(activatedRoute, nzMessageService, translateService, formBuilder, loaderService, dSurveyFormService, router) {
        this.activatedRoute = activatedRoute;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.formBuilder = formBuilder;
        this.loaderService = loaderService;
        this.dSurveyFormService = dSurveyFormService;
        this.router = router;
        this.visibleNzDrawer = false;
        this.buttonLoading = false;
        this.subscriptions = [];
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.subscriptions.push(this.activatedRoute.children[0].params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
        }));
    };
    LayoutComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_5__["IValidators"].spaceStringValidator()]],
            description: [""]
        });
    };
    Object.defineProperty(LayoutComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    LayoutComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.patchForm();
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    LayoutComponent.prototype.patchForm = function () {
        if (!this.surveyFormDetail) {
            return;
        }
        this.form.patchValue({
            title: this.surveyFormDetail.title,
            description: this.surveyFormDetail.description
        });
    };
    LayoutComponent.prototype.setStateNzDrawer = function (value) {
        this.visibleNzDrawer = value;
    };
    LayoutComponent.prototype.onSurveySaved = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_7__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.buttonLoading = true;
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_7__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        return this.dSurveyFormService
            .updateSurveyForm(formData.value, this.surveyFormDetail.id)
            .subscribe(function (res) {
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.buttonLoading = false;
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.buttonLoading = false;
            _this.loaderService.display(false);
        });
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_5__["DSurveyFormService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], LayoutComponent.prototype, "formDirective", void 0);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-layout",
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/modules/default/modules/create-form/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _app_shared__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["DSurveyFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9wYWdlcy9jcmVhdGUtc3VydmV5L2NvbXBvbmVudHMvZ3JpZC1zdXJ2ZXkvZ3JpZC1zdXJ2ZXkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GridSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSurveyComponent", function() { return GridSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var GridSurveyComponent = /** @class */ (function () {
    function GridSurveyComponent(dSurveyFormService, nzMessageService, translateService, loaderService) {
        this.dSurveyFormService = dSurveyFormService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.emptyDescription = "default.layout.NO_RECENT_SURVEYS_FOUND";
        this.listOfAllData = [];
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GridSurveyComponent.prototype.ngOnInit = function () { };
    GridSurveyComponent.prototype.countQuestionSurvey = function (json) {
        var defaultValue = 0;
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        try {
            json.pages.forEach(function (o) {
                if (o.elements && Array.isArray(o.elements)) {
                    total += o.elements.length;
                }
            });
        }
        catch (error) {
            return defaultValue;
        }
        return total >= defaultValue ? total : defaultValue;
    };
    GridSurveyComponent.prototype.loadMoreSurvey = function () {
        this.pagging.page += 1;
        this.loadMore.emit({
            pagging: this.pagging,
            filter: this.filter,
            listOfData: this.listOfAllData
        });
    };
    GridSurveyComponent.prototype.onUpdateFavorite = function (surveyId) {
        var _this = this;
        var survey;
        survey = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.listOfAllData, function (o) {
            return o.id === surveyId;
        });
        survey.isFavorite = survey.isFavorite ? !survey.isFavorite : true;
        if (!survey) {
            return;
        }
        this.loaderService.display(true);
        return this.dSurveyFormService
            .updateSurveyForm(survey, survey.id)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(_this.translateService.instant(res.status.message)));
                _this.loaderService.display(false);
            }
        }, function (err) {
            _this.nzMessageService.error(_this.translateService.instant(err.message));
            _this.loaderService.display(false);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    GridSurveyComponent.prototype.onPreviewCopy = function (survey) {
        if (survey) {
            this.previewSurvey.emit(survey);
        }
    };
    GridSurveyComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("emptyDescription"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridSurveyComponent.prototype, "emptyDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("listOfAllData"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GridSurveyComponent.prototype, "listOfAllData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pagging"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridSurveyComponent.prototype, "pagging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("filter"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridSurveyComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("loadMore"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridSurveyComponent.prototype, "loadMore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("previewSurvey"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridSurveyComponent.prototype, "previewSurvey", void 0);
    GridSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-grid-survey",
            template: __webpack_require__(/*! raw-loader!./grid-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.html"),
            styles: [__webpack_require__(/*! ./grid-survey.component.scss */ "./src/app/modules/default/pages/create-survey/components/grid-survey/grid-survey.component.scss"), __webpack_require__(/*! ./../../styles/style.scss */ "./src/app/modules/default/pages/create-survey/styles/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], GridSurveyComponent);
    return GridSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wds-type-section-title i {\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-size: 20px !important;\n  font-weight: 500 !important;\n}\n\n.sm-survey-card-preview {\n  display: none;\n  border-left: 0 !important;\n}\n\n.sm-survey-card-preview:hover .wds-type-section-title i {\n  color: #00bf6f !important;\n}\n\n.sm-survey-card-preview:hover .wds-type-body-sm {\n  color: #00bf6f !important;\n}\n\n.sm-base-list-item-inner:hover {\n  border: 1px solid #00bf6f;\n}\n\n.sm-base-list-item-inner:hover .sm-survey-card-actions > * {\n  display: none;\n}\n\n.sm-base-list-item-inner:hover .sm-survey-card-preview {\n  text-align: center;\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jb21wb25lbnRzL2xpc3Qtc3VydmV5L2xpc3Qtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jb21wb25lbnRzL2xpc3Qtc3VydmV5L2xpc3Qtc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREtFO0VBQ0UseUJBQUE7QUNGSjs7QURJRTtFQUNFLHlCQUFBO0FDRko7O0FETUU7RUFDRSx5QkFBQTtBQ0hKOztBRElJO0VBQ0UsYUFBQTtBQ0ZOOztBRElJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L3BhZ2VzL2NyZWF0ZS1zdXJ2ZXkvY29tcG9uZW50cy9saXN0LXN1cnZleS9saXN0LXN1cnZleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLndkcy10eXBlLXNlY3Rpb24tdGl0bGUge1xuICBpIHtcbiAgICBjb2xvcjogIzMzM2U0ODtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zbS1zdXJ2ZXktY2FyZC1wcmV2aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5zbS1zdXJ2ZXktY2FyZC1wcmV2aWV3OmhvdmVyIHtcbiAgLndkcy10eXBlLXNlY3Rpb24tdGl0bGUgaSB7XG4gICAgY29sb3I6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xuICB9XG4gIC53ZHMtdHlwZS1ib2R5LXNtIHtcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zbS1iYXNlLWxpc3QtaXRlbS1pbm5lciB7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcbiAgICAuc20tc3VydmV5LWNhcmQtYWN0aW9ucyA+ICoge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNtLXN1cnZleS1jYXJkLXByZXZpZXcge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi53ZHMtdHlwZS1zZWN0aW9uLXRpdGxlIGkge1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uc20tc3VydmV5LWNhcmQtcHJldmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zbS1zdXJ2ZXktY2FyZC1wcmV2aWV3OmhvdmVyIC53ZHMtdHlwZS1zZWN0aW9uLXRpdGxlIGkge1xuICBjb2xvcjogIzAwYmY2ZiAhaW1wb3J0YW50O1xufVxuLnNtLXN1cnZleS1jYXJkLXByZXZpZXc6aG92ZXIgLndkcy10eXBlLWJvZHktc20ge1xuICBjb2xvcjogIzAwYmY2ZiAhaW1wb3J0YW50O1xufVxuXG4uc20tYmFzZS1saXN0LWl0ZW0taW5uZXI6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiZjZmO1xufVxuLnNtLWJhc2UtbGlzdC1pdGVtLWlubmVyOmhvdmVyIC5zbS1zdXJ2ZXktY2FyZC1hY3Rpb25zID4gKiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc20tYmFzZS1saXN0LWl0ZW0taW5uZXI6aG92ZXIgLnNtLXN1cnZleS1jYXJkLXByZXZpZXcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSurveyComponent", function() { return ListSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var ListSurveyComponent = /** @class */ (function () {
    function ListSurveyComponent(dSurveyFormService, nzMessageService, translateService, loaderService) {
        this.dSurveyFormService = dSurveyFormService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.emptyDescription = "default.layout.NO_RECENT_SURVEYS_FOUND";
        this.listOfAllData = [];
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListSurveyComponent.prototype.ngOnInit = function () { };
    ListSurveyComponent.prototype.countQuestionSurvey = function (json) {
        var defaultValue = 0;
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        try {
            json.pages.forEach(function (o) {
                if (o.elements && Array.isArray(o.elements)) {
                    total += o.elements.length;
                }
            });
        }
        catch (error) {
            return defaultValue;
        }
        return total >= defaultValue ? total : defaultValue;
    };
    ListSurveyComponent.prototype.loadMoreSurvey = function () {
        this.pagging.page += 1;
        this.loadMore.emit({
            pagging: this.pagging,
            filter: this.filter,
            listOfData: this.listOfAllData
        });
    };
    ListSurveyComponent.prototype.onUpdateFavorite = function (surveyId) {
        var _this = this;
        var survey;
        survey = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.listOfAllData, function (o) {
            return o.id === surveyId;
        });
        survey.isFavorite = survey.isFavorite ? !survey.isFavorite : true;
        if (!survey) {
            return;
        }
        this.loaderService.display(true);
        return this.dSurveyFormService
            .updateSurveyForm(survey, survey.id)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(_this.translateService.instant(res.status.message)));
                _this.loaderService.display(false);
            }
        }, function (err) {
            _this.nzMessageService.error(_this.translateService.instant(err.message));
            _this.loaderService.display(false);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    ListSurveyComponent.prototype.calculateTimeComplete = function (json) {
        var defaultValue = "—";
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        var questions = 0;
        var decisions = 0;
        var openQuestions = [
            "comment",
            "text",
            "tagbox",
            "sortablelist",
            "html",
            "multipletext"
        ];
        json.pages.forEach(function (o) {
            if (o.elements && Array.isArray(o.elements)) {
                questions += o.elements.length;
                total += o.elements.length * 5;
                o.elements.forEach(function (element) {
                    total += element.name.split(" ").length / 5;
                    if (openQuestions.includes(element.type)) {
                        total += 15;
                    }
                    if (element.choices) {
                        decisions += element.choices.length;
                    }
                    if (element.columns) {
                        decisions += element.columns.length;
                    }
                    if (element.items) {
                        decisions += element.items.length;
                    }
                });
            }
        });
        total += (decisions - questions) * 2;
        return (total / 60).toFixed(2) + " min";
    };
    ListSurveyComponent.prototype.onPreviewCopy = function (survey) {
        if (survey) {
            this.previewSurvey.emit(survey);
        }
    };
    ListSurveyComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("emptyDescription"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListSurveyComponent.prototype, "emptyDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("listOfAllData"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListSurveyComponent.prototype, "listOfAllData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pagging"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListSurveyComponent.prototype, "pagging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("filter"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListSurveyComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("loadMore"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListSurveyComponent.prototype, "loadMore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("previewSurvey"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListSurveyComponent.prototype, "previewSurvey", void 0);
    ListSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-list-survey",
            template: __webpack_require__(/*! raw-loader!./list-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.html"),
            styles: [__webpack_require__(/*! ./list-survey.component.scss */ "./src/app/modules/default/pages/create-survey/components/list-survey/list-survey.component.scss"), __webpack_require__(/*! ./../../styles/style.scss */ "./src/app/modules/default/pages/create-survey/styles/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ListSurveyComponent);
    return ListSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .modal-preview-copy-survey {\n  width: 100% !important;\n  height: 100% !important;\n  top: 0 !important;\n  margin: 0;\n  padding: 0;\n}\n::ng-deep .modal-preview-copy-survey .ant-modal-content {\n  height: 100% !important;\n  border-radius: 0;\n}\n::ng-deep .modal-preview-copy-survey .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n}\n::ng-deep .modal-preview-copy-survey .ant-modal-header {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jb21wb25lbnRzL3Bhc3Qtc3VydmV5L3Bhc3Qtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jb21wb25lbnRzL3Bhc3Qtc3VydmV5L3Bhc3Qtc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0FDRUo7QURBRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jb21wb25lbnRzL3Bhc3Qtc3VydmV5L3Bhc3Qtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tb2RhbC1wcmV2aWV3LWNvcHktc3VydmV5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC5hbnQtbW9kYWwtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuYW50LW1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC1tb2RhbC1oZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbiIsIjo6bmctZGVlcCAubW9kYWwtcHJldmlldy1jb3B5LXN1cnZleSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5tb2RhbC1wcmV2aWV3LWNvcHktc3VydmV5IC5hbnQtbW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOjpuZy1kZWVwIC5tb2RhbC1wcmV2aWV3LWNvcHktc3VydmV5IC5hbnQtbW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tb2RhbC1wcmV2aWV3LWNvcHktc3VydmV5IC5hbnQtbW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PastSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastSurveyComponent", function() { return PastSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_modals_preview_copy_preview_copy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/modals/preview-copy/preview-copy.component */ "./src/app/shared/modals/preview-copy/preview-copy.component.ts");







var PastSurveyComponent = /** @class */ (function () {
    function PastSurveyComponent(dSurveyFormService, nzMessageService, translateService, loaderService, modalService) {
        this.dSurveyFormService = dSurveyFormService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.searchValue = "";
        this.currentTab = "all";
        this.viewType = "grid";
        this.listOfRecentData = [];
        this.listOfAllData = [];
        this.listOfFavoriteData = [];
        this.listOfSearchData = [];
        this.folderSelectId = "all";
        this.filterAll = {
            sortField: "createdAt",
            sortType: "desc",
            searchKey: "title",
            searchValue: ""
        };
        this.filterRecent = {
            sortField: "updatedAt",
            sortType: "desc",
            searchKey: "title",
            searchValue: ""
        };
        this.filterFavorite = {
            sortField: "updatedAt",
            sortType: "desc",
            searchKey: "title",
            searchValue: "",
            filterKey: "isFavorite",
            filterValue: [true]
        };
        this.filterSearch = {
            sortField: "createdAt",
            sortType: "desc",
            searchKey: "title",
            searchValue: ""
        };
        this.paggingAll = { page: 1, total: 0, pageSize: 8 };
        this.paggingRecent = { page: 1, total: 0, pageSize: 4 };
        this.paggingFavorite = { page: 1, total: 0, pageSize: 4 };
        this.paggingSearch = { page: 1, total: 0, pageSize: 4 };
        this.searching = false;
    }
    PastSurveyComponent.prototype.ngOnInit = function () {
        this.getDataForPageAll();
    };
    PastSurveyComponent.prototype.ngOnChanges = function (changes) {
        this.listOfSearchData = [];
        this.searching = false;
        if (changes.searchValue &&
            changes.searchValue.currentValue &&
            changes.searchValue.currentValue !== "") {
            this.filterSearch.searchValue = changes.searchValue.currentValue;
            this.searching = true;
            this.getListSurvey(this.paggingSearch, this.listOfSearchData, this.filterSearch);
        }
    };
    PastSurveyComponent.prototype.getDataForPageAll = function () {
        this.listOfAllData = [];
        this.listOfRecentData = [];
        this.paggingAll.page = 1;
        this.paggingRecent.page = 1;
        this.getListSurvey(this.paggingAll, this.listOfAllData, this.filterAll);
        this.getListSurvey(this.paggingRecent, this.listOfRecentData, this.filterRecent);
    };
    PastSurveyComponent.prototype.getDataForPageFavorite = function () {
        this.listOfFavoriteData = [];
        this.paggingFavorite.page = 1;
        this.getListSurvey(this.paggingFavorite, this.listOfFavoriteData, this.filterFavorite);
    };
    PastSurveyComponent.prototype.getListSurvey = function (pagging, listOfData, filter) {
        var _this = this;
        this.loaderService.display(true);
        var countColumn = "response";
        this.dSurveyFormService
            .getDefaultSurveyFormList(pagging.page, pagging.pageSize, filter.sortField, filter.sortType, filter.searchKey, filter.searchValue || "", filter.filterKey || "", JSON.stringify(filter.filterValue || []), countColumn)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                res.results.forEach(function (o) {
                    listOfData.push(o);
                });
                pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    PastSurveyComponent.prototype.loadMore = function ($event) {
        this.getListSurvey($event.pagging, $event.listOfData, $event.filter);
    };
    PastSurveyComponent.prototype.onChangeTab = function (tab) {
        switch (tab) {
            case "all":
                this.getDataForPageAll();
                break;
            default:
                this.getDataForPageFavorite();
                break;
        }
        this.currentTab = tab;
    };
    PastSurveyComponent.prototype.onChangeViewType = function (type) {
        this.viewType = type;
    };
    PastSurveyComponent.prototype.openModalPreview = function (survey) {
        this.modalForm = this.modalService.create({
            nzTitle: null,
            nzFooter: null,
            nzContent: _app_shared_modals_preview_copy_preview_copy_component__WEBPACK_IMPORTED_MODULE_6__["PreviewCopyComponent"],
            nzCancelDisabled: true,
            nzClosable: false,
            nzClassName: "modal-preview-copy-survey",
            nzComponentParams: { surveyFormDetail: survey }
        });
    };
    PastSurveyComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("searchValue"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PastSurveyComponent.prototype, "searchValue", void 0);
    PastSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-past-survey",
            template: __webpack_require__(/*! raw-loader!./past-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.html"),
            styles: [__webpack_require__(/*! ./past-survey.component.scss */ "./src/app/modules/default/pages/create-survey/components/past-survey/past-survey.component.scss"), __webpack_require__(/*! ./../../styles/style.scss */ "./src/app/modules/default/pages/create-survey/styles/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]])
    ], PastSurveyComponent);
    return PastSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9wYWdlcy9jcmVhdGUtc3VydmV5L2NvbXBvbmVudHMvdGVtcGxhdGUtc3VydmV5L3RlbXBsYXRlLXN1cnZleS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TemplateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSurveyComponent", function() { return TemplateSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemplateSurveyComponent = /** @class */ (function () {
    function TemplateSurveyComponent() {
    }
    TemplateSurveyComponent.prototype.ngOnInit = function () { };
    TemplateSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-template-survey",
            template: __webpack_require__(/*! raw-loader!./template-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.html"),
            styles: [__webpack_require__(/*! ./template-survey.component.scss */ "./src/app/modules/default/pages/create-survey/components/template-survey/template-survey.component.scss"), __webpack_require__(/*! ./../../styles/style.scss */ "./src/app/modules/default/pages/create-survey/styles/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemplateSurveyComponent);
    return TemplateSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/create-survey.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/create-survey.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-past-survey,\napp-template-survey {\n  min-height: 100vh;\n  padding-bottom: 24px;\n}\n\n::ng-deep .modal-create-survey-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jcmVhdGUtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9jcmVhdGUtc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L3BhZ2VzL2NyZWF0ZS1zdXJ2ZXkvY3JlYXRlLXN1cnZleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wYXN0LXN1cnZleSxcbmFwcC10ZW1wbGF0ZS1zdXJ2ZXkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG46Om5nLWRlZXAgLm1vZGFsLWNyZWF0ZS1zdXJ2ZXktZGlhbG9nIHtcbiAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgfVxufVxuIiwiYXBwLXBhc3Qtc3VydmV5LFxuYXBwLXRlbXBsYXRlLXN1cnZleSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jcmVhdGUtc3VydmV5LWRpYWxvZyAuYW50LW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/create-survey.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/create-survey.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function() { return CreateSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared_modals_modal_create_survey_modal_create_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/modals/modal-create-survey/modal-create-survey.component */ "./src/app/shared/modals/modal-create-survey/modal-create-survey.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CreateSurveyComponent = /** @class */ (function () {
    function CreateSurveyComponent(modalService, translateService) {
        this.modalService = modalService;
        this.translateService = translateService;
        this.createType = "past";
    }
    CreateSurveyComponent.prototype.ngOnInit = function () { };
    CreateSurveyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.inputSearchPast.nativeElement, "keyup")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
            _this.searchPastValue = _this.inputSearchPast.nativeElement.value;
        }))
            .subscribe();
    };
    CreateSurveyComponent.prototype.changeCreateType = function (type) {
        this.createType = type;
    };
    CreateSurveyComponent.prototype.openModalScratch = function () {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.NAME_YOUR_SURVEY"),
            nzFooter: null,
            nzContent: _app_shared_modals_modal_create_survey_modal_create_survey_component__WEBPACK_IMPORTED_MODULE_3__["ModalCreateSurveyComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "modal-create-survey-dialog"
        });
    };
    CreateSurveyComponent.prototype.onSearchPastSurvey = function (value) {
        debugger;
    };
    CreateSurveyComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("inputSearchPast", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateSurveyComponent.prototype, "inputSearchPast", void 0);
    CreateSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-survey",
            template: __webpack_require__(/*! raw-loader!./create-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/create-survey/create-survey.component.html"),
            styles: [__webpack_require__(/*! ./create-survey.component.scss */ "./src/app/modules/default/pages/create-survey/create-survey.component.scss"), __webpack_require__(/*! ./styles/style.scss */ "./src/app/modules/default/pages/create-survey/styles/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], CreateSurveyComponent);
    return CreateSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/create-survey/styles/style.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/default/pages/create-survey/styles/style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sm-create-survey {\n  display: grid;\n  min-height: calc(100vh - 50px);\n  border-bottom: 1px solid #d0d2d3;\n}\n\n.grid-fluid {\n  max-width: none !important;\n}\n\n.type-center {\n  text-align: center;\n}\n\n.sm-get-started-button-bar {\n  background-color: #ffffff;\n  border-right: 1px solid #d0d2d3;\n  min-height: calc(100vh - 50px);\n  width: 320px;\n}\n\n.sm-get-started-button-bar .sm-get-started-button-bar-heading {\n  width: 245px;\n  margin: 0 auto;\n}\n\n.sm-get-started-button-bar .sm-get-started-button-bar-buttons {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 12px;\n  margin-top: 64px;\n}\n\n.sm-get-started-button-bar .sm-get-started-button-bar-buttons .sm-get-started-button-bar-button {\n  background: #fff;\n  color: #333e48;\n  border-color: transparent;\n  box-shadow: 0 5px 12px 0 rgba(32, 38, 42, 0.3);\n  justify-content: left;\n  width: 245px;\n  min-height: 74px;\n  outline: none;\n  text-align: left;\n}\n\n.sm-get-started-button-bar .sm-get-started-button-bar-buttons .sm-get-started-button-bar-button:hover, .sm-get-started-button-bar .sm-get-started-button-bar-buttons .sm-get-started-button-bar-button.selected {\n  background: #fff;\n  border-color: #00bf6f;\n}\n\n.sm-explore-main-container {\n  width: calc(100% - 320px);\n}\n\n.type-left {\n  text-align: left;\n}\n\n.sm-explore-templates-heading {\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 900px) {\n  .sm-get-started-button-bar {\n    width: 100%;\n    min-height: auto;\n    display: block !important;\n  }\n  .sm-get-started-button-bar .sm-get-started-button-bar-buttons {\n    margin-top: 24px !important;\n    position: static;\n  }\n  .sm-get-started-button-bar .sm-get-started-button-bar-buttons .sm-get-started-button-bar-button {\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n\n  .sm-explore-main-container {\n    width: 100%;\n    min-height: auto;\n    display: block !important;\n  }\n\n  .sm-explore-templates-heading {\n    flex-direction: column;\n  }\n}\n\n.sm-explore-gallery {\n  background: #f7f8fa;\n}\n\n.sm-my-surveys-tab-container {\n  background: #f7f8fa;\n  padding-bottom: 24px;\n}\n\n.sm-my-surveys-tab-action-buttons {\n  margin-bottom: 24px;\n  background: #f7f8fa;\n  padding: 24px 0 12px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  width: 100%;\n  top: 0;\n}\n\n.sm-my-surveys-tab-action-buttons-inner {\n  max-width: 924px;\n  padding: 0 24px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.wds-button-group {\n  display: inline-flex;\n  box-shadow: none;\n  border-radius: 2px;\n}\n\n.sm-my-surveys-tab-all-button {\n  min-width: 140px;\n  font-size: 15px;\n  height: 40px;\n}\n\n.sm-list-view-toggle-grid-button {\n  padding-left: 16px;\n  padding-right: 16px;\n  height: 40px;\n}\n\n.sm-list-view-toggle {\n  position: absolute;\n  top: 0;\n  right: 24px;\n  z-index: 1;\n}\n\n.sm-my-surveys-tab-row {\n  max-width: 924px;\n  padding: 0 24px;\n  margin: 0 auto;\n}\n\n.sm-survey-tile {\n  text-align: center;\n}\n\n.sm-base-tile {\n  display: block;\n  margin: 16px;\n  height: 140px;\n  width: 180px;\n  border: none;\n  background: transparent;\n  color: inherit;\n  float: left;\n  transition: all 0.2s ease-in-out;\n  transform: scale(1);\n  outline: none;\n}\n\n.sm-base-tile .sm-base-tile-container {\n  border: 1px solid transparent;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.sm-base-tile:hover {\n  transform: scale(1.05);\n}\n\n.sm-base-tile:hover .sm-base-tile-container {\n  border: 1px solid #d0d2d3;\n  box-shadow: 0 10px 20px 0 rgba(51, 62, 72, 0.19);\n}\n\n.sm-survey-tile-inner {\n  padding: 0;\n  background: #fff;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.sm-survey-tile-title {\n  height: 48px;\n  width: 180px;\n  position: absolute;\n  padding: 0 24px;\n  top: calc(50% - 24px);\n  word-break: break-word;\n  word-wrap: break-word;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.sm-survey-tile-details {\n  position: absolute;\n  bottom: 4px;\n  width: 100%;\n}\n\n.sm-survey-tile-badge-container {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  outline: none;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.sm-survey-tile-badge-favorite {\n  color: #f9be00;\n  opacity: 1;\n}\n\n.sm-all-templates-tab-container {\n  margin: 0;\n}\n\n.sm-all-templates-tab-actions {\n  background: #f7f8fa;\n  padding: 24px 0 12px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 2;\n  margin-bottom: 4px;\n}\n\n.sm-all-templates-tab-actions-no-tabs {\n  top: 0;\n}\n\n.sm-all-templates-tab-actions-inner {\n  max-width: 924px;\n  padding: 0 24px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.m-b-2 {\n  margin-bottom: 8px !important;\n}\n\n.p-b-5 {\n  padding-bottom: 24px !important;\n}\n\n.sm-all-templates-tab-category-heading {\n  background: #f7f8fa;\n  position: -webkit-sticky;\n  position: sticky;\n  margin: 0;\n  z-index: 1;\n  font-size: 18px;\n}\n\n.sm-all-templates-tab-category-heading-no-tabs {\n  top: 76px;\n}\n\n.sm-all-templates-tab-category-heading-inner {\n  box-sizing: border-box;\n  max-width: 924px;\n  padding: 0 24px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.sm-all-templates-tab-row {\n  max-width: 924px;\n  padding: 0 24px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n.sm-survey-template-tile {\n  text-align: center;\n  width: 240px;\n  height: 276px;\n}\n\n.sm-survey-template-tile-inner {\n  background: #fff;\n}\n\n.sm-survey-template-tile-image-content {\n  height: 157px;\n  width: 100%;\n  background: #f7f8fa;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n}\n\n.sm-survey-template-tile-stock-image {\n  height: 157px;\n  width: 240px;\n}\n\n.sm-survey-template-tile-text-content {\n  height: 119px;\n  width: 100%;\n  padding: 18px;\n  box-sizing: border-box;\n}\n\n.type-body {\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.sm-survey-template-tile-title {\n  min-height: 24px;\n  height: auto;\n}\n\n.sm-survey-template-tile-description,\n.sm-survey-template-tile-title {\n  max-width: 190px;\n  width: 190px;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.sm-survey-card {\n  height: 109px;\n}\n\n.sm-survey-card:hover {\n  cursor: pointer;\n}\n\n.sm-base-list-item {\n  position: relative;\n  margin: 8px 0;\n}\n\n.wds-card {\n  border: 1px solid #edeeee;\n  border-radius: 2px;\n  background: #fff;\n  position: relative;\n  display: block;\n  box-shadow: none;\n}\n\n.sm-base-list-item-container {\n  width: 100%;\n  margin: 0;\n}\n\n.sm-base-list-item-inner {\n  padding: 16px 24px;\n}\n\n.sm-survey-card-title-text {\n  word-break: break-all;\n  padding-right: 24px;\n  width: 300px;\n}\n\n.wds-flex-nowrap {\n  flex-wrap: nowrap;\n}\n\n.sm-survey-card-actions {\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  display: flex;\n  flex-grow: 1 !important;\n  height: 100%;\n}\n\n.sm-survey-card-detail-section {\n  min-height: 58px;\n  min-width: 87px;\n}\n\n.sm-survey-card-separator {\n  border-left: 1px solid #d0d2d3;\n  padding: 0 12px;\n  width: 144px;\n}\n\n@media screen and (max-width: 686px) {\n  .sm-survey-card-response-count,\n.sm-survey-card-completion-time {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvY3JlYXRlLXN1cnZleS9zdHlsZXMvc3R5bGUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L3BhZ2VzL2NyZWF0ZS1zdXJ2ZXkvc3R5bGVzL3N0eWxlLnNjc3MiLCIvVXNlcnMvcGhpeHVhbmhvYW4vRGVzaWduLVdlYi81LiBBbmd1bGFyL0R1QW4vUHJpdmF0ZS1VRVQtU1VSVkVZL0Zyb250ZW5kL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0UsMEJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQUY7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRU47O0FERE07RUFFRSxnQkFBQTtFQUNBLHFCRXpDTTtBRDJDZDs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQ0NGO0VEQUU7SUFDRSwyQkFBQTtJQUNBLGdCQUFBO0VDRUo7RURESTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUNHTjs7RURDQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VDRUY7O0VEQUE7SUFDRSxzQkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFHRSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDUUY7O0FETEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1FGOztBRE5BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0FDV0Y7O0FEVkU7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWRTtFQUVFLHNCQUFBO0FDWUo7O0FEWEk7RUFDRSx5QkFBQTtFQUNBLGdEQUFBO0FDYU47O0FEVEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNhRjs7QURYQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDY0Y7O0FEWkE7RUFDRSxTQUFBO0FDZUY7O0FEYkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2dCRjs7QURkQTtFQUNFLE1BQUE7QUNpQkY7O0FEZkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsNkJBQUE7QUNtQkY7O0FEakJBO0VBQ0UsK0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDcUJGOztBRG5CQTtFQUNFLFNBQUE7QUNzQkY7O0FEcEJBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN1QkY7O0FEckJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDd0JGOztBRHRCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsZ0JBQUE7QUMwQkY7O0FEeEJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQzRCRjs7QUQxQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQzZCRjs7QUQzQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOEJGOztBRDVCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQytCRjs7QUQ3QkE7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2dDRjs7QUQ3QkE7RUFDRSxhQUFBO0FDZ0NGOztBRC9CRTtFQUNFLGVBQUE7QUNpQ0o7O0FEOUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDaUNGOztBRC9CQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0FDa0NGOztBRGhDQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDbUNGOztBRGpDQTtFQUNFLGtCQUFBO0FDb0NGOztBRGxDQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDcUNGOztBRG5DQTtFQUVFLGlCQUFBO0FDc0NGOztBRHBDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDdUNGOztBRHJDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3dDRjs7QUR0Q0E7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDeUNGOztBRHZDQTtFQUNFOztJQUVFLGFBQUE7RUMwQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9wYWdlcy9jcmVhdGUtc3VydmV5L3N0eWxlcy9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uc20tY3JlYXRlLXN1cnZleSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQyZDM7XG59XG5cbi5ncmlkLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG4udHlwZS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwZDJkMztcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICB3aWR0aDogMzIwcHg7XG4gIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWhlYWRpbmcge1xuICAgIHdpZHRoOiAyNDVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhci1idXR0b25zIHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogNjRweDtcbiAgICAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhci1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEycHggMCByZ2JhKDMyLCAzOCwgNDIsIDAuMyk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICB3aWR0aDogMjQ1cHg7XG4gICAgICBtaW4taGVpZ2h0OiA3NHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc20tZXhwbG9yZS1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjBweCk7XG59XG4udHlwZS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNtLWV4cGxvcmUtdGVtcGxhdGVzLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWJ1dHRvbnMge1xuICAgICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zbS1leHBsb3JlLW1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNtLWV4cGxvcmUtdGVtcGxhdGVzLWhlYWRpbmcge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnNtLWV4cGxvcmUtZ2FsbGVyeSB7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG59XG4uc20tbXktc3VydmV5cy10YWItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG4uc20tbXktc3VydmV5cy10YWItYWN0aW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICBwYWRkaW5nOiAyNHB4IDAgMTJweDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xufVxuLnNtLW15LXN1cnZleXMtdGFiLWFjdGlvbi1idXR0b25zLWlubmVyIHtcbiAgbWF4LXdpZHRoOiA5MjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLndkcy1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNtLW15LXN1cnZleXMtdGFiLWFsbC1idXR0b24ge1xuICBtaW4td2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5zbS1saXN0LXZpZXctdG9nZ2xlLWdyaWQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zbS1saXN0LXZpZXctdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnNtLW15LXN1cnZleXMtdGFiLXJvdyB7XG4gIG1heC13aWR0aDogOTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc20tc3VydmV5LXRpbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc20tYmFzZS10aWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTZweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC5zbS1iYXNlLXRpbGUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgLnNtLWJhc2UtdGlsZS1jb250YWluZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDJkMztcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSg1MSwgNjIsIDcyLCAwLjE5KTtcbiAgICB9XG4gIH1cbn1cbi5zbS1zdXJ2ZXktdGlsZS1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc20tc3VydmV5LXRpbGUtdGl0bGUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAyNHB4KTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc20tc3VydmV5LXRpbGUtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc20tc3VydmV5LXRpbGUtYmFkZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbS1zdXJ2ZXktdGlsZS1iYWRnZS1mYXZvcml0ZSB7XG4gIGNvbG9yOiAjZjliZTAwO1xuICBvcGFjaXR5OiAxO1xufVxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMDtcbn1cbi5zbS1hbGwtdGVtcGxhdGVzLXRhYi1hY3Rpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgcGFkZGluZzogMjRweCAwIDEycHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWFjdGlvbnMtbm8tdGFicyB7XG4gIHRvcDogMDtcbn1cbi5zbS1hbGwtdGVtcGxhdGVzLXRhYi1hY3Rpb25zLWlubmVyIHtcbiAgbWF4LXdpZHRoOiA5MjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm0tYi0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG4ucC1iLTUge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xufVxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWNhdGVnb3J5LWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWNhdGVnb3J5LWhlYWRpbmctbm8tdGFicyB7XG4gIHRvcDogNzZweDtcbn1cbi5zbS1hbGwtdGVtcGxhdGVzLXRhYi1jYXRlZ29yeS1oZWFkaW5nLWlubmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA5MjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLXJvdyB7XG4gIG1heC13aWR0aDogOTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAyNzZweDtcbn1cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS1pbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtaW1hZ2UtY29udGVudCB7XG4gIGhlaWdodDogMTU3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS1zdG9jay1pbWFnZSB7XG4gIGhlaWdodDogMTU3cHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS10ZXh0LWNvbnRlbnQge1xuICBoZWlnaHQ6IDExOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50eXBlLWJvZHkge1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtdGl0bGUge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtZGVzY3JpcHRpb24sXG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtdGl0bGUge1xuICBtYXgtd2lkdGg6IDE5MHB4O1xuICB3aWR0aDogMTkwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLnNtLXN1cnZleS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDlweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uc20tYmFzZS1saXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4ud2RzLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zbS1iYXNlLWxpc3QtaXRlbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuLnNtLWJhc2UtbGlzdC1pdGVtLWlubmVyIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xufVxuLnNtLXN1cnZleS1jYXJkLXRpdGxlLXRleHQge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi53ZHMtZmxleC1ub3dyYXAge1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnNtLXN1cnZleS1jYXJkLWFjdGlvbnMge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zbS1zdXJ2ZXktY2FyZC1kZXRhaWwtc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDU4cHg7XG4gIG1pbi13aWR0aDogODdweDtcbn1cbi5zbS1zdXJ2ZXktY2FyZC1zZXBhcmF0b3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkMGQyZDM7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgd2lkdGg6IDE0NHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjg2cHgpIHtcbiAgLnNtLXN1cnZleS1jYXJkLXJlc3BvbnNlLWNvdW50LFxuICAuc20tc3VydmV5LWNhcmQtY29tcGxldGlvbi10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIuc20tY3JlYXRlLXN1cnZleSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQyZDM7XG59XG5cbi5ncmlkLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50eXBlLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIHdpZHRoOiAzMjBweDtcbn1cbi5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWhlYWRpbmcge1xuICB3aWR0aDogMjQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXIgLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXItYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXIgLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXItYnV0dG9ucyAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhci1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMzM2U0ODtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTJweCAwIHJnYmEoMzIsIDM4LCA0MiwgMC4zKTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB3aWR0aDogMjQ1cHg7XG4gIG1pbi1oZWlnaHQ6IDc0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhciAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhci1idXR0b25zIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWJ1dHRvbjpob3ZlciwgLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXIgLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXItYnV0dG9ucyAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhci1idXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMwMGJmNmY7XG59XG5cbi5zbS1leHBsb3JlLW1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMyMHB4KTtcbn1cblxuLnR5cGUtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zbS1leHBsb3JlLXRlbXBsYXRlcy1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc20tZ2V0LXN0YXJ0ZWQtYnV0dG9uLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyIC5zbS1nZXQtc3RhcnRlZC1idXR0b24tYmFyLWJ1dHRvbnMgLnNtLWdldC1zdGFydGVkLWJ1dHRvbi1iYXItYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAuc20tZXhwbG9yZS1tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNtLWV4cGxvcmUtdGVtcGxhdGVzLWhlYWRpbmcge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5zbS1leHBsb3JlLWdhbGxlcnkge1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xufVxuXG4uc20tbXktc3VydmV5cy10YWItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5zbS1teS1zdXJ2ZXlzLXRhYi1hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gIHBhZGRpbmc6IDI0cHggMCAxMnB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5zbS1teS1zdXJ2ZXlzLXRhYi1hY3Rpb24tYnV0dG9ucy1pbm5lciB7XG4gIG1heC13aWR0aDogOTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLndkcy1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc20tbXktc3VydmV5cy10YWItYWxsLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc20tbGlzdC12aWV3LXRvZ2dsZS1ncmlkLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc20tbGlzdC12aWV3LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMjRweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNtLW15LXN1cnZleXMtdGFiLXJvdyB7XG4gIG1heC13aWR0aDogOTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zbS1zdXJ2ZXktdGlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNtLWJhc2UtdGlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE2cHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNtLWJhc2UtdGlsZSAuc20tYmFzZS10aWxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc20tYmFzZS10aWxlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLnNtLWJhc2UtdGlsZTpob3ZlciAuc20tYmFzZS10aWxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQyZDM7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSg1MSwgNjIsIDcyLCAwLjE5KTtcbn1cblxuLnNtLXN1cnZleS10aWxlLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNtLXN1cnZleS10aWxlLXRpdGxlIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMjRweCk7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNtLXN1cnZleS10aWxlLWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNtLXN1cnZleS10aWxlLWJhZGdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbS1zdXJ2ZXktdGlsZS1iYWRnZS1mYXZvcml0ZSB7XG4gIGNvbG9yOiAjZjliZTAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc20tYWxsLXRlbXBsYXRlcy10YWItY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc20tYWxsLXRlbXBsYXRlcy10YWItYWN0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gIHBhZGRpbmc6IDI0cHggMCAxMnB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWFjdGlvbnMtbm8tdGFicyB7XG4gIHRvcDogMDtcbn1cblxuLnNtLWFsbC10ZW1wbGF0ZXMtdGFiLWFjdGlvbnMtaW5uZXIge1xuICBtYXgtd2lkdGg6IDkyNHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tLWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucC1iLTUge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uc20tYWxsLXRlbXBsYXRlcy10YWItY2F0ZWdvcnktaGVhZGluZyB7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zbS1hbGwtdGVtcGxhdGVzLXRhYi1jYXRlZ29yeS1oZWFkaW5nLW5vLXRhYnMge1xuICB0b3A6IDc2cHg7XG59XG5cbi5zbS1hbGwtdGVtcGxhdGVzLXRhYi1jYXRlZ29yeS1oZWFkaW5nLWlubmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA5MjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc20tYWxsLXRlbXBsYXRlcy10YWItcm93IHtcbiAgbWF4LXdpZHRoOiA5MjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNtLXN1cnZleS10ZW1wbGF0ZS10aWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjc2cHg7XG59XG5cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS1pbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS1pbWFnZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxNTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtc3RvY2staW1hZ2Uge1xuICBoZWlnaHQ6IDE1N3B4O1xuICB3aWR0aDogMjQwcHg7XG59XG5cbi5zbS1zdXJ2ZXktdGVtcGxhdGUtdGlsZS10ZXh0LWNvbnRlbnQge1xuICBoZWlnaHQ6IDExOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnR5cGUtYm9keSB7XG4gIGNvbG9yOiAjMzMzZTQ4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNtLXN1cnZleS10ZW1wbGF0ZS10aWxlLXRpdGxlIHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtZGVzY3JpcHRpb24sXG4uc20tc3VydmV5LXRlbXBsYXRlLXRpbGUtdGl0bGUge1xuICBtYXgtd2lkdGg6IDE5MHB4O1xuICB3aWR0aDogMTkwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLnNtLXN1cnZleS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDlweDtcbn1cbi5zbS1zdXJ2ZXktY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNtLWJhc2UtbGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4ud2RzLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNtLWJhc2UtbGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5zbS1iYXNlLWxpc3QtaXRlbS1pbm5lciB7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbn1cblxuLnNtLXN1cnZleS1jYXJkLXRpdGxlLXRleHQge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLndkcy1mbGV4LW5vd3JhcCB7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5zbS1zdXJ2ZXktY2FyZC1hY3Rpb25zIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbS1zdXJ2ZXktY2FyZC1kZXRhaWwtc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDU4cHg7XG4gIG1pbi13aWR0aDogODdweDtcbn1cblxuLnNtLXN1cnZleS1jYXJkLXNlcGFyYXRvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QwZDJkMztcbiAgcGFkZGluZzogMCAxMnB4O1xuICB3aWR0aDogMTQ0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4NnB4KSB7XG4gIC5zbS1zdXJ2ZXktY2FyZC1yZXNwb25zZS1jb3VudCxcbi5zbS1zdXJ2ZXktY2FyZC1jb21wbGV0aW9uLXRpbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCIvLyBjb2xvcnNcbiR0aGVtZS1jb2xvcjogIzAwYmY2ZjtcbiRicm93bmlzaC1ncmV5OiAjNjg2ODY4O1xuJHBhbGUtZ3JleTogI2VhZWNlZTtcbiRwYW5lbC1ib3JkZXItY29sb3I6ICRwYWxlLWdyZXk7XG4kc3VydmV5LWxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kY2hhcmNvYWwtZ3JleTogIzNlM2Y0MjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/default/pages/dashboard/dashboard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/default/pages/dashboard/dashboard.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ant-progress-circle-path {\n  stroke: #05467e !important;\n}\n\n::ng-deep .ant-progress-text {\n  color: #05467e !important;\n}\n\n::ng-deep app-dashboard .header {\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important;\n  background: none !important;\n}\n\na {\n  text-decoration: none;\n  color: #007faa;\n}\n\n.welcome-banner {\n  padding: 15px 40px 20px;\n  background-color: #fff;\n  font-size: 13px;\n}\n\n.welcome-banner .welcome-line {\n  font-size: 1.87em;\n  padding: 0px;\n  font-weight: 300;\n  margin: 0;\n}\n\n.welcome-banner .wb-subline {\n  margin: 5px 0px 0px 0px;\n}\n\n.welcome-banner .tooth {\n  position: absolute;\n  z-index: 100;\n  margin-top: 15px;\n  left: 15px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border-width: 18px 18px 0px;\n  border-style: solid;\n  border-color: #fff transparent;\n  background-color: transparent;\n}\n\n.custom-card {\n  padding-bottom: 15px;\n}\n\n.custom-card h2.pane-title {\n  font-size: 1.6em;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n\n.ss-item .left {\n  height: 100%;\n  border-right: 1px solid #efefef;\n}\n\n.ss-item .value {\n  color: #333e48;\n  display: block;\n  font-size: 1.375em;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n\n.ss-item .left,\n.ss-item .right {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n\n.ss-item .c-label {\n  display: block;\n  color: #6b787f;\n  font-size: 0.8125em;\n  font-weight: 400;\n  line-height: 1.3em;\n}\n\n.tooltip-trigger {\n  position: relative;\n  margin-left: 0px;\n  top: -3px;\n  font-size: 13px;\n}\n\n.tooltip-trigger.top {\n  top: -1px;\n  left: 3px;\n}\n\n.smf-icon {\n  font-style: normal;\n  font-weight: lighter;\n}\n\n.tooltip-trigger {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  line-height: 12px;\n  background-color: #d0d2d3;\n  border-radius: 50%;\n  color: #ffffff;\n  cursor: help;\n  text-align: center;\n}\n\n.tooltip-trigger:hover {\n  background-color: #00bf6f;\n}\n\n.survey-list {\n  margin-bottom: 32px;\n}\n\n.survey-list * {\n  box-sizing: inherit;\n}\n\n.survey-list .view-all-surveys {\n  float: right;\n  margin-top: 11px;\n  font-size: 13px;\n}\n\n.survey-list .search-box {\n  width: 50%;\n  position: relative;\n  margin-top: 12px;\n  padding-right: 15px;\n}\n\n.survey-list .status-holder {\n  position: relative;\n}\n\n.survey-list .si-status.survey-status-draft {\n  background-color: #f05b24;\n}\n\n.survey-list .si-status.survey-status-open {\n  background-color: #00bf6f;\n}\n\n.survey-list .si-status {\n  position: absolute;\n  left: 16px;\n  z-index: 2;\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  color: #fff;\n  vertical-align: top;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.survey-list div.survey-item:hover {\n  border: 1px solid #00bf6f;\n}\n\n.survey-list div.survey-item {\n  position: relative;\n  min-height: 114px;\n  padding: 16px 0px 16px 16px;\n  margin: 16px 0;\n  border: 1px solid #efefef;\n  background-color: #fff;\n  display: flex;\n  align-items: stretch;\n}\n\n.survey-list div.survey-item .si-main-heading {\n  float: left;\n  flex-grow: 10;\n}\n\n.survey-list div.survey-item ul.si-subtitle-items-list li:first-child {\n  padding-left: 0px;\n}\n\n.survey-list div.survey-item ul.si-subtitle-items-list li {\n  display: inline-block;\n  padding: 0px 5px;\n}\n\n.survey-list div.survey-item .si-survey-title {\n  margin-top: 12px;\n  margin-bottom: 5px;\n  max-width: 300px;\n  overflow-x: hidden;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.survey-list div.survey-item .si-subtitle {\n  font-size: 13px;\n  color: #6b787f;\n}\n\n.survey-list div.survey-item ul.si-metadata {\n  float: right;\n  min-height: 80px;\n  display: inline-block;\n  display: flex;\n  align-items: stretch;\n}\n\n.survey-list div.survey-item ul.si-metadata div {\n  display: inline-block;\n  float: left;\n  width: 144px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #6b787f;\n  text-align: center;\n}\n\n.survey-list div.survey-item ul.si-metadata div .si-token-large {\n  display: block;\n  margin-bottom: 6px;\n  margin-top: 3px;\n  font-size: 18px;\n  font-weight: 300;\n  color: #333e48;\n}\n\n.survey-list div.survey-item ul.si-metadata li {\n  display: inherit;\n  align-items: center;\n  border-right: 1px solid #d0d2d3;\n}\n\n.survey-list div.survey-item ul.si-actions {\n  display: inline-block;\n  display: inherit;\n  min-height: 80px;\n  float: right;\n  position: relative;\n}\n\n.survey-list div.survey-item ul.si-actions .variant-lg {\n  display: flex;\n  width: 144px;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.survey-list div.survey-item ul.si-actions li {\n  display: inline-block;\n  position: relative;\n}\n\n.survey-list div.survey-item ul.si-actions li .action-icon-holder {\n  padding: 4px 5px 0px;\n  cursor: pointer;\n}\n\n.survey-list div.survey-item ul.si-actions li .action-icon {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.survey-list div.survey-item ul.si-actions li .more-options.clicked {\n  background-color: #f6f6f6;\n}\n\n.survey-list div.survey-item ul.si-actions li .c-label {\n  font-size: 13px;\n  line-height: 15px;\n}\n\n.survey-list div.survey-item ul.si-actions a {\n  cursor: pointer;\n  color: #007faa;\n}\n\n.survey-list div.survey-item ul.si-actions a .options-action {\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.survey-list div.survey-item ul.si-actions .variant-lg {\n  display: flex;\n  width: 144px;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.survey-list .sl-footer {\n  margin-top: 16px;\n}\n\n.survey-list .sl-footer .buttons-ctnr {\n  float: right;\n}\n\n.survey-list .sl-pagination {\n  position: relative;\n  top: 10px;\n  display: inline-block;\n  font-size: 0.875em !important;\n  color: #6b787f;\n}\n\n.survey-list .sl-empty {\n  padding: 30px 0px;\n  text-align: center;\n  font-size: 0.875em;\n}\n\n.survey-list .sl-empty .sl-no-activity {\n  margin-bottom: 26px;\n  font-size: 1.3em;\n}\n\n@media (max-width: 768px) {\n  .hidden-sm-down {\n    display: none !important;\n  }\n}\n\n:host ::ng-deep app-page .content {\n  margin: 0;\n}\n\n@media screen and (max-width: 769px) {\n  .search-box {\n    width: 100% !important;\n    padding: 0px !important;\n  }\n\n  .survey-list div.survey-item {\n    padding: 30px 0px 0px 0px;\n    background-color: #fff;\n    display: block;\n  }\n  .survey-list div.survey-item .si-survey-title {\n    display: inline-block;\n    text-align: center;\n  }\n  .survey-list div.survey-item .si-main-heading {\n    float: inherit;\n    text-align: center;\n  }\n  .survey-list div.survey-item ul.si-metadata {\n    float: inherit;\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    top: inherit;\n    margin: 20px 0;\n  }\n  .survey-list div.survey-item ul.si-metadata li {\n    border-right: inherit;\n    display: table-cell;\n    max-width: inherit;\n    width: 1%;\n  }\n  .survey-list div.survey-item ul.si-actions {\n    margin-right: 0;\n    float: inherit;\n  }\n  .survey-list div.survey-item ul.si-actions li {\n    display: block;\n    border-top: 1px solid #d0d2d3;\n    height: 40px;\n    width: 100%;\n    margin: inherit;\n    padding: 0px 20px;\n    font-size: inherit;\n  }\n  .survey-list div.survey-item ul.si-actions li .variant-sm {\n    line-height: 40px;\n  }\n  .survey-list div.survey-item ul.si-actions li span.c-label {\n    position: relative;\n    top: -3px;\n    font-size: 15px;\n  }\n  .survey-list div.survey-item ul.si-actions li.action-token a {\n    color: #333e48;\n  }\n  .survey-list div.survey-item ul.si-actions li.action-token a .icon-option {\n    margin-right: 20px;\n    font-size: 20px;\n  }\n  .survey-list div.survey-item ul.si-actions li.action-token a:hover {\n    color: #00bf6f;\n  }\n}\n\n@media (min-width: 769px) {\n  .hidden-md-up {\n    display: none !important;\n  }\n\n  .progress-panel .dotted-line {\n    top: 47px;\n  }\n}\n\n@media (max-width: 992px) {\n  .container {\n    width: 100% !important;\n    padding: 0px !important;\n  }\n}\n\n.profile-pane-box {\n  text-align: center;\n}\n\n.profile-pane-box .chart-container {\n  margin: 10px auto 20px;\n  cursor: pointer;\n}\n\n.profile-pane-box .name-title {\n  position: relative;\n  z-index: 5;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333e48;\n}\n\n.profile-pane-box .email {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.delete-modal-warning {\n  padding-top: 10px;\n  color: #f05b24;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n::ng-deep .manage-profile-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n\n.poll-pane-box {\n  height: 400px;\n}\n\n.poll-pane-box .question-form {\n  position: static;\n}\n\n.poll-pane-box .question-form .question-text {\n  font-size: 0.95em;\n  line-height: 1.6;\n}\n\n.poll-pane-box .question-form .question-choices {\n  margin-top: 15px;\n  margin-left: 0px;\n  margin-right: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n\n.poll-pane-box .question-form .question-choices li {\n  margin-bottom: 5px;\n  border-radius: 3px;\n  height: 40px;\n  line-height: 40px;\n  position: relative;\n}\n\n.poll-pane-box .question-form .question-choices li .checkbox {\n  position: absolute;\n  left: 0px;\n  top: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 40px;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  line-height: 20px;\n}\n\n.poll-pane-box .question-form .question-choices li .choice-text {\n  font-size: 0.95em;\n  line-height: 1.2;\n  display: inline-block;\n  margin-left: 50px;\n}\n\n.poll-pane-box .question-form .question-choices li:hover {\n  background-color: #edeeee;\n  cursor: pointer;\n}\n\n.poll-pane-box .question-form .disclaimer-text {\n  position: absolute;\n  bottom: 10px;\n  padding: 0px 20px 0px 0px;\n  font-size: 0.625em;\n}\n\n.poll-pane-box .question-form .disclaimer-text .disclaimer-strong {\n  color: inherit;\n}\n\n.splash {\n  height: 150px;\n  width: 100%;\n  background: no-repeat center url(/assets/images/which_collector_right_for_you.png);\n  background-size: cover;\n}\n\n.dw-pane-box {\n  min-height: 400px;\n  border: 1px solid #edeeee;\n  border-radius: 3px;\n  padding: 25px;\n  background-color: #fff;\n  position: relative;\n  overflow-x: hidden;\n}\n\n.content-pane .dw-pane-box {\n  padding: 0;\n}\n\n.padded-content {\n  padding: 25px;\n  color: #333e48;\n}\n\n.padded-content .headline {\n  font-size: 1em;\n  font-weight: normal;\n  margin-bottom: 15px;\n}\n\n.padded-content .byline {\n  font-weight: 500;\n  color: #9da5aa;\n  font-size: 0.875em;\n}\n\n.padded-content .excerpt {\n  font-size: 0.8125em;\n  font-weight: 400;\n}\n\n.padded-content .read-more-cta {\n  font-size: 0.8125em;\n  font-weight: 500;\n  color: #007faa;\n}\n\n@media screen and (min-width: 980px) {\n  .poll-pane-box,\n.profile-pane-box {\n    height: 400px;\n  }\n}\n\n.progress-panel {\n  margin-bottom: 10px;\n  background-color: #edeeee;\n  padding: 35px 35px 0px;\n  overflow: hidden;\n}\n\n.progress-panel .x-button {\n  position: absolute;\n  right: 35px;\n  margin-top: -15px;\n  text-align: right;\n  cursor: pointer;\n  color: #ccc;\n  font-size: 26px;\n  z-index: 10;\n}\n\n.progress-panel .dotted-line {\n  z-index: 5;\n  border: 1px dashed #00bf6f;\n  margin: 0px auto;\n  position: absolute;\n  top: 33px;\n  border-bottom: 0px;\n}\n\n.progress-panel ul.progress-badges-list {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  min-width: 530px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item {\n  position: relative;\n  z-index: 6;\n  display: table-cell;\n  width: 1%;\n  text-align: center;\n  vertical-align: top;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .circle {\n  display: inline-block;\n  z-index: 6;\n  margin: auto;\n  height: 78px;\n  width: 78px;\n  border-radius: 50%;\n  border: 1px dashed #00bf6f;\n  background-color: white;\n  font-size: 32px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .circle .smf-icon {\n  color: #00bf6f;\n  line-height: 78px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item.active .circle {\n  background-color: #00bf6f;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item.active .circle .smf-icon {\n  color: white;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .active-badge .c-label {\n  color: #333e48;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .c-label {\n  margin: 7px 0px;\n  padding: 10px;\n  font-size: 0.82em;\n  font-weight: 500;\n  color: #00bf6f;\n}\n\n.create-survey-ribbon {\n  padding: 70px 0;\n}\n\n.create-survey-ribbon .title-line {\n  text-align: center;\n  font-size: 1.7em;\n  font-weight: 100;\n}\n\n.create-survey-ribbon .ribbon-and-button {\n  position: relative;\n  margin-top: 20px;\n  height: 65px;\n}\n\n.create-survey-ribbon .airplane {\n  position: absolute;\n  height: 100%;\n  width: 80%;\n  background-image: url(/assets/images/airplane_and_twirly_trail.png);\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n\n.create-survey-ribbon .button-holder {\n  padding-top: 14px;\n  text-align: center;\n}\n\n.create-survey-ribbon .button-holder button {\n  height: 40px;\n  width: 160px;\n}\n\n.create-survey-ribbon .survey-gal .dw-pane-title {\n  font-size: 26px;\n}\n\n.create-survey-ribbon .survey-gal .dw-pane-title h2 {\n  font-weight: 300;\n}\n\n.create-survey-ribbon .survey-gal .survey-gal-card {\n  margin-top: 15px;\n  border: 1px solid #edeeee;\n  background-color: #fff;\n  padding: 10px 20px;\n}\n\n.create-survey-ribbon .survey-gal .survey-gal-card .survey-gal-graphic {\n  float: left;\n  margin: 15px 15px 15px 10px;\n  width: 75px;\n}\n\n.create-survey-ribbon .survey-gal .survey-gal-card .card-headline {\n  font-weight: 500;\n  line-height: 8px;\n  margin-top: 24px;\n}\n\n.create-survey-ribbon .survey-gal .survey-gal-card .card-text {\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGhpeHVhbmhvYW4vRGVzaWduLVdlYi81LiBBbmd1bGFyL0R1QW4vUHJpdmF0ZS1VRVQtU1VSVkVZL0Zyb250ZW5kL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FERkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNJSjs7QURGRTtFQUNFLHVCQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0lKOztBRERBO0VBQ0Usb0JBQUE7QUNJRjs7QURIRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBRERFO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZFOztFQUVFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ01GOztBREpBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLHlCRXhHWTtBRGdIZDs7QUROQTtFQUNFLG1CQUFBO0FDU0Y7O0FEUkU7RUFDRSxtQkFBQTtBQ1VKOztBRFJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRFJFO0VBQ0Usa0JBQUE7QUNVSjs7QURSRTtFQUNFLHlCQUFBO0FDVUo7O0FEUkU7RUFDRSx5QkVqSVU7QUQySWQ7O0FEUkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFJFO0VBQ0UseUJBQUE7QUNVSjs7QURSRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDVUo7O0FEVEk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ1dOOztBRFJNO0VBQ0UsaUJBQUE7QUNVUjs7QURSTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNVUjs7QURQSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU047O0FEUEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1NOOztBRFBJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNTTjs7QURSTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURUUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDV1Y7O0FEUk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNVUjs7QURQSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1NOOztBRFJNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNVUjs7QURSTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURUUTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQ1dWOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNXVjs7QURUUTtFQUNFLHlCQUFBO0FDV1Y7O0FEVFE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNXVjs7QURSTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDVVI7O0FEVFE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNXVjs7QURSTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDVVI7O0FETkU7RUFDRSxnQkFBQTtBQ1FKOztBRE5JO0VBQ0UsWUFBQTtBQ1FOOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNPSjs7QURMRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09KOztBRE5JO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ1FOOztBREpBO0VBQ0U7SUFDRSx3QkFBQTtFQ09GO0FBQ0Y7O0FESkU7RUFDRSxTQUFBO0FDTUo7O0FERkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUNLRjs7RURIQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0VDTUY7RURMRTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUNPSjtFRExFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0VDT0o7RURMRTtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNPSjtFRE5JO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQ1FOO0VESkU7SUFDRSxlQUFBO0lBQ0EsY0FBQTtFQ01KO0VETEk7SUFDRSxjQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDT047RUROTTtJQUNFLGlCQUFBO0VDUVI7RUROTTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RUNRUjtFRExJO0lBQ0UsY0FBQTtFQ09OO0VETk07SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUNRUjtFRExJO0lBQ0UsY0VoV007RUR1V1o7QUFDRjs7QURGQTtFQUNFO0lBQ0Usd0JBQUE7RUNJRjs7RURGQTtJQUNFLFNBQUE7RUNLRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDS0Y7QUFDRjs7QURIQTtFQUNFLGtCQUFBO0FDS0Y7O0FESkU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURIQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01GOztBREhFO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDTUo7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FETEU7RUFDRSxnQkFBQTtBQ09KOztBRE5JO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ1FOOztBRE5JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDUU47O0FEUE07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNTUjs7QURSUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDVVY7O0FEUlE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1VWOztBRFJRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDVVY7O0FETkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDUU47O0FEUE07RUFDRSxjQUFBO0FDU1I7O0FESkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtGQUFBO0VBRUEsc0JBQUE7QUNNRjs7QURIQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIRTtFQUNFLFVBQUE7QUNNSjs7QURIQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDTUY7O0FETEU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDRTs7SUFFRSxhQUFBO0VDT0Y7QUFDRjs7QURMQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5FO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FEUEk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDU047O0FEUk07RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDVVI7O0FEVFE7RUFDRSxjRS9pQkk7RUZnakJKLGlCQUFBO0FDV1Y7O0FEUk07RUFDRSx5QkVwakJNO0FEOGpCZDs7QURUUTtFQUNFLFlBQUE7QUNXVjs7QURQUTtFQUNFLGNBQUE7QUNTVjs7QUROTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNFbmtCTTtBRDJrQmQ7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0FDTUo7O0FESkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ09OOztBREhJO0VBQ0UsZUFBQTtBQ0tOOztBREpNO0VBQ0UsZ0JBQUE7QUNNUjs7QURISTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDS047O0FESk07RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDTVI7O0FESk07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNUjs7QURKTTtFQUNFLGlCQUFBO0FDTVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbjo6bmctZGVlcCAuYW50LXByb2dyZXNzLWNpcmNsZS1wYXRoIHtcbiAgc3Ryb2tlOiByZ2IoNSwgNzAsIDEyNikgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYW50LXByb2dyZXNzLXRleHQge1xuICBjb2xvcjogcmdiKDUsIDcwLCAxMjYpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBhcHAtZGFzaGJvYXJkIC5oZWFkZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDdmYWE7XG59XG4ud2VsY29tZS1iYW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDQwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAud2VsY29tZS1saW5lIHtcbiAgICBmb250LXNpemU6IDEuODdlbTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLndiLXN1YmxpbmUge1xuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICB9XG4gIC50b290aCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXdpZHRoOiAxOHB4IDE4cHggMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4uY3VzdG9tLWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgaDIucGFuZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cbi5zcy1pdGVtIHtcbiAgLmxlZnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZmVmO1xuICB9XG4gIC52YWx1ZSB7XG4gICAgY29sb3I6ICMzMzNlNDg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjM3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYy1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM2Yjc4N2Y7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgfVxufVxuLnRvb2x0aXAtdHJpZ2dlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgdG9wOiAtM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4udG9vbHRpcC10cmlnZ2VyLnRvcCB7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogM3B4O1xufVxuLnNtZi1pY29uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi50b29sdGlwLXRyaWdnZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMmQzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IGhlbHA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b29sdGlwLXRyaWdnZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XG59XG4uc3VydmV5LWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAqIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG4gIC52aWV3LWFsbC1zdXJ2ZXlzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLnNlYXJjaC1ib3gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAuc3RhdHVzLWhvbGRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zaS1zdGF0dXMuc3VydmV5LXN0YXR1cy1kcmFmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNWIyNDtcbiAgfVxuICAuc2ktc3RhdHVzLnN1cnZleS1zdGF0dXMtb3BlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xuICB9XG4gIC5zaS1zdGF0dXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGRpdi5zdXJ2ZXktaXRlbTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xuICB9XG4gIGRpdi5zdXJ2ZXktaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDExNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMHB4IDE2cHggMTZweDtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAuc2ktbWFpbi1oZWFkaW5nIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgZmxleC1ncm93OiAxMDtcbiAgICB9XG4gICAgdWwuc2ktc3VidGl0bGUtaXRlbXMtbGlzdCB7XG4gICAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zaS1zdXJ2ZXktdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuc2ktc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6ICM2Yjc4N2Y7XG4gICAgfVxuICAgIHVsLnNpLW1ldGFkYXRhIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTQ0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICM2Yjc4N2Y7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnNpLXRva2VuLWxhcmdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMGQyZDM7XG4gICAgICB9XG4gICAgfVxuICAgIHVsLnNpLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAudmFyaWFudC1sZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxNDRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5hY3Rpb24taWNvbi1ob2xkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA1cHggMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1vcmUtb3B0aW9ucy5jbGlja2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICB9XG4gICAgICAgIC5jLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDA3ZmFhO1xuICAgICAgICAub3B0aW9ucy1hY3Rpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnZhcmlhbnQtbGcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTQ0cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zbC1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAuYnV0dG9ucy1jdG5yIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cbiAgLnNsLXBhZ2luYXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNmI3ODdmO1xuICB9XG4gIC5zbC1lbXB0eSB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgICAuc2wtbm8tYWN0aXZpdHkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpZGRlbi1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCBhcHAtcGFnZSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLnNlYXJjaC1ib3gge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB7XG4gICAgcGFkZGluZzogMzBweCAwcHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5zaS1zdXJ2ZXktdGl0bGUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc2ktbWFpbi1oZWFkaW5nIHtcbiAgICAgIGZsb2F0OiBpbmhlcml0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB1bC5zaS1tZXRhZGF0YSB7XG4gICAgICBmbG9hdDogaW5oZXJpdDtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICBsaSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICB3aWR0aDogMSU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWwuc2ktYWN0aW9ucyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBmbG9hdDogaW5oZXJpdDtcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMmQzO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIC52YXJpYW50LXNtIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmMtbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaS5hY3Rpb24tdG9rZW4gYSB7XG4gICAgICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgICAgICAuaWNvbi1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpLmFjdGlvbi10b2tlbiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oaWRkZW4tbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAucHJvZ3Jlc3MtcGFuZWwgLmRvdHRlZC1saW5lIHtcbiAgICB0b3A6IDQ3cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4ucHJvZmlsZS1wYW5lLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5hbWUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzM2U0ODtcbiAgfVxuICAuZW1haWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuLmRlbGV0ZS1tb2RhbC13YXJuaW5nIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZjA1YjI0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46Om5nLWRlZXAgLm1hbmFnZS1wcm9maWxlLWRpYWxvZyB7XG4gIC5hbnQtbW9kYWwtYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIH1cbn1cbi5wb2xsLXBhbmUtYm94IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgLnF1ZXN0aW9uLWZvcm0ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgLnF1ZXN0aW9uLXRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cbiAgICAucXVlc3Rpb24tY2hvaWNlcyB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaG9pY2UtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRpc2NsYWltZXItdGV4dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjYyNWVtO1xuICAgICAgLmRpc2NsYWltZXItc3Ryb25nIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uc3BsYXNoIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXJcbiAgICB1cmwoL2Fzc2V0cy9pbWFnZXMvd2hpY2hfY29sbGVjdG9yX3JpZ2h0X2Zvcl95b3UucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmR3LXBhbmUtYm94IHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29udGVudC1wYW5lIHtcbiAgLmR3LXBhbmUtYm94IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4ucGFkZGVkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNXB4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgLmhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmJ5bGluZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzlkYTVhYTtcbiAgICBmb250LXNpemU6IDAuODc1ZW07XG4gIH1cbiAgLmV4Y2VycHQge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAucmVhZC1tb3JlLWN0YSB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3ZmFhO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xuICAucG9sbC1wYW5lLWJveCxcbiAgLnByb2ZpbGUtcGFuZS1ib3gge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbi5wcm9ncmVzcy1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZWU7XG4gIHBhZGRpbmc6IDM1cHggMzVweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC54LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLmRvdHRlZC1saW5lIHtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkdGhlbWUtY29sb3I7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgfVxuICB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDUzMHB4O1xuICAgIGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogNjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICB3aWR0aDogMSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgLmNpcmNsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgei1pbmRleDogNjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIHdpZHRoOiA3OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkdGhlbWUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIC5zbWYtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNzhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5hY3RpdmUgLmNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgICAgLnNtZi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hY3RpdmUtYmFkZ2Uge1xuICAgICAgICAuYy1sYWJlbCB7XG4gICAgICAgICAgY29sb3I6ICMzMzNlNDg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiA3cHggMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIHtcbiAgcGFkZGluZzogNzBweCAwO1xuICAudGl0bGUtbGluZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICAucmliYm9uLWFuZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuICAuYWlycGxhbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWlycGxhbmVfYW5kX3R3aXJseV90cmFpbC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICB9XG4gIC5idXR0b24taG9sZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiAxNjBweDtcbiAgICB9XG4gIH1cbiAgLnN1cnZleS1nYWwge1xuICAgIC5kdy1wYW5lLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN1cnZleS1nYWwtY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAuc3VydmV5LWdhbC1ncmFwaGljIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTBweDtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1oZWFkbGluZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG4gICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6Om5nLWRlZXAgLmFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aCB7XG4gIHN0cm9rZTogIzA1NDY3ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1wcm9ncmVzcy10ZXh0IHtcbiAgY29sb3I6ICMwNTQ2N2UgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGFwcC1kYXNoYm9hcmQgLmhlYWRlciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA3ZmFhO1xufVxuXG4ud2VsY29tZS1iYW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDQwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLndlbGNvbWUtYmFubmVyIC53ZWxjb21lLWxpbmUge1xuICBmb250LXNpemU6IDEuODdlbTtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDA7XG59XG4ud2VsY29tZS1iYW5uZXIgLndiLXN1YmxpbmUge1xuICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbn1cbi53ZWxjb21lLWJhbm5lciAudG9vdGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXdpZHRoOiAxOHB4IDE4cHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5jdXN0b20tY2FyZCBoMi5wYW5lLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnNzLWl0ZW0gLmxlZnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVmZWY7XG59XG4uc3MtaXRlbSAudmFsdWUge1xuICBjb2xvcjogIzMzM2U0ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4zNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuLnNzLWl0ZW0gLmxlZnQsXG4uc3MtaXRlbSAucmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zcy1pdGVtIC5jLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICBmb250LXNpemU6IDAuODEyNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG59XG5cbi50b29sdGlwLXRyaWdnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHRvcDogLTNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udG9vbHRpcC10cmlnZ2VyLnRvcCB7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogM3B4O1xufVxuXG4uc21mLWljb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4udG9vbHRpcC10cmlnZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDJkMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBoZWxwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b29sdGlwLXRyaWdnZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZjZmO1xufVxuXG4uc3VydmV5LWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLnN1cnZleS1saXN0ICoge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuLnN1cnZleS1saXN0IC52aWV3LWFsbC1zdXJ2ZXlzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uc3VydmV5LWxpc3QgLnNlYXJjaC1ib3gge1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uc3VydmV5LWxpc3QgLnN0YXR1cy1ob2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3VydmV5LWxpc3QgLnNpLXN0YXR1cy5zdXJ2ZXktc3RhdHVzLWRyYWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNWIyNDtcbn1cbi5zdXJ2ZXktbGlzdCAuc2ktc3RhdHVzLnN1cnZleS1zdGF0dXMtb3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJmNmY7XG59XG4uc3VydmV5LWxpc3QgLnNpLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYmY2Zjtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDExNHB4O1xuICBwYWRkaW5nOiAxNnB4IDBweCAxNnB4IDE2cHg7XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gLnNpLW1haW4taGVhZGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmbGV4LWdyb3c6IDEwO1xufVxuLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB1bC5zaS1zdWJ0aXRsZS1pdGVtcy1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLXN1YnRpdGxlLWl0ZW1zLWxpc3QgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIC5zaS1zdXJ2ZXktdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSAuc2ktc3VidGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNmI3ODdmO1xufVxuLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB1bC5zaS1tZXRhZGF0YSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWluLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktbWV0YWRhdGEgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLW1ldGFkYXRhIGRpdiAuc2ktdG9rZW4tbGFyZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMzMzNlNDg7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLW1ldGFkYXRhIGxpIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwZDJkMztcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgbWluLWhlaWdodDogODBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLWFjdGlvbnMgLnZhcmlhbnQtbGcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTQ0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLWFjdGlvbnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBsaSAuYWN0aW9uLWljb24taG9sZGVyIHtcbiAgcGFkZGluZzogNHB4IDVweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBsaSAuYWN0aW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBsaSAubW9yZS1vcHRpb25zLmNsaWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB1bC5zaS1hY3Rpb25zIGxpIC5jLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwN2ZhYTtcbn1cbi5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBhIC5vcHRpb25zLWFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLWFjdGlvbnMgLnZhcmlhbnQtbGcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTQ0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3VydmV5LWxpc3QgLnNsLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uc3VydmV5LWxpc3QgLnNsLWZvb3RlciAuYnV0dG9ucy1jdG5yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnN1cnZleS1saXN0IC5zbC1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjg3NWVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNmI3ODdmO1xufVxuLnN1cnZleS1saXN0IC5zbC1lbXB0eSB7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbn1cbi5zdXJ2ZXktbGlzdCAuc2wtZW1wdHkgLnNsLW5vLWFjdGl2aXR5IHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRkZW4tc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgYXBwLXBhZ2UgLmNvbnRlbnQge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIC5zZWFyY2gtYm94IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB7XG4gICAgcGFkZGluZzogMzBweCAwcHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gLnNpLXN1cnZleS10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIC5zaS1tYWluLWhlYWRpbmcge1xuICAgIGZsb2F0OiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLW1ldGFkYXRhIHtcbiAgICBmbG9hdDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuICAuc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLW1ldGFkYXRhIGxpIHtcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDElO1xuICB9XG4gIC5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGZsb2F0OiBpbmhlcml0O1xuICB9XG4gIC5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQyZDM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbiAgLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB1bC5zaS1hY3Rpb25zIGxpIC52YXJpYW50LXNtIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgfVxuICAuc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLWFjdGlvbnMgbGkgc3Bhbi5jLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuc3VydmV5LWxpc3QgZGl2LnN1cnZleS1pdGVtIHVsLnNpLWFjdGlvbnMgbGkuYWN0aW9uLXRva2VuIGEge1xuICAgIGNvbG9yOiAjMzMzZTQ4O1xuICB9XG4gIC5zdXJ2ZXktbGlzdCBkaXYuc3VydmV5LWl0ZW0gdWwuc2ktYWN0aW9ucyBsaS5hY3Rpb24tdG9rZW4gYSAuaWNvbi1vcHRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnN1cnZleS1saXN0IGRpdi5zdXJ2ZXktaXRlbSB1bC5zaS1hY3Rpb25zIGxpLmFjdGlvbi10b2tlbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwYmY2ZjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oaWRkZW4tbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wcm9ncmVzcy1wYW5lbCAuZG90dGVkLWxpbmUge1xuICAgIHRvcDogNDdweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wcm9maWxlLXBhbmUtYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtcGFuZS1ib3ggLmNoYXJ0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCBhdXRvIDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLXBhbmUtYm94IC5uYW1lLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzNlNDg7XG59XG4ucHJvZmlsZS1wYW5lLWJveCAuZW1haWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGV0ZS1tb2RhbC13YXJuaW5nIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZjA1YjI0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbjo6bmctZGVlcCAubWFuYWdlLXByb2ZpbGUtZGlhbG9nIC5hbnQtbW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG59XG5cbi5wb2xsLXBhbmUtYm94IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5wb2xsLXBhbmUtYm94IC5xdWVzdGlvbi1mb3JtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5wb2xsLXBhbmUtYm94IC5xdWVzdGlvbi1mb3JtIC5xdWVzdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4ucG9sbC1wYW5lLWJveCAucXVlc3Rpb24tZm9ybSAucXVlc3Rpb24tY2hvaWNlcyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5wb2xsLXBhbmUtYm94IC5xdWVzdGlvbi1mb3JtIC5xdWVzdGlvbi1jaG9pY2VzIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb2xsLXBhbmUtYm94IC5xdWVzdGlvbi1mb3JtIC5xdWVzdGlvbi1jaG9pY2VzIGxpIC5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ucG9sbC1wYW5lLWJveCAucXVlc3Rpb24tZm9ybSAucXVlc3Rpb24tY2hvaWNlcyBsaSAuY2hvaWNlLXRleHQge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wb2xsLXBhbmUtYm94IC5xdWVzdGlvbi1mb3JtIC5xdWVzdGlvbi1jaG9pY2VzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvbGwtcGFuZS1ib3ggLnF1ZXN0aW9uLWZvcm0gLmRpc2NsYWltZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDAuNjI1ZW07XG59XG4ucG9sbC1wYW5lLWJveCAucXVlc3Rpb24tZm9ybSAuZGlzY2xhaW1lci10ZXh0IC5kaXNjbGFpbWVyLXN0cm9uZyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uc3BsYXNoIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKC9hc3NldHMvaW1hZ2VzL3doaWNoX2NvbGxlY3Rvcl9yaWdodF9mb3JfeW91LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5kdy1wYW5lLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY29udGVudC1wYW5lIC5kdy1wYW5lLWJveCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wYWRkZWQtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGNvbG9yOiAjMzMzZTQ4O1xufVxuLnBhZGRlZC1jb250ZW50IC5oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnBhZGRlZC1jb250ZW50IC5ieWxpbmUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzlkYTVhYTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xufVxuLnBhZGRlZC1jb250ZW50IC5leGNlcnB0IHtcbiAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYWRkZWQtY29udGVudCAucmVhZC1tb3JlLWN0YSB7XG4gIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDA3ZmFhO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xuICAucG9sbC1wYW5lLWJveCxcbi5wcm9maWxlLXBhbmUtYm94IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG4ucHJvZ3Jlc3MtcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWVlO1xuICBwYWRkaW5nOiAzNXB4IDM1cHggMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2dyZXNzLXBhbmVsIC54LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAyNnB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi5wcm9ncmVzcy1wYW5lbCAuZG90dGVkLWxpbmUge1xuICB6LWluZGV4OiA1O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzAwYmY2ZjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzcHg7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiA1MzBweDtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA2O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtIC5jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDY7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzAwYmY2ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtIC5jaXJjbGUgLnNtZi1pY29uIHtcbiAgY29sb3I6ICMwMGJmNmY7XG4gIGxpbmUtaGVpZ2h0OiA3OHB4O1xufVxuLnByb2dyZXNzLXBhbmVsIHVsLnByb2dyZXNzLWJhZGdlcy1saXN0IGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0uYWN0aXZlIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZjZmO1xufVxuLnByb2dyZXNzLXBhbmVsIHVsLnByb2dyZXNzLWJhZGdlcy1saXN0IGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0uYWN0aXZlIC5jaXJjbGUgLnNtZi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByb2dyZXNzLXBhbmVsIHVsLnByb2dyZXNzLWJhZGdlcy1saXN0IGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0gLmFjdGl2ZS1iYWRnZSAuYy1sYWJlbCB7XG4gIGNvbG9yOiAjMzMzZTQ4O1xufVxuLnByb2dyZXNzLXBhbmVsIHVsLnByb2dyZXNzLWJhZGdlcy1saXN0IGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0gLmMtbGFiZWwge1xuICBtYXJnaW46IDdweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44MmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwYmY2Zjtcbn1cblxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC50aXRsZS1saW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuN2VtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5yaWJib24tYW5kLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5haXJwbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWlycGxhbmVfYW5kX3R3aXJseV90cmFpbC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG4uY3JlYXRlLXN1cnZleS1yaWJib24gLmJ1dHRvbi1ob2xkZXIge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5idXR0b24taG9sZGVyIGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5zdXJ2ZXktZ2FsIC5kdy1wYW5lLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5zdXJ2ZXktZ2FsIC5kdy1wYW5lLXRpdGxlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jcmVhdGUtc3VydmV5LXJpYmJvbiAuc3VydmV5LWdhbCAuc3VydmV5LWdhbC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5zdXJ2ZXktZ2FsIC5zdXJ2ZXktZ2FsLWNhcmQgLnN1cnZleS1nYWwtZ3JhcGhpYyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDEwcHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5zdXJ2ZXktZ2FsIC5zdXJ2ZXktZ2FsLWNhcmQgLmNhcmQtaGVhZGxpbmUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogOHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmNyZWF0ZS1zdXJ2ZXktcmliYm9uIC5zdXJ2ZXktZ2FsIC5zdXJ2ZXktZ2FsLWNhcmQgLmNhcmQtdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufSIsIi8vIGNvbG9yc1xuJHRoZW1lLWNvbG9yOiAjMDBiZjZmO1xuJGJyb3duaXNoLWdyZXk6ICM2ODY4Njg7XG4kcGFsZS1ncmV5OiAjZWFlY2VlO1xuJHBhbmVsLWJvcmRlci1jb2xvcjogJHBhbGUtZ3JleTtcbiRzdXJ2ZXktbGlnaHQtZ3JheTogI2Y3ZjdmNztcbiRjaGFyY29hbC1ncmV5OiAjM2UzZjQyO1xuIl19 */"

/***/ }),

/***/ "./src/app/modules/default/pages/dashboard/dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/default/pages/dashboard/dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_modals_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/modals/manage-profile/manage-profile.component */ "./src/app/shared/modals/manage-profile/manage-profile.component.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");











var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dSurveyFormService, dSurveyResponseService, dUserService, nzMessageService, translateService, loaderService, modalService, authService, router) {
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyResponseService = dSurveyResponseService;
        this.dUserService = dUserService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.searchChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]("");
        this.destroyInterval$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.listOfSurvey = [];
        this.listOfAllData = [];
        this.isLoading = false;
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.searchKey = "title";
        this.sortField = "createdAt";
        this.sortType = "desc";
        this.filterKey = "";
        this.filterValue = [];
        this.isSeachNew = false;
        this.folderSelectId = "all";
        this.listOfAllJobRole = _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].jobRole;
        this.progressPanelState = "in";
        this.subscriptions = [];
        this.formatInfoProgress = function (percent) { return percent + "%"; };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.authService.getCurrentUser().subscribe(function (userData) {
            _this.currentUser = userData;
            if (_this.currentUser && !_this.currentUser.accountComplete) {
                var sourceInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(_app_core__WEBPACK_IMPORTED_MODULE_2__["appConfig"].completeAccountRefreshInterval);
                _this.subscriptions.push(sourceInterval
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.destroyInterval$))
                    .subscribe(function () { return _this.updateIfCompleteAccount(); }));
            }
            else {
                _this.progressPanelState = "out";
            }
        }));
        this.getListSurvey();
        this.countSurveyFormStatus();
        this.countAllResponsesAndTypicalTimeSpent();
        var getUserList = function (title) {
            return _this.dSurveyFormService.searchDashboardSurveyFormList(title, 5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
                if (res.status.code === 200) {
                    return res.results;
                }
                return [];
            }));
        };
        var listOfSurvey$ = this.searchChange$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(getUserList));
        listOfSurvey$.subscribe(function (users) {
            _this.listOfSurvey = users;
            _this.isLoading = false;
        });
    };
    DashboardComponent.prototype.countAllResponsesAndTypicalTimeSpent = function () {
        var _this = this;
        this.dSurveyResponseService
            .countAllResponsesAndTypicalTimeSpent()
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.typicalTimeSpent = res.results[0].typicalTimeSpent;
                _this.totalResponse = res.results[0].totalResponse;
                _this.averageCompletionRate = Math.floor((res.results[0].totalResponseComplete / _this.totalResponse) * 100);
            }
        });
    };
    DashboardComponent.prototype.updateIfCompleteAccount = function () {
        var _this = this;
        if (this.percentDoneProfile === 100 &&
            this.countStatus &&
            this.countStatus.length > 0) {
            this.destroyInterval$.next(true);
            var updateData_1 = {
                accountComplete: true,
                userName: this.currentUser.userName
            };
            this.dUserService.updateUser(updateData_1, this.currentUser.id).subscribe(function (res) {
                if (res.status.code === 200) {
                    _this.authService.setCurrentUser(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.currentUser, { updateData: updateData_1 }), true);
                }
            }, function (err) {
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            });
        }
    };
    DashboardComponent.prototype.countSurveyFormStatus = function () {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyFormService.countSurveyFormStatus().subscribe(function (res) {
            if (res.status.code === 200) {
                _this.countStatus = res.results;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    DashboardComponent.prototype.getListSurvey = function () {
        var _this = this;
        if (this.folderSelectId !== "all") {
            this.filterValue = [this.folderSelectId];
            this.filterKey = "surveyFolderId";
        }
        else {
            this.filterValue = [];
            this.filterKey = "";
        }
        this.loaderService.display(true);
        var countColumn = "collector";
        this.dSurveyFormService
            .getDefaultSurveyFormList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue || "", this.filterKey, JSON.stringify(this.filterValue), countColumn)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                if (_this.isSeachNew) {
                    _this.listOfAllData = res.results;
                    _this.isSeachNew = false;
                }
                else {
                    _this.listOfAllData = _this.listOfAllData.concat(res.results);
                }
                _this.pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    DashboardComponent.prototype.onSearchSelect = function (value) {
        this.isLoading = true;
        this.searchChange$.next(value);
        if (value === "") {
            this.getNewSurveyList();
        }
    };
    DashboardComponent.prototype.onSearchList = function (value) {
        this.searchValue = value;
        this.getNewSurveyList();
    };
    DashboardComponent.prototype.getNewSurveyList = function () {
        this.pagging.page = 1;
        this.isSeachNew = true;
        this.getListSurvey();
    };
    DashboardComponent.prototype.loadMoreSurvey = function () {
        this.pagging.page += 1;
        this.getListSurvey();
    };
    DashboardComponent.prototype.countQuestionSurvey = function (json) {
        var defaultValue = 0;
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        try {
            json.pages.forEach(function (o) {
                if (o.elements && Array.isArray(o.elements)) {
                    total += o.elements.length;
                }
            });
        }
        catch (error) {
            return defaultValue;
        }
        return total >= defaultValue ? total : defaultValue;
    };
    DashboardComponent.prototype.displayCountStatus = function (status) {
        var defaultValue = 0;
        if (!this.countStatus) {
            return defaultValue;
        }
        var cStatus = this.countStatus.filter(function (o) { return o.status === status; })[0];
        if (!cStatus) {
            return defaultValue;
        }
        return cStatus.total ? cStatus.total : defaultValue;
    };
    DashboardComponent.prototype.calculateTimeComplete = function (json) {
        var defaultValue = "—";
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        var questions = 0;
        var decisions = 0;
        var openQuestions = [
            "comment",
            "text",
            "tagbox",
            "sortablelist",
            "html",
            "multipletext"
        ];
        json.pages.forEach(function (o) {
            if (o.elements && Array.isArray(o.elements)) {
                questions += o.elements.length;
                total += o.elements.length * 5;
                o.elements.forEach(function (element) {
                    total += element.name.split(" ").length / 5;
                    if (openQuestions.includes(element.type)) {
                        total += 15;
                    }
                    if (element.choices) {
                        decisions += element.choices.length;
                    }
                    if (element.columns) {
                        decisions += element.columns.length;
                    }
                    if (element.items) {
                        decisions += element.items.length;
                    }
                });
            }
        });
        total += (decisions - questions) * 2;
        return (total / 60).toFixed(2) + " min";
    };
    DashboardComponent.prototype.setClicked = function ($event, survey) {
        survey.clicked = $event;
    };
    DashboardComponent.prototype.showDeleteConfirm = function (surveyForm, tplContent) {
        var _this = this;
        this.surveyFormDelete = surveyForm;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_SURVEY"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.DELETE"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyForm) {
                    return _this.onDeleteSurveyForm(surveyForm.id);
                }
            }
        });
    };
    DashboardComponent.prototype.onDeleteSurveyForm = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyFormService.deleteSurveyForm(surveyFormId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getNewSurveyList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    DashboardComponent.prototype.onMakeCopy = function (surveyForm) {
        var _this = this;
        var copySurvey = {
            json: surveyForm.json,
            title: "Copy of " + surveyForm.title,
            description: surveyForm.description,
            userId: this.currentUser.id
        };
        return this.dSurveyFormService.addSurveyForm(copySurvey).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.router.navigate(["/create", "design-survey", res.results[0].id]);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    DashboardComponent.prototype.showProfile = function (current) {
        this.modalForm = this.modalService.create({
            nzTitle: "",
            nzFooter: null,
            nzContent: _app_shared_modals_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_9__["ManageProfileComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "manage-profile-dialog",
            nzComponentParams: { current: current }
        });
    };
    Object.defineProperty(DashboardComponent.prototype, "percentDoneProfile", {
        get: function () {
            var _this = this;
            var fields = [
                "firstName",
                "lastName",
                "avatar",
                "email",
                "jobRole",
                "jobLevel",
                "organization.organizationType",
                "organization.industry",
                "organization.location",
                "organization.size"
            ];
            var totalProfileQuality = Math.floor((fields.reduce(function (result, next) {
                return (result += (_this.notCompletedField(_this.resolve(_this.currentUser, next))));
            }, 0) * 100) / fields.length);
            return totalProfileQuality;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.notCompletedField = function (value) {
        if (!value ||
            value === "" ||
            (Array.isArray(value) && value.length === 0)) {
            return 0;
        }
        return 1;
    };
    DashboardComponent.prototype.resolve = function (obj, path) {
        path = path.split(".");
        var current = obj;
        while (path.length) {
            try {
                if (typeof current !== "object")
                    return undefined;
                current = current[path.shift()];
            }
            catch (error) {
                return undefined;
            }
        }
        return current;
    };
    Object.defineProperty(DashboardComponent.prototype, "msToHMSTypicalTimeSpent", {
        get: function () {
            function pad(n, z) {
                if (z === void 0) { z = 2; }
                z = z || 2;
                return ("00" + n).slice(-z);
            }
            if (this.typicalTimeSpent) {
                var s = +this.typicalTimeSpent;
                var ms = s % 1000;
                s = (s - ms) / 1000;
                var secs = s % 60;
                s = (s - secs) / 60;
                var mins = s % 60;
                var hrs = (s - mins) / 60;
                return pad(hrs) + "h:" + pad(mins) + "m:" + pad(secs) + "s";
            }
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.destroyInterval$.next(true);
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DUserService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/dashboard/dashboard.component.html"),
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_2__["SlideInOutAnimation"]],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/default/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DUserService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/pages/home/home.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/default/pages/home/home.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pbt-12 {\n  padding-bottom: 12px;\n  padding-top: 12px;\n}\n\n.container {\n  margin-top: 24px;\n}\n\ntd.activity {\n  color: #6b787f;\n}\n\ntd.activity a {\n  color: #007faa;\n  text-decoration: none;\n  border: none;\n  background: none;\n  font-weight: inherit;\n  font-size: inherit;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n}\n\ntd.activity a:hover {\n  text-decoration: underline;\n}\n\n.action-icon a {\n  color: #333e48;\n  font-size: 18px;\n}\n\n.action-icon a:hover {\n  text-decoration: none;\n  color: #007faa;\n}\n\n.select-folder {\n  width: calc(100% - 56px);\n  margin-right: 12px;\n  text-align: left;\n}\n\n.select-folder .icon {\n  float: right;\n  margin-top: 5px;\n}\n\n.icon-folder {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.buttons-ctnr {\n  position: absolute;\n  bottom: 15px;\n}\n\n.buttons {\n  width: 270px;\n  background-color: #edeeee;\n}\n\n.buttons,\ndiv.add-folder-form {\n  padding: 8px 10px 8px 8px !important;\n}\n\n.dropdown-folder-top {\n  width: 270px;\n  max-height: 360px;\n  overflow-y: auto;\n  font-size: 13px;\n  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.15) !important;\n}\n\ndiv.add-folder-form {\n  clear: both;\n  background-color: #edeeee;\n}\n\ndiv.add-folder-form input.folder-name {\n  margin-bottom: 10px;\n  display: block;\n  padding: 3px;\n}\n\ndiv.add-folder-form form button {\n  margin-right: 5px;\n}\n\n::ng-deep .manage-folders-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n}\n\n::ng-deep .send-copy-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n\n.delete-modal-warning {\n  padding-top: 10px;\n  color: #f05b24;\n  font-size: 13px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURERTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREU7RUFDRSwwQkFBQTtBQ0dKOztBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURIQTs7RUFFRSxvQ0FBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRFBFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRFBFO0VBQ0UsaUJBQUE7QUNTSjs7QURKRTtFQUNFLDhCQUFBO0FDT0o7O0FESEU7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNNSjs7QURIQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbi5wYnQtMTIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbnRkLmFjdGl2aXR5IHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGEge1xuICAgIGNvbG9yOiAjMDA3ZmFhO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuLmFjdGlvbi1pY29uIHtcbiAgYSB7XG4gICAgY29sb3I6ICMzMzNlNDg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwN2ZhYTtcbiAgfVxufVxuLnNlbGVjdC1mb2xkZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTZweCk7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLmljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbi5pY29uLWZvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uYnV0dG9ucy1jdG5yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG59XG4uYnV0dG9ucyB7XG4gIHdpZHRoOiAyNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZTtcbn1cbi5idXR0b25zLFxuZGl2LmFkZC1mb2xkZXItZm9ybSB7XG4gIHBhZGRpbmc6IDhweCAxMHB4IDhweCA4cHggIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi1mb2xkZXItdG9wIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAtNXB4IDAgNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuZGl2LmFkZC1mb2xkZXItZm9ybSB7XG4gIGNsZWFyOiBib3RoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWVlO1xuICBpbnB1dC5mb2xkZXItbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cbiAgZm9ybSBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAubWFuYWdlLWZvbGRlcnMtZGlhbG9nIHtcbiAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAuc2VuZC1jb3B5LWRpYWxvZyB7XG4gIC5hbnQtbW9kYWwtYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIH1cbn1cbi5kZWxldGUtbW9kYWwtd2FybmluZyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBjb2xvcjogI2YwNWIyNDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIiwiLnBidC0xMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbnRkLmFjdGl2aXR5IHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG59XG50ZC5hY3Rpdml0eSBhIHtcbiAgY29sb3I6ICMwMDdmYWE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50ZC5hY3Rpdml0eSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hY3Rpb24taWNvbiBhIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hY3Rpb24taWNvbiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwN2ZhYTtcbn1cblxuLnNlbGVjdC1mb2xkZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTZweCk7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWxlY3QtZm9sZGVyIC5pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pY29uLWZvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5idXR0b25zLWN0bnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLmJ1dHRvbnMge1xuICB3aWR0aDogMjcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZWU7XG59XG5cbi5idXR0b25zLFxuZGl2LmFkZC1mb2xkZXItZm9ybSB7XG4gIHBhZGRpbmc6IDhweCAxMHB4IDhweCA4cHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLWZvbGRlci10b3Age1xuICB3aWR0aDogMjcwcHg7XG4gIG1heC1oZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IC01cHggMCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5hZGQtZm9sZGVyLWZvcm0ge1xuICBjbGVhcjogYm90aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZTtcbn1cbmRpdi5hZGQtZm9sZGVyLWZvcm0gaW5wdXQuZm9sZGVyLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4O1xufVxuZGl2LmFkZC1mb2xkZXItZm9ybSBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG46Om5nLWRlZXAgLm1hbmFnZS1mb2xkZXJzLWRpYWxvZyAuYW50LW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuc2VuZC1jb3B5LWRpYWxvZyAuYW50LW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xufVxuXG4uZGVsZXRlLW1vZGFsLXdhcm5pbmcge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgY29sb3I6ICNmMDViMjQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/default/pages/home/home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/default/pages/home/home.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_shared_modals_manage_folders_manage_folders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/modals/manage-folders/manage-folders.component */ "./src/app/shared/modals/manage-folders/manage-folders.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_modals_send_survey_send_survey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/modals/send-survey/send-survey.component */ "./src/app/shared/modals/send-survey/send-survey.component.ts");











var HomeComponent = /** @class */ (function () {
    function HomeComponent(dSurveyFormService, nzMessageService, translateService, loaderService, modalService, dSurveyFolderService, dSurveyResponseService, formBuilder, authService, router) {
        this.dSurveyFormService = dSurveyFormService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.dSurveyFolderService = dSurveyFolderService;
        this.dSurveyResponseService = dSurveyResponseService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.listOfAllSurveyForm = [];
        this.listOfAllSurveyFolder = [];
        this.mapOfCheckedId = {};
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.numberOfChecked = 0;
        this.searchKey = "title";
        this.sortField = "createdAt";
        this.sortType = "desc";
        this.filterKey = "";
        this.filterValue = [];
        this.columns = [];
        this.showMoveToFolder = false;
        this.folderSelectTitle = "All";
        this.folderSelectId = "all";
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.newFolder = false;
        this.subscriptions = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.getListSurvey();
        this.getListSurveyFolder();
        this.dSurveyFolderService.getRefreshList().subscribe(function (res) {
            if (res) {
                _this.getListSurveyFolder();
                _this.dSurveyFolderService.setRefreshList(false);
            }
        });
        this.subscriptions.push(this.authService.getCurrentUser().subscribe(function (userData) {
            _this.currentUser = userData;
        }));
    };
    HomeComponent.prototype.buildForm = function () {
        this.addFolderForm = this.formBuilder.group({
            title: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(120),
                    _app_core__WEBPACK_IMPORTED_MODULE_2__["IValidators"].spaceStringValidator()
                ]
            ]
        });
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    HomeComponent.prototype.initTable = function () {
        this.columns = [
            {
                id: "title",
                td_two: "createdAt",
                className: "activity",
                type: "text",
                action: {
                    link: function (surveyId) {
                        return "/create/summary/" + surveyId;
                    }
                },
                sortable: true,
                header: "default.layout.TITLE"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "default.layout.MODIFIED"
            },
            {
                id: "response",
                type: "text",
                sortable: true,
                header: "default.layout.RESPONSES"
            },
            {
                id: "",
                type: "action",
                action: {
                    link: function (surveyId) {
                        return "/create/design-survey/" + surveyId;
                    },
                    icon: "form"
                },
                header: "default.layout.DESIGN"
            },
            {
                id: "",
                type: "action",
                action: {
                    link: function (surveyId) {
                        return "/create/collector-responses/" + surveyId;
                    },
                    icon: "link"
                },
                header: "default.layout.COLLECT"
            },
            {
                id: "",
                type: "action",
                action: {
                    link: function (surveyId) {
                        return "/create/analyze-results/" + surveyId;
                    },
                    icon: "bar-chart"
                },
                header: "default.layout.ANALYZE"
            },
            {
                id: "",
                type: "action",
                action: {
                    link: function (surveyId) {
                        return "";
                    },
                    icon: "share-alt"
                },
                header: "default.layout.SHARE"
            }
        ];
    };
    HomeComponent.prototype.getListSurvey = function () {
        var _this = this;
        if (this.folderSelectId !== "all") {
            this.filterValue = [this.folderSelectId];
            this.filterKey = "surveyFolderId";
        }
        else {
            this.filterValue = [];
            this.filterKey = "";
        }
        this.loaderService.display(true);
        var countColumn = "response";
        this.dSurveyFormService
            .getDefaultSurveyFormList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue || "", this.filterKey, JSON.stringify(this.filterValue), countColumn)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyForm = res.results;
                _this.pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.getListSurveyFolder = function () {
        var _this = this;
        this.dSurveyFolderService.getAllSurveyFolderList().subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyFolder = res.results;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getListSurvey();
    };
    HomeComponent.prototype.search = function () {
        this.getListSurvey();
    };
    HomeComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getListSurvey();
    };
    HomeComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getListSurvey();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    HomeComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllSurveyForm.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllSurveyForm.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllSurveyForm.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    HomeComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    HomeComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllSurveyForm.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    HomeComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getListSurvey();
    };
    HomeComponent.prototype.onShowMoveToFolder = function () {
        this.mapOfCheckedId = {};
        this.refreshStatus();
        this.showMoveToFolder = !this.showMoveToFolder;
    };
    HomeComponent.prototype.showSurveyInFolder = function (folderId) {
        this.folderSelectId = folderId;
        this.mapOfCheckedId = {};
        this.refreshStatus();
        if (folderId === "all") {
            this.folderSelectTitle = "All";
        }
        else {
            this.folderSelectTitle = this.listOfAllSurveyFolder.filter(function (folder) { return folder.id === folderId; })[0].title;
        }
        this.getListSurvey();
    };
    HomeComponent.prototype.onMoveSurveyToFolder = function (folderId) {
        var _this = this;
        var surveyFormIds = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](lodash__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.dSurveyFormService
            .moveSurveyFormToFolder(folderId, surveyFormIds)
            .subscribe(function (res) {
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            if (res.results.length > 0) {
                _this.getListSurveyFolder();
                _this.getListSurvey();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.openModal = function () {
        var _this = this;
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.MANAGE_FOLDERS"),
            nzFooter: [
                {
                    label: this.translateService.instant("default.layout.DONE"),
                    type: "primary",
                    onClick: function () {
                        _this.modalForm.destroy();
                    }
                }
            ],
            nzContent: _app_shared_modals_manage_folders_manage_folders_component__WEBPACK_IMPORTED_MODULE_7__["ManageFoldersComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "manage-folders-dialog"
        });
    };
    HomeComponent.prototype.updateNewFolder = function (value) {
        this.newFolder = value;
    };
    HomeComponent.prototype.onAddNewFolder = function (formData) {
        var _this = this;
        if (this.addFolderForm.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_5__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        this.dSurveyFolderService.addSurveyFolder(formData.value).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.onMoveSurveyToFolder(res.results[0].id);
                formData.reset();
                _this.updateNewFolder(false);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    Object.defineProperty(HomeComponent.prototype, "f", {
        get: function () {
            return this.addFolderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onMakeCopy = function (surveyForm) {
        var _this = this;
        var copySurvey = {
            json: surveyForm.json,
            title: "Copy of " + surveyForm.title,
            description: surveyForm.description,
            userId: this.currentUser.id
        };
        return this.dSurveyFormService.addSurveyForm(copySurvey).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.router.navigate(["/create", "design-survey", res.results[0].id]);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.showDeleteConfirm = function (surveyForm, tplContent) {
        var _this = this;
        this.surveyFormDelete = surveyForm;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_SURVEY"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.DELETE"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyForm) {
                    return _this.onDeleteSurveyForm(surveyForm.id);
                }
            }
        });
    };
    HomeComponent.prototype.onDeleteSurveyForm = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyFormService.deleteSurveyForm(surveyFormId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getListSurvey();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.showClearResponsesConfirm = function (surveyForm, tplContent) {
        var _this = this;
        this.surveyFormClearResponses = surveyForm;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_CLEAR_ALL_THE_RESPONSES_IN_THIS_FORM"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.CLEAR_RESPONSES"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyForm) {
                    return _this.clearResponsesByForm(surveyForm.id);
                }
            }
        });
    };
    HomeComponent.prototype.clearResponsesByForm = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyResponseService.clearResponsesByForm(surveyFormId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getListSurvey();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    HomeComponent.prototype.onShowModalSendCopyTransfer = function (surveyForm, sendType) {
        if (!surveyForm) {
            return;
        }
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant(sendType === "SEND_COPY"
                ? "default.layout.SEND_A_COPY"
                : "default.layout.TRANSFER"),
            nzFooter: null,
            nzContent: _app_shared_modals_send_survey_send_survey_component__WEBPACK_IMPORTED_MODULE_10__["SendSurveyComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "send-copy-dialog",
            nzComponentParams: { surveyForm: surveyForm, sendType: sendType }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFolderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/default/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFolderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-default-default-module.js.map