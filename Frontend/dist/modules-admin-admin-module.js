(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page [header]=\"header\" [title]=\"'admin.layout.DASHBOARD' | translate\">\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <p>dashboard works!</p>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/role-grants/role-grants.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/role-grants/role-grants.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ROLE_GRANTS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.ROLE_GRANT_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #userTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr>\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      filter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of userTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id].length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i\n                        >{{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'checkbox'\">\n                        <label\n                          (ngModelChange)=\"onUpdateAction(data.id, column.id)\"\n                          nz-checkbox\n                          [(ngModel)]=\"data[column.id]\"\n                        >\n                        </label>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"openForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_ROLE_GRANTS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Form -->\n<nz-drawer\n  [nzBodyStyle]=\"{\n    height: 'calc(100% - 55px)',\n    overflow: 'auto',\n    'padding-bottom': '53px'\n  }\"\n  [nzMaskClosable]=\"false\"\n  [nzVisible]=\"visible\"\n  [nzTitle]=\"\n    (editing\n      ? 'admin.layout.EDIT_ROLE_GRANT'\n      : 'admin.layout.CREATE_NEW_ROLE_GRANT'\n    ) | translate\n  \"\n  (nzOnClose)=\"closeForm()\"\n  [nzWidth]=\"screenWidth < 768 ? 256 : 560\"\n>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.ROLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'roleId') }\"\n          >\n            <nz-select\n              nzShowSearch\n              nzAllowClear\n              [nzPlaceHolder]=\"'admin.layout.SELECT_ROLE' | translate\"\n              formControlName=\"roleId\"\n              [(ngModel)]=\"selectedEdit.role.id\"\n            >\n              <ng-container *ngFor=\"let o of listOfAllRole\">\n                <nz-option [nzValue]=\"o.value\" [nzLabel]=\"o.text\"></nz-option>\n              </ng-container>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'roleId')\"\n            [errors]=\"f.roleId.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.TABLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'tableName') }\"\n          >\n            <nz-select\n              nzShowSearch\n              nzAllowClear\n              [nzPlaceHolder]=\"'admin.layout.SELECT_TABLE' | translate\"\n              formControlName=\"tableName\"\n              [(ngModel)]=\"selectedEdit.tableName\"\n            >\n              <ng-container *ngFor=\"let o of listOfAllTable\">\n                <nz-option [nzValue]=\"o.value\" [nzLabel]=\"o.text\"></nz-option>\n              </ng-container>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'tableName')\"\n            [errors]=\"f.tableName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"24\" nzMd=\"24\" nzSm=\"24\">\n        <nz-table\n          [nzBordered]=\"true\"\n          [nzData]=\"[null]\"\n          [nzShowPagination]=\"false\"\n        >\n          <thead>\n            <tr>\n              <th>{{ \"admin.layout.CAN_VIEW_ALL\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_SELF_VIEW\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_INSERT\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_UPDATE\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_DELETE\" | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canViewAll\"\n                  formControlName=\"canViewAll\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canSelfView\"\n                  formControlName=\"canSelfView\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canInsert\"\n                  formControlName=\"canInsert\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canUpdate\"\n                  formControlName=\"canUpdate\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canDelete\"\n                  formControlName=\"canDelete\"\n                ></label>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n      </div>\n    </div>\n  </form>\n  <div class=\"footer\">\n    <button nz-button nzType=\"default\" (click)=\"closeForm()\" class=\"mr-8\">\n      <span>{{ \"admin.layout.CANCEL\" | translate }}</span>\n    </button>\n    <button\n      nz-button\n      nzType=\"primary\"\n      (click)=\"onAddRoleGrant(form, formDirective)\"\n    >\n      <span>{{ \"admin.layout.SUBMIT\" | translate }}</span>\n    </button>\n  </div>\n</nz-drawer>\n<!-- End Form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/roles/roles.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/roles/roles.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ROLES\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.ROLE_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #roleTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr>\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"filter($event, column.id)\"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of roleTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id].length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'select'\">\n                        <nz-select\n                          (ngModelChange)=\"onChangeRoleAcp(data.id)\"\n                          [(ngModel)]=\"data.roleAcp\"\n                        >\n                          <ng-container>\n                            <nz-option\n                              [nzValue]=\"true\"\n                              [nzLabel]=\"'YES'\"\n                            ></nz-option>\n                            <nz-option\n                              [nzValue]=\"false\"\n                              [nzLabel]=\"'NO'\"\n                            ></nz-option>\n                          </ng-container>\n                        </nz-select>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'checkbox'\">\n                        <label\n                          (ngModelChange)=\"onUpdateDefaultSignUp(data)\"\n                          nz-checkbox\n                          [(ngModel)]=\"data[column.id]\"\n                        ></label>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    >\n                    </i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"openForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_ROLES\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n\n<!-- Form -->\n<nz-drawer\n  [nzBodyStyle]=\"{\n    height: 'calc(100% - 55px)',\n    overflow: 'auto',\n    'padding-bottom': '53px'\n  }\"\n  [nzMaskClosable]=\"false\"\n  [nzVisible]=\"visible\"\n  [nzTitle]=\"\n    (editing ? 'admin.layout.EDIT_ROLE' : 'admin.layout.CREATE_NEW_ROLE')\n      | translate\n  \"\n  (nzOnClose)=\"closeForm()\"\n>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"24\">\n      <div nz-col nzSpan=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.NAME\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'name') }\"\n          >\n            <input\n              formControlName=\"name\"\n              [(ngModel)]=\"selectedEdit.name\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_NAME' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'name')\"\n            [errors]=\"f.name.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n  </form>\n  <div class=\"footer\">\n    <button nz-button nzType=\"default\" (click)=\"closeForm()\" class=\"mr-8\">\n      <span>{{ \"admin.layout.CANCEL\" | translate }}</span>\n    </button>\n    <button nz-button nzType=\"primary\" (click)=\"onAddRole(form, formDirective)\">\n      <span>{{ \"admin.layout.SUBMIT\" | translate }}</span>\n    </button>\n  </div>\n</nz-drawer>\n<!-- End Form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item\n      >{{ \"admin.layout.SURVEY_COLLECTORS\" | translate }}\n    </nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_COLLECTORS_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #userTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns?.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <th\n                  *ngIf=\"showMoveToFolder\"\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    [nzAlign]=\"'center'\"\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      onFilter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate | uppercase }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"filter.searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th *ngIf=\"!showMoveToFolder\" [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate | uppercase }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of userTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td\n                    [nzAlign]=\"'center'\"\n                    [ngClass]=\"column.className\"\n                    *ngIf=\"!column.hidden\"\n                  >\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <div\n                          *ngIf=\"data[column.id]?.length > 40\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          <a\n                            *ngIf=\"column.action\"\n                            [routerLink]=\"\n                              column.action.link(data.id, data.type)\n                            \"\n                          >\n                            {{ data[column.id] | summary: 40 }}\n                          </a>\n                          <ng-container *ngIf=\"!column.action\">\n                            {{ data[column.id] | summary: 40 }}\n                          </ng-container>\n                        </div>\n                        <div *ngIf=\"data[column.id]?.length <= 40\">\n                          <a\n                            *ngIf=\"column.action\"\n                            [routerLink]=\"\n                              column.action.link(data.id, data.type)\n                            \"\n                          >\n                            {{ data[column.id] }}\n                          </a>\n                          <ng-container *ngIf=\"!column.action\">\n                            {{ data[column.id] }}\n                          </ng-container>\n                        </div>\n                        <div *ngIf=\"column.td_two\">\n                          {{ \"admin.layout.CREATED\" | translate }}\n                          {{ data[column.td_two] | date: \"yyyy-MM-dd\" }}\n                        </div>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'icon'\">\n                        <span class=\"action-icon\">\n                          <i\n                            nz-icon\n                            [nzType]=\"column?.action?.iconMap(data[column.id])\"\n                            nzTheme=\"outline\"\n                          ></i>\n                        </span>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'status'\">\n                        <span\n                          class=\"sm-badge sm-badge-sm\"\n                          [ngClass]=\"column?.action?.classMap(data[column.id])\"\n                        >\n                          <a\n                            (click)=\"\n                              column?.action?.doChangeStatus(\n                                data,\n                                data[column.id]\n                              )\n                            \"\n                            sm-tooltip-side=\"bottom\"\n                            >{{ data[column.id] }}\n                          </a>\n                        </span>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul nz-menu nzSelectable>\n                      <li\n                        (click)=\"\n                          data.status === 'OPEN'\n                            ? showCloseCollectorModal(data)\n                            : showOpenCollectorModal(data)\n                        \"\n                        nz-menu-item\n                      >\n                        <i\n                          nz-icon\n                          [nzType]=\"\n                            data.status === 'OPEN' ? 'eye-invisible' : 'eye'\n                          \"\n                          nzTheme=\"outline\"\n                        >\n                        </i>\n                        {{\n                          (data.status === \"OPEN\"\n                            ? \"admin.layout.CLOSE_COLLECTOR\"\n                            : \"admin.layout.OPEN_COLLECTOR\"\n                          ) | translate\n                        }}\n                      </li>\n                      <li\n                        [routerLink]=\"[\n                          '/create',\n                          'collector-responses',\n                          'collector-link',\n                          data.id\n                        ]\"\n                        nz-menu-item\n                      >\n                        <i nz-icon nzType=\"form\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT_COLLECTOR\" | translate }}\n                      </li>\n                      <li (click)=\"showRenameCollectorModal(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.RENAME_COLLECTOR\" | translate }}\n                      </li>\n                      <li\n                        (click)=\"\n                          showClearResponsesConfirm(\n                            data,\n                            tplContentClearResponsesCollector\n                          )\n                        \"\n                        nz-menu-item\n                      >\n                        <i nz-icon nzType=\"close-circle\" nzTheme=\"outline\"> </i>\n                        {{ \"admin.layout.CLEAR_ALL_RESPONSES\" | translate }}\n                      </li>\n                      <li\n                        (click)=\"\n                          showDeleteConfirm(data, tplContentDeleteCollector)\n                        \"\n                        nz-menu-item\n                      >\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"> </i>\n                        {{ \"admin.layout.DELETE_COLLECTOR\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteMultyConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_SURVEY_COLLECTORS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"filter.searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n<!-- Template content modal delele -->\n<ng-template #tplContentDeleteCollector>\n  <div>\n    {{ \"default.layout.COLLECTOR_NICKNAME\" | translate }}:\n    {{ surveyCollectorDelete?.name }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_CREATED\" | translate }}:\n    {{ surveyCollectorDelete?.createdAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_MODIFIED\" | translate }}:\n    {{ surveyCollectorDelete?.updatedAt | date: \"medium\" }}\n  </div>\n</ng-template>\n<!-- End Template content modal delele -->\n\n<!-- Template content modal clear response -->\n<ng-template #tplContentClearResponsesCollector>\n  <div>\n    {{ \"default.layout.COLLECTOR_NICKNAME\" | translate }}:\n    {{ surveyCollectorClearResponses?.name }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_CREATED\" | translate }}:\n    {{ surveyCollectorClearResponses?.createdAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_MODIFIED\" | translate }}:\n    {{ surveyCollectorClearResponses?.updatedAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.NUMBER_OF_RESPONSES\" | translate }}:\n    {{ surveyCollectorClearResponses?.response }}\n  </div>\n</ng-template>\n<!-- End Template content modal clear response -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-folders/survey-folders.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-folders/survey-folders.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_FOLDERS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_FOLDER_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #surveyFolderTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr>\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"filter($event, column.id)\"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of surveyFolderTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id].length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"openForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_SURVEY_FOLDERS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Form -->\n<nz-drawer\n  [nzBodyStyle]=\"{\n    height: 'calc(100% - 55px)',\n    overflow: 'auto',\n    'padding-bottom': '53px'\n  }\"\n  [nzMaskClosable]=\"false\"\n  [nzVisible]=\"visible\"\n  [nzTitle]=\"\n    (editing\n      ? 'admin.layout.EDIT_SURVEY_FOLDER'\n      : 'admin.layout.CREATE_NEW_SURVEY_FOLDER'\n    ) | translate\n  \"\n  (nzOnClose)=\"closeForm()\"\n>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"24\">\n      <div nz-col nzSpan=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.TITLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'title') }\"\n          >\n            <input\n              formControlName=\"title\"\n              [(ngModel)]=\"selectedEdit.title\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_TITLE' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'title')\"\n            [errors]=\"f.title.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"24\">\n      <div nz-col nzSpan=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.USER\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'userId') }\"\n          >\n            <nz-select\n              [(ngModel)]=\"selectedEdit.userId\"\n              [nzPlaceHolder]=\"'admin.layout.SELECT_USER' | translate\"\n              nzAllowClear\n              nzShowSearch\n              [nzServerSearch]=\"true\"\n              formControlName=\"userId\"\n              (nzOnSearch)=\"onSearch($event)\"\n            >\n              <ng-container *ngFor=\"let o of listOfUser\">\n                <nz-option\n                  *ngIf=\"!isLoading\"\n                  [nzValue]=\"o.id\"\n                  [nzLabel]=\"o.userName\"\n                ></nz-option>\n              </ng-container>\n              <nz-option *ngIf=\"isLoading\" nzDisabled nzCustomContent>\n                <i nz-icon nzType=\"loading\" class=\"loading-icon\"></i>\n                {{ \"admin.layout.LOADING_DATA\" | translate }}\n              </nz-option>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'userId')\"\n            [errors]=\"f.userId.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n  </form>\n  <div class=\"footer\">\n    <button nz-button nzType=\"default\" (click)=\"closeForm()\" class=\"mr-8\">\n      <span>{{ \"admin.layout.CANCEL\" | translate }}</span>\n    </button>\n    <button\n      nz-button\n      nzType=\"primary\"\n      (click)=\"onAddSurveyFolder(form, formDirective)\"\n    >\n      <span>{{ \"admin.layout.SUBMIT\" | translate }}</span>\n    </button>\n  </div>\n</nz-drawer>\n<!-- End Form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_FORMS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_FORM_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card\n        [nzTitle]=\"'admin.layout.DESIGN_YOUR_SURVEY' | translate\"\n        [style.marginBottom.px]=\"24\"\n        [nzExtra]=\"extraTemplate\"\n      >\n        <div nz-row *ngIf=\"surveyFormDetail\">\n          <survey-creator\n            [json]=\"surveyFormDetail.json\"\n            (surveySaved)=\"onSurveySaved($event)\"\n          >\n          </survey-creator>\n        </div>\n        <nz-skeleton *ngIf=\"!surveyFormDetail\" [nzActive]=\"true\"></nz-skeleton>\n      </nz-card>\n      <ng-template #extraTemplate>\n        <button\n          nz-button\n          nzType=\"dashed\"\n          [routerLink]=\"['/admin', 'survey-forms']\"\n        >\n          <i nz-icon nzType=\"left\" nzTheme=\"outline\"></i> Cancel\n        </button>\n      </ng-template>\n    </div>\n  </div>\n</app-page>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_FORMS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_FORM_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #surveyForm\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      filter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of surveyForm.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id] && data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p\n                          *ngIf=\"\n                            !data[column.id] || data[column.id].length <= 12\n                          \"\n                        >\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{\n                          data[column.id] | date: \"yyyy-MM-dd hh:mm\"\n                        }}</ng-container\n                      >\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li\n                        (click)=\"\n                          openModal(\n                            tplTitleModal,\n                            tplContentModal,\n                            tplFooterModal,\n                            data\n                          )\n                        \"\n                        nz-menu-item\n                      >\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                      <li\n                        [routerLink]=\"['/admin', 'survey-forms', data.id]\"\n                        nz-menu-item\n                      >\n                        <i nz-icon nzType=\"form\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.CREATOR_SURVEY\" | translate }}\n                      </li>\n                      <li (click)=\"viewSurveyForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.VIEW_SURVEY\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openModal(tplTitleModal, tplContentModal, tplFooterModal)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_USERS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n\n<!-- Template Modal -->\n<ng-template #tplTitleModal>\n  <span>{{\n    (editing\n      ? \"admin.layout.EDIT_SURVEY_FORM\"\n      : \"admin.layout.CREATE_NEW_SURVEY_FORM\"\n    ) | translate\n  }}</span>\n</ng-template>\n<ng-template #tplContentModal>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"24\">\n      <div nz-col nzSpan=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.TITLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'title') }\"\n          >\n            <input\n              formControlName=\"title\"\n              [(ngModel)]=\"selectedEdit.title\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_TITLE' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'title')\"\n            [errors]=\"f.title.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"24\">\n      <div nz-col nzSpan=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.DESCRIPTION\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'description') }\"\n          >\n            <input\n              formControlName=\"description\"\n              [(ngModel)]=\"selectedEdit.description\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_DESCRIPTION' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'description')\"\n            [errors]=\"f.description.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n  </form>\n</ng-template>\n<ng-template #tplFooterModal>\n  <button nz-button nzType=\"default\" (click)=\"closeModal()\" class=\"mr-8\">\n    {{ \"admin.layout.CANCEL\" | translate }}\n  </button>\n  <button\n    *ngIf=\"editing\"\n    nz-button\n    nzType=\"default\"\n    (click)=\"gotoSurveyCreator()\"\n    class=\"mr-8\"\n  >\n    {{ \"admin.layout.CREATOR_SURVEY\" | translate }}\n  </button>\n  <button\n    nz-button\n    nzType=\"primary\"\n    (click)=\"onAddSurveyForm(form, formDirective)\"\n    [nzLoading]=\"buttonLoading\"\n  >\n    {{ \"admin.layout.SUBMIT\" | translate }}\n  </button>\n</ng-template>\n<!-- End Template Modal -->\n\n<!-- Template Modal -->\n<ng-template #tplTitleModalView>\n  <span>{{ \"admin.layout.VIEW_SURVEY\" | translate }}</span>\n</ng-template>\n<ng-template #tplContentModalView>\n  <div *ngIf=\"selectSurveyView\">\n    <app-survey [json]=\"selectSurveyView.json\" [disabled]=\"true\"></app-survey>\n  </div>\n</ng-template>\n<ng-template #tplFooterModalView>\n  <button nz-button nzType=\"default\" (click)=\"closeModal()\" class=\"mr-8\">\n    {{ \"admin.layout.CANCEL\" | translate }}\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_RECIPIENTS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_RECIPIENTS_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #surveySendTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns?.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      onFilter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"filter.searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of surveySendTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id]?.length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id]?.length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'select'\">\n                        <nz-select\n                          (ngModelChange)=\"onChangeRole($event, data.id)\"\n                          [(ngModel)]=\"data.role.id\"\n                        >\n                          <ng-container *ngFor=\"let o of listOfAllRole\">\n                            <nz-option\n                              [nzValue]=\"o.value\"\n                              [nzLabel]=\"o.text\"\n                            ></nz-option>\n                          </ng-container>\n                        </nz-select>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_SURVEY_SENDS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"filter.searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-responses/survey-responses.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-responses/survey-responses.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_RESPONSES\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_RESPONSES_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #surveyResponseTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns?.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      onFilter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"filter.searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of surveyResponseTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id]?.length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id]?.length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'number'\">\n                        {{ data[column.id] }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'select'\">\n                        <nz-select\n                          (ngModelChange)=\"onChangeRole($event, data.id)\"\n                          [(ngModel)]=\"data.role.id\"\n                        >\n                          <ng-container *ngFor=\"let o of listOfAllRole\">\n                            <nz-option\n                              [nzValue]=\"o.value\"\n                              [nzLabel]=\"o.text\"\n                            ></nz-option>\n                          </ng-container>\n                        </nz-select>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                      <li (click)=\"viewSurveyForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.VIEW_SURVEY\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_SURVEY_SENDS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"filter.searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n\n<!-- Template Modal -->\n<ng-template #tplTitleModalView>\n  <span>{{ \"admin.layout.VIEW_SURVEY\" | translate }}</span>\n</ng-template>\n<ng-template #tplContentModalView>\n  <div *ngIf=\"selectSurveyView\">\n    <app-survey-response\n      *ngIf=\"selectSurveyView\"\n      [disabled]=\"true\"\n      [data]=\"selectSurveyView?.json\"\n      [json]=\"selectSurveyView?.surveyForm?.json\"\n    >\n    </app-survey-response>\n  </div>\n</ng-template>\n<ng-template #tplFooterModalView>\n  <button nz-button nzType=\"default\" (click)=\"closeModal()\" class=\"mr-8\">\n    {{ \"admin.layout.CANCEL\" | translate }}\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-sends/survey-sends.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/survey-sends/survey-sends.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.SURVEY_SENDS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.SURVEY_SENDS_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #surveySendTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns?.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      onFilter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"filter.searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of surveySendTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id]?.length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id]?.length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'select'\">\n                        <nz-select\n                          (ngModelChange)=\"onChangeRole($event, data.id)\"\n                          [(ngModel)]=\"data.role.id\"\n                        >\n                          <ng-container *ngFor=\"let o of listOfAllRole\">\n                            <nz-option\n                              [nzValue]=\"o.value\"\n                              [nzLabel]=\"o.text\"\n                            ></nz-option>\n                          </ng-container>\n                        </nz-select>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_SURVEY_SENDS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"filter.searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/user-grants/user-grants.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/user-grants/user-grants.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.USER_GRANTS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.USER_GRANT_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #userTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr>\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      filter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of userTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id].length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'checkbox'\">\n                        <label\n                          (ngModelChange)=\"onUpdateAction(data.id, column.id)\"\n                          nz-checkbox\n                          [(ngModel)]=\"data[column.id]\"\n                        ></label>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    >\n                    </i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"openForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_USER_GRANTS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Form -->\n<nz-drawer\n  [nzBodyStyle]=\"{\n    height: 'calc(100% - 55px)',\n    overflow: 'auto',\n    'padding-bottom': '53px'\n  }\"\n  [nzMaskClosable]=\"false\"\n  [nzVisible]=\"visible\"\n  [nzTitle]=\"\n    (editing\n      ? 'admin.layout.EDIT_USER_GRANT'\n      : 'admin.layout.CREATE_NEW_USER_GRANT'\n    ) | translate\n  \"\n  (nzOnClose)=\"closeForm()\"\n  [nzWidth]=\"screenWidth < 768 ? 256 : 560\"\n>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.USER\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'userId') }\"\n          >\n            <nz-select\n              [(ngModel)]=\"selectedEdit.userId\"\n              [nzPlaceHolder]=\"'admin.layout.SELECT_USER' | translate\"\n              nzAllowClear\n              nzShowSearch\n              formControlName=\"userId\"\n              [nzServerSearch]=\"true\"\n              (nzOnSearch)=\"onSearch($event)\"\n            >\n              <ng-container *ngFor=\"let o of listOfUser\">\n                <nz-option\n                  *ngIf=\"!isLoading\"\n                  [nzValue]=\"o.id\"\n                  [nzLabel]=\"o.userName\"\n                ></nz-option>\n              </ng-container>\n              <nz-option *ngIf=\"isLoading\" nzDisabled nzCustomContent>\n                <i nz-icon nzType=\"loading\" class=\"loading-icon\"></i>\n                {{ \"admin.layout.LOADING_DATA\" | translate }}\n              </nz-option>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'userId')\"\n            [errors]=\"f.userId.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.TABLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'tableName') }\"\n          >\n            <nz-select\n              nzShowSearch\n              nzAllowClear\n              [nzPlaceHolder]=\"'admin.layout.SELECT_TABLE' | translate\"\n              formControlName=\"tableName\"\n              [(ngModel)]=\"selectedEdit.tableName\"\n            >\n              <ng-container *ngFor=\"let o of listOfAllTable\">\n                <nz-option [nzValue]=\"o.value\" [nzLabel]=\"o.text\"></nz-option>\n              </ng-container>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'tableName')\"\n            [errors]=\"f.tableName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"24\" nzMd=\"24\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.RECORD_ID\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'recordId') }\"\n          >\n            <input\n              formControlName=\"recordId\"\n              [(ngModel)]=\"selectedEdit.recordId\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_RECORD_ID' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'recordId')\"\n            [errors]=\"f.recordId.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"24\" nzMd=\"24\" nzSm=\"24\">\n        <nz-table\n          [nzBordered]=\"true\"\n          [nzData]=\"[null]\"\n          [nzShowPagination]=\"false\"\n        >\n          <thead>\n            <tr>\n              <th>{{ \"admin.layout.CAN_VIEW\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_INSERT\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_UPDATE\" | translate }}</th>\n              <th>{{ \"admin.layout.CAN_DELETE\" | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canView\"\n                  formControlName=\"canView\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canInsert\"\n                  formControlName=\"canInsert\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canUpdate\"\n                  formControlName=\"canUpdate\"\n                ></label>\n              </td>\n              <td>\n                <label\n                  nz-checkbox\n                  [(ngModel)]=\"selectedEdit.canDelete\"\n                  formControlName=\"canDelete\"\n                ></label>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n      </div>\n    </div>\n  </form>\n  <div class=\"footer\">\n    <button nz-button nzType=\"default\" (click)=\"closeForm()\" class=\"mr-8\">\n      <span>{{ \"admin.layout.CANCEL\" | translate }}</span>\n    </button>\n    <button\n      nz-button\n      nzType=\"primary\"\n      (click)=\"onAddUserGrant(form, formDirective)\"\n    >\n      <span>{{ \"admin.layout.SUBMIT\" | translate }}</span>\n    </button>\n  </div>\n</nz-drawer>\n<!-- End Form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/users/users.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/pages/users/users.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #header>\n  <nz-breadcrumb>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.ADMIN\" | translate\n    }}</nz-breadcrumb-item>\n    <nz-breadcrumb-item>{{\n      \"admin.layout.USERS\" | translate\n    }}</nz-breadcrumb-item>\n  </nz-breadcrumb>\n</ng-template>\n\n<app-page\n  [header]=\"header\"\n  [title]=\"'admin.layout.USER_MANAGERMENT' | translate\"\n>\n  <div nz-row [nzGutter]=\"24\">\n    <div\n      nz-col\n      [nzLg]=\"24\"\n      [nzMd]=\"24\"\n      [nzSm]=\"24\"\n      [nzXs]=\"24\"\n      [style.marginBottom.px]=\"24\"\n    >\n      <nz-card [style.marginBottom.px]=\"24\">\n        <div nz-row>\n          <nz-table\n            #userTable\n            nzShowPagination\n            nzShowSizeChanger\n            [nzData]=\"listOfAllData\"\n            [nzPageSize]=\"pagging.pageSize\"\n            [nzTotal]=\"pagging.total\"\n            [nzFrontPagination]=\"false\"\n            (nzPageIndexChange)=\"pageIndexChange($event)\"\n            (nzPageSizeChange)=\"pageSizeChange($event)\"\n            [nzBordered]=\"true\"\n            [nzTitle]=\"titleTemplate\"\n          >\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n              <tr *ngIf=\"columns.length > 0\">\n                <th>{{ \"admin.layout.TABLE_NO\" | translate }}</th>\n                <th\n                  nzShowCheckbox\n                  [(nzChecked)]=\"isAllDisplayDataChecked\"\n                  (nzCheckedChange)=\"checkAll($event)\"\n                  [nzIndeterminate]=\"isIndeterminate\"\n                ></th>\n                <ng-container *ngFor=\"let column of columns\">\n                  <th\n                    nzCustomFilter\n                    *ngIf=\"!column.hidden\"\n                    [nzShowSort]=\"column.sortable\"\n                    [nzSortKey]=\"column.id\"\n                    [nzShowFilter]=\"column.filter\"\n                    [nzFilters]=\"column.filter ? column.filter : []\"\n                    (nzFilterChange)=\"\n                      filter($event, column.filterKey || column.id)\n                    \"\n                  >\n                    {{ column.header | translate }}\n                    <i\n                      *ngIf=\"column.search\"\n                      class=\"ant-table-filter-icon\"\n                      nz-icon\n                      nz-dropdown\n                      #dropdown=\"nzDropdown\"\n                      nzType=\"search\"\n                      [nzDropdownMenu]=\"menuSearch\"\n                      [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                      nzTrigger=\"click\"\n                      nzPlacement=\"bottomRight\"\n                      [nzClickHide]=\"false\"\n                      nzTableFilter\n                      (click)=\"searchKey = column.id\"\n                    >\n                    </i>\n                  </th>\n                </ng-container>\n                <th [nzAlign]=\"'center'\">\n                  {{ \"admin.layout.ACTION\" | translate }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of userTable.data; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td\n                  nzShowCheckbox\n                  [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                  [nzDisabled]=\"data.disabled\"\n                  (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                ></td>\n                <ng-container *ngFor=\"let column of columns\">\n                  <td *ngIf=\"!column.hidden\">\n                    <ng-container [ngSwitch]=\"column.type\">\n                      <ng-container *ngSwitchCase=\"'text'\">\n                        <p\n                          *ngIf=\"data[column.id].length > 12\"\n                          [nzTooltipTitle]=\"data[column.id]\"\n                          nzTooltipPlacement=\"top\"\n                          nz-tooltip\n                        >\n                          {{ data[column.id] | summary }}\n                        </p>\n                        <p *ngIf=\"data[column.id].length <= 12\">\n                          {{ data[column.id] }}\n                        </p>\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'date'\">\n                        <i nz-icon nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n                        {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                      </ng-container>\n                      <ng-container *ngSwitchCase=\"'select'\">\n                        <nz-select\n                          (ngModelChange)=\"onChangeRole($event, data.id)\"\n                          [(ngModel)]=\"data.role.id\"\n                        >\n                          <ng-container *ngFor=\"let o of listOfAllRole\">\n                            <nz-option\n                              [nzValue]=\"o.value\"\n                              [nzLabel]=\"o.text\"\n                            ></nz-option>\n                          </ng-container>\n                        </nz-select>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n                <td [nzAlign]=\"'center'\">\n                  <a\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <i\n                      nz-icon\n                      nzType=\"ellipsis\"\n                      nzTheme=\"outline\"\n                      class=\"icon-action\"\n                    ></i>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul class=\"dropdown-action\" nz-menu nzSelectable>\n                      <li (click)=\"openForm(data)\" nz-menu-item>\n                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.EDIT\" | translate }}\n                      </li>\n                      <li (click)=\"showDeleteConfirm(data.id)\" nz-menu-item>\n                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                        {{ \"admin.layout.DELETE\" | translate }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</app-page>\n<!-- Title Table -->\n<ng-template #titleTemplate>\n  <app-title-table\n    [numberOfChecked]=\"numberOfChecked\"\n    [results]=\"pagging.total\"\n    [columns]=\"columns\"\n    (export)=\"onExport($event)\"\n    (openForm)=\"openForm($event)\"\n  >\n    <ul\n      #action\n      class=\"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical\"\n    >\n      <li class=\"ant-dropdown-menu-item\" (click)=\"showDeleteConfirm()\">\n        {{ \"admin.layout.DELETE_CHECK_USERS\" | translate }}\n      </li>\n    </ul>\n  </app-title-table>\n</ng-template>\n<!-- End Title Table -->\n<!-- Box Search -->\n<nz-dropdown-menu #menuSearch=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      [placeholder]=\"'admin.layout.SEARCH' | translate\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      {{ \"admin.layout.SEARCH\" | translate }}\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">\n      {{ \"admin.layout.RESET\" | translate }}\n    </button>\n  </div>\n</nz-dropdown-menu>\n<!-- End Box Search -->\n<!-- Form -->\n<nz-drawer\n  [nzBodyStyle]=\"{\n    height: 'calc(100% - 55px)',\n    overflow: 'auto',\n    'padding-bottom': '53px'\n  }\"\n  [nzMaskClosable]=\"false\"\n  [nzVisible]=\"visible\"\n  [nzTitle]=\"\n    (editing ? 'admin.layout.EDIT_USER' : 'admin.layout.CREATE_NEW_USER')\n      | translate\n  \"\n  (nzOnClose)=\"closeForm()\"\n  [nzWidth]=\"screenWidth < 768 ? 256 : 560\"\n>\n  <form #formDirective=\"ngForm\" [formGroup]=\"form\" nz-form>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.FIRST_NAME\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'firstName') }\"\n          >\n            <input\n              formControlName=\"firstName\"\n              [(ngModel)]=\"selectedEdit.firstName\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_FIRSTNAME' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'firstName')\"\n            [errors]=\"f.firstName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.LAST_NAME\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'lastName') }\"\n          >\n            <input\n              formControlName=\"lastName\"\n              [(ngModel)]=\"selectedEdit.lastName\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_LASTNAME' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'lastName')\"\n            [errors]=\"f.lastName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.EMAIL\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'email') }\"\n          >\n            <input\n              formControlName=\"email\"\n              [(ngModel)]=\"selectedEdit.email\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_EMAIL' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'email')\"\n            [errors]=\"f.email.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.USER_NAME\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'userName') }\"\n          >\n            <input\n              formControlName=\"userName\"\n              [(ngModel)]=\"selectedEdit.userName\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_USERNAME' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'userName')\"\n            [errors]=\"f.userName.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.PASSWORD\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'password') }\"\n          >\n            <input\n              type=\"password\"\n              autocomplete=\"password\"\n              formControlName=\"password\"\n              [(ngModel)]=\"selectedEdit.password\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_PASSWORD' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'password')\"\n            [errors]=\"f.password.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{\n            \"admin.layout.CONFIRM_PASSWORD\" | translate\n          }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'confirmPassword') }\"\n          >\n            <input\n              type=\"password\"\n              autocomplete=\"confirmPassword\"\n              formControlName=\"confirmPassword\"\n              [(ngModel)]=\"selectedEdit.confirmPassword\"\n              nz-input\n              [placeholder]=\"'admin.layout.ENTER_CONFIRM_PASSWORD' | translate\"\n            />\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'confirmPassword')\"\n            [errors]=\"f.confirmPassword.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzXl=\"12\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>{{ \"admin.layout.ROLE\" | translate }}</nz-form-label>\n          <nz-form-control\n            [ngClass]=\"{ 'has-error': isFieldValid(form, 'roleId') }\"\n          >\n            <nz-select\n              nzShowSearch\n              nzAllowClear\n              [nzPlaceHolder]=\"'admin.layout.SELECT_ROLE' | translate\"\n              formControlName=\"roleId\"\n              [(ngModel)]=\"selectedEdit.role.id\"\n            >\n              <ng-container *ngFor=\"let o of listOfAllRole\">\n                <nz-option [nzValue]=\"o.value\" [nzLabel]=\"o.text\"></nz-option>\n              </ng-container>\n            </nz-select>\n          </nz-form-control>\n          <field-error-display\n            [displayError]=\"isFieldValid(form, 'roleId')\"\n            [errors]=\"f.roleId.errors\"\n          ></field-error-display>\n        </nz-form-item>\n      </div>\n    </div>\n  </form>\n  <div class=\"footer\">\n    <button nz-button nzType=\"default\" (click)=\"closeForm()\" class=\"mr-8\">\n      <span>{{ \"admin.layout.CANCEL\" | translate }}</span>\n    </button>\n    <button nz-button nzType=\"primary\" (click)=\"onAddUser(form, formDirective)\">\n      <span>{{ \"admin.layout.SUBMIT\" | translate }}</span>\n    </button>\n  </div>\n</nz-drawer>\n<!-- End Form -->\n"

/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_survey_forms_survey_forms_creator_survey_forms_creator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/survey-forms/survey-forms-creator/survey-forms-creator.component */ "./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing */ "./src/app/modules/admin/admin.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/modules/admin/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/roles/roles.component */ "./src/app/modules/admin/pages/roles/roles.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/modules/admin/pages/users/users.component.ts");
/* harmony import */ var _pages_role_grants_role_grants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/role-grants/role-grants.component */ "./src/app/modules/admin/pages/role-grants/role-grants.component.ts");
/* harmony import */ var _pages_user_grants_user_grants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user-grants/user-grants.component */ "./src/app/modules/admin/pages/user-grants/user-grants.component.ts");
/* harmony import */ var _pages_survey_folders_survey_folders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/survey-folders/survey-folders.component */ "./src/app/modules/admin/pages/survey-folders/survey-folders.component.ts");
/* harmony import */ var _pages_survey_responses_survey_responses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/survey-responses/survey-responses.component */ "./src/app/modules/admin/pages/survey-responses/survey-responses.component.ts");
/* harmony import */ var _pages_survey_forms_survey_forms_survey_forms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/survey-forms/survey-forms/survey-forms.component */ "./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.ts");
/* harmony import */ var _pages_survey_collectors_survey_collectors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/survey-collectors/survey-collectors.component */ "./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.ts");
/* harmony import */ var _pages_survey_sends_survey_sends_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/survey-sends/survey-sends.component */ "./src/app/modules/admin/pages/survey-sends/survey-sends.component.ts");
/* harmony import */ var _pages_survey_recipients_survey_recipients_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/survey-recipients/survey-recipients.component */ "./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.ts");
















var COMPONENTS = [
    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
    _pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"],
    _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
    _pages_role_grants_role_grants_component__WEBPACK_IMPORTED_MODULE_8__["RoleGrantsComponent"],
    _pages_user_grants_user_grants_component__WEBPACK_IMPORTED_MODULE_9__["UserGrantsComponent"],
    _pages_survey_folders_survey_folders_component__WEBPACK_IMPORTED_MODULE_10__["SurveyFoldersComponent"],
    _pages_survey_forms_survey_forms_survey_forms_component__WEBPACK_IMPORTED_MODULE_12__["SurveyFormsComponent"],
    _pages_survey_responses_survey_responses_component__WEBPACK_IMPORTED_MODULE_11__["SurveyResponsesComponent"],
    _pages_survey_forms_survey_forms_creator_survey_forms_creator_component__WEBPACK_IMPORTED_MODULE_1__["SurveyFormsCreatorComponent"],
    _pages_survey_collectors_survey_collectors_component__WEBPACK_IMPORTED_MODULE_13__["SurveyCollectorsComponent"],
    _pages_survey_sends_survey_sends_component__WEBPACK_IMPORTED_MODULE_14__["SurveySendsComponent"],
    _pages_survey_recipients_survey_recipients_component__WEBPACK_IMPORTED_MODULE_15__["SurveyRecipientsComponent"]
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _admin_routing__WEBPACK_IMPORTED_MODULE_4__["AdminRouting"]],
            declarations: COMPONENTS.slice()
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/admin/admin.routing.ts ***!
  \************************************************/
/*! exports provided: AdminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouting", function() { return AdminRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/roles/roles.component */ "./src/app/modules/admin/pages/roles/roles.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/modules/admin/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/modules/admin/pages/users/users.component.ts");
/* harmony import */ var _pages_role_grants_role_grants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/role-grants/role-grants.component */ "./src/app/modules/admin/pages/role-grants/role-grants.component.ts");
/* harmony import */ var _pages_user_grants_user_grants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-grants/user-grants.component */ "./src/app/modules/admin/pages/user-grants/user-grants.component.ts");
/* harmony import */ var _pages_survey_folders_survey_folders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/survey-folders/survey-folders.component */ "./src/app/modules/admin/pages/survey-folders/survey-folders.component.ts");
/* harmony import */ var _pages_survey_responses_survey_responses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/survey-responses/survey-responses.component */ "./src/app/modules/admin/pages/survey-responses/survey-responses.component.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _pages_survey_forms_survey_forms_survey_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/survey-forms/survey-forms/survey-forms.component */ "./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.ts");
/* harmony import */ var _pages_survey_forms_survey_forms_creator_survey_forms_creator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/survey-forms/survey-forms-creator/survey-forms-creator.component */ "./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.ts");
/* harmony import */ var _pages_survey_collectors_survey_collectors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/survey-collectors/survey-collectors.component */ "./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.ts");
/* harmony import */ var _pages_survey_sends_survey_sends_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/survey-sends/survey-sends.component */ "./src/app/modules/admin/pages/survey-sends/survey-sends.component.ts");
/* harmony import */ var _pages_survey_recipients_survey_recipients_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/survey-recipients/survey-recipients.component */ "./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.ts");
















var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    },
    {
        path: "roles",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]
    },
    {
        path: "users",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
    },
    {
        path: "role-grants",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_role_grants_role_grants_component__WEBPACK_IMPORTED_MODULE_6__["RoleGrantsComponent"]
    },
    {
        path: "user-grants",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_user_grants_user_grants_component__WEBPACK_IMPORTED_MODULE_7__["UserGrantsComponent"]
    },
    {
        path: "survey-folders",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_folders_survey_folders_component__WEBPACK_IMPORTED_MODULE_8__["SurveyFoldersComponent"]
    },
    {
        path: "survey-forms",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_forms_survey_forms_survey_forms_component__WEBPACK_IMPORTED_MODULE_11__["SurveyFormsComponent"]
    },
    {
        path: "survey-forms/:surveyFormId",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_forms_survey_forms_creator_survey_forms_creator_component__WEBPACK_IMPORTED_MODULE_12__["SurveyFormsCreatorComponent"]
    },
    {
        path: "survey-responses",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_responses_survey_responses_component__WEBPACK_IMPORTED_MODULE_9__["SurveyResponsesComponent"]
    },
    {
        path: "survey-collectors",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_collectors_survey_collectors_component__WEBPACK_IMPORTED_MODULE_13__["SurveyCollectorsComponent"]
    },
    {
        path: "survey-sends",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_sends_survey_sends_component__WEBPACK_IMPORTED_MODULE_14__["SurveySendsComponent"]
    },
    {
        path: "survey-recipients",
        canActivateChild: [_app_core__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _pages_survey_recipients_survey_recipients_component__WEBPACK_IMPORTED_MODULE_15__["SurveyRecipientsComponent"]
    }
];
var AdminRouting = /** @class */ (function () {
    function AdminRouting() {
    }
    AdminRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRouting);
    return AdminRouting;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/dashboard/dashboard.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/pages/dashboard/dashboard.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin/pages/dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-dashboard",
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/admin/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/role-grants/role-grants.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/pages/role-grants/role-grants.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3JvbGUtZ3JhbnRzL3JvbGUtZ3JhbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3JvbGUtZ3JhbnRzL3JvbGUtZ3JhbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvcm9sZS1ncmFudHMvcm9sZS1ncmFudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/role-grants/role-grants.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/pages/role-grants/role-grants.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoleGrantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGrantsComponent", function() { return RoleGrantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var RoleGrantsComponent = /** @class */ (function () {
    function RoleGrantsComponent(translateService, nzMessageService, modalService, loaderService, roleGrantService, roleService, formBuilder, windowresizeService, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.roleGrantService = roleGrantService;
        this.roleService = roleService;
        this.formBuilder = formBuilder;
        this.windowresizeService = windowresizeService;
        this.excelService = excelService;
        this.listOfAllData = [];
        this.listOfAllRole = [];
        this.listOfAllTable = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.filterKey = "";
        this.filterValue = [];
        this.searchKey = "";
        this.searchValue = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    RoleGrantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        this.listOfAllTable = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].dbTable.map(function (o) {
            return { text: o, value: o };
        });
        this.buildForm();
        this.getRoleGrantList();
        this.getRoleList();
    };
    RoleGrantsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    RoleGrantsComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            {
                id: "roleName",
                type: "text",
                filter: this.listOfAllRole,
                filterKey: "roleId",
                header: "admin.layout.ROLE"
            },
            {
                id: "tableName",
                type: "text",
                sortable: true,
                filter: this.listOfAllTable,
                header: "admin.layout.TABLE_NAME"
            },
            {
                id: "canViewAll",
                type: "checkbox",
                header: "admin.layout.CAN_VIEW_ALL"
            },
            {
                id: "canSelfView",
                type: "checkbox",
                header: "admin.layout.CAN_SELF_VIEW"
            },
            { id: "canInsert", type: "checkbox", header: "admin.layout.CAN_INSERT" },
            { id: "canUpdate", type: "checkbox", header: "admin.layout.CAN_UPDATE" },
            { id: "canDelete", type: "checkbox", header: "admin.layout.CAN_DELETE" },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                hidden: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                hidden: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    RoleGrantsComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            tableName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            canViewAll: [false],
            canSelfView: [false],
            canInsert: [false],
            canUpdate: [false],
            canDelete: [false]
        });
    };
    RoleGrantsComponent.prototype.getRoleList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.roleService.getAllRoleList().subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllRole = res.results.map(function (o) {
                    return { text: o.name, value: o.id };
                });
                _this.mapOptionsFilter("roleId", _this.listOfAllRole);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RoleGrantsComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    RoleGrantsComponent.prototype.getRoleGrantList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.roleGrantService
            .getRoleGrantList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue, this.filterKey, JSON.stringify(this.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { roleName: o.role.name });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(RoleGrantsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RoleGrantsComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getRoleGrantList();
    };
    RoleGrantsComponent.prototype.search = function () {
        this.getRoleGrantList();
    };
    RoleGrantsComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getRoleGrantList();
    };
    RoleGrantsComponent.prototype.filter = function ($event, key) {
        this.filterKey = key;
        this.filterValue = $event;
        this.getRoleGrantList();
    };
    RoleGrantsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getRoleGrantList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    RoleGrantsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    RoleGrantsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    RoleGrantsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    RoleGrantsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getRoleGrantList();
    };
    RoleGrantsComponent.prototype.showDeleteConfirm = function (roleGrantId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.ROLE_GRANT_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (roleGrantId) {
                    return _this.onDeleteRoleGrant(roleGrantId);
                }
                return _this.onDeleteMultyRoleGrant();
            }
        });
    };
    RoleGrantsComponent.prototype.openForm = function (roleGrant) {
        this.visible = true;
        this.editing = false;
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        if (roleGrant) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, roleGrant);
        }
    };
    RoleGrantsComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    RoleGrantsComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.getRoleGrantList();
        this.editing = false;
        formDirective.resetForm();
        this.form.reset();
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        this.closeForm();
    };
    RoleGrantsComponent.prototype.onDeleteRoleGrant = function (roleGrantId) {
        var _this = this;
        this.loaderService.display(true);
        this.roleGrantService.deleteRoleGrant(roleGrantId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RoleGrantsComponent.prototype.onDeleteMultyRoleGrant = function () {
        var _this = this;
        var roleGrantIds = lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](lodash__WEBPACK_IMPORTED_MODULE_8__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.roleGrantService.deleteMultyRoleGrant({ roleGrantIds: roleGrantIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RoleGrantsComponent.prototype.onUpdateAction = function (roleGrantId, actionKey) {
        var _this = this;
        this.loaderService.display(true);
        this.roleGrantService.updateAction(roleGrantId, actionKey).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RoleGrantsComponent.prototype.onAddRoleGrant = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.roleGrantService.addRoleGrant(formData.value).subscribe(function (res) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }, function (err) {
                _this.loaderService.display(false);
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
            });
        }
        return this.roleGrantService
            .updateRoleGrant(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            _this.resetFormAfterSubmit(formDirective);
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RoleGrantsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    RoleGrantsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "role_grants", type);
    };
    RoleGrantsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleGrantService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RoleGrantsComponent.prototype, "formDirective", void 0);
    RoleGrantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-role-grants",
            template: __webpack_require__(/*! raw-loader!./role-grants.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/role-grants/role-grants.component.html"),
            styles: [__webpack_require__(/*! ./role-grants.component.scss */ "./src/app/modules/admin/pages/role-grants/role-grants.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleGrantService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], RoleGrantsComponent);
    return RoleGrantsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/roles/roles.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/pages/roles/roles.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/roles/roles.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/pages/roles/roles.component.ts ***!
  \**************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var RolesComponent = /** @class */ (function () {
    function RolesComponent(translateService, nzMessageService, modalService, loaderService, roleService, formBuilder, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.roleService = roleService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        this.listOfAllData = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.searchValue = "";
        this.searchKey = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.selectedEdit = {};
        this.buildForm();
        this.getRoleList();
    };
    RolesComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    RolesComponent.prototype.initTable = function () {
        // tslint:disable-next-line:max-line-length
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            { id: "name", type: "text", sortable: true, header: "admin.layout.NAME" },
            { id: "lastName", type: "select", header: "admin.layout.ROLE_ACP" },
            {
                id: "defaultSignUp",
                type: "checkbox",
                header: "admin.layout.SIGN_UP_DEFAULT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    RolesComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]]
        });
    };
    Object.defineProperty(RolesComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RolesComponent.prototype.getRoleList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.roleService
            .getRoleList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results;
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(err.message);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getRoleList();
    };
    RolesComponent.prototype.search = function () {
        this.getRoleList();
    };
    RolesComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getRoleList();
    };
    RolesComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getRoleList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    RolesComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    RolesComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    RolesComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    RolesComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getRoleList();
    };
    RolesComponent.prototype.showDeleteConfirm = function (roleId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_ROLE_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (roleId) {
                    return _this.onDeleteRole(roleId);
                }
                return _this.onDeleteMultyRole();
            }
        });
    };
    RolesComponent.prototype.openForm = function (role) {
        this.visible = true;
        this.editing = false;
        this.selectedEdit = {};
        if (role) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, role);
        }
    };
    RolesComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    RolesComponent.prototype.onAddRole = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_4__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.roleService.addRole(formData.value).subscribe(function (res) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }, function (err) {
                _this.loaderService.display(false);
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
            });
        }
        return this.roleService
            .updateRole(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            _this.resetFormAfterSubmit(formDirective);
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.getRoleList();
        this.editing = false;
        formDirective.resetForm();
        this.form.reset();
        this.closeForm();
    };
    RolesComponent.prototype.onDeleteRole = function (roleId) {
        var _this = this;
        this.loaderService.display(true);
        this.roleService.deleteRole(roleId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.onDeleteMultyRole = function () {
        var _this = this;
        var roleIds = lodash__WEBPACK_IMPORTED_MODULE_7__["keys"](lodash__WEBPACK_IMPORTED_MODULE_7__["pickBy"](this.mapOfCheckedId));
        this.roleService.deleteMultyRole({ roleIds: roleIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.mapOfCheckedId = {};
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.onChangeRoleAcp = function (roleId) {
        var _this = this;
        this.loaderService.display(true);
        this.roleService.changeRoleAcp(roleId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getRoleList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.onUpdateDefaultSignUp = function (role) {
        var _this = this;
        if (!role) {
            return;
        }
        this.loaderService.display(true);
        this.roleService.changeDefaultSignUp(role.id).subscribe(function (res) {
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            role.defaultSignUp = !role.defaultSignUp;
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    RolesComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    RolesComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "roles", type);
    };
    RolesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RolesComponent.prototype, "formDirective", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-roles",
            template: __webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/modules/admin/pages/roles/roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .close-collector-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n\n.sm-badge {\n  border-radius: 2px;\n  display: inline-block;\n  text-align: center;\n  color: #fff !important;\n  font-weight: 500;\n  font-size: 13px;\n  padding: 4px 12px;\n  line-height: 1.3;\n}\n\n.sm-badge.open {\n  background: #00bf6f;\n}\n\n.sm-badge.closed {\n  background: #f05b24;\n}\n\n.sm-badge a {\n  color: #fff !important;\n}\n\n.search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1jb2xsZWN0b3JzL3N1cnZleS1jb2xsZWN0b3JzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1jb2xsZWN0b3JzL3N1cnZleS1jb2xsZWN0b3JzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BoaXh1YW5ob2FuL0Rlc2lnbi1XZWIvNS4gQW5ndWxhci9EdUFuL1ByaXZhdGUtVUVULVNVUlZFWS9Gcm9udGVuZC9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURFRTtFQUNFLG1CRWpCVTtBRGlCZDs7QURFRTtFQUNFLG1CQUFBO0FDQUo7O0FERUU7RUFDRSxzQkFBQTtBQ0FKOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBRENFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlcy9zdXJ2ZXktY29sbGVjdG9ycy9zdXJ2ZXktY29sbGVjdG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbjo6bmctZGVlcCAuY2xvc2UtY29sbGVjdG9yLWRpYWxvZyB7XG4gIC5hbnQtbW9kYWwtYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIH1cbn1cbi5zbS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICYub3BlbiB7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xuICB9XG4gICYuY2xvc2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjA1YjI0O1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogOHB4O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDE4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG59XG4iLCI6Om5nLWRlZXAgLmNsb3NlLWNvbGxlY3Rvci1kaWFsb2cgLmFudC1tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbn1cblxuLnNtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5zbS1iYWRnZS5vcGVuIHtcbiAgYmFja2dyb3VuZDogIzAwYmY2Zjtcbn1cbi5zbS1iYWRnZS5jbG9zZWQge1xuICBiYWNrZ3JvdW5kOiAjZjA1YjI0O1xufVxuLnNtLWJhZGdlIGEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59IiwiLy8gY29sb3JzXG4kdGhlbWUtY29sb3I6ICMwMGJmNmY7XG4kYnJvd25pc2gtZ3JleTogIzY4Njg2ODtcbiRwYWxlLWdyZXk6ICNlYWVjZWU7XG4kcGFuZWwtYm9yZGVyLWNvbG9yOiAkcGFsZS1ncmV5O1xuJHN1cnZleS1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNoYXJjb2FsLWdyZXk6ICMzZTNmNDI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SurveyCollectorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCollectorsComponent", function() { return SurveyCollectorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/modals/open-collector/open-collector.component */ "./src/app/shared/modals/open-collector/open-collector.component.ts");
/* harmony import */ var _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/modals/close-collector/close-collector.component */ "./src/app/shared/modals/close-collector/close-collector.component.ts");
/* harmony import */ var _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/modals/rename-collector/rename-collector.component */ "./src/app/shared/modals/rename-collector/rename-collector.component.ts");










var SurveyCollectorsComponent = /** @class */ (function () {
    function SurveyCollectorsComponent(translateService, nzMessageService, modalService, loaderService, surveyCollectorService, windowresizeService, surveyResponseService, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveyCollectorService = surveyCollectorService;
        this.windowresizeService = windowresizeService;
        this.surveyResponseService = surveyResponseService;
        this.excelService = excelService;
        this.listOfAllData = [];
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.filter = {
            searchKey: "name",
            searchValue: "",
            sortField: "createdAt",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    SurveyCollectorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveyCollectorsComponent.prototype.initTable = function () {
        var _this = this;
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            {
                id: "type",
                type: "icon",
                action: {
                    iconMap: function (type) {
                        switch (type) {
                            case "WEBLINK":
                                return "link";
                            case "EMAIL":
                                return "mail";
                            default:
                                return "loading";
                        }
                    }
                },
                sortable: true,
                header: "default.layout.ICON"
            },
            { id: "formName", type: "text", header: "admin.layout.SURVEY_FORM" },
            {
                id: "name",
                td_two: "createdAt",
                className: "activity",
                type: "text",
                search: true,
                action: {
                    link: function (collectorId, type) {
                        switch (type) {
                            case "WEBLINK":
                                return "/create/collector-responses/collector-link/" + collectorId;
                            case "EMAIL":
                                return "/create/collector-responses/collector-email/manage/" + collectorId;
                            default:
                                return "loading";
                        }
                    }
                },
                sortable: true,
                header: "default.layout.TITLE"
            },
            {
                id: "status",
                type: "status",
                sortable: true,
                action: {
                    classMap: function (status) {
                        switch (status) {
                            case "OPEN":
                                return "open";
                            case "CLOSED":
                                return "closed";
                            default:
                                return "closed";
                        }
                    },
                    doChangeStatus: function (surveyCollector, status) {
                        switch (status) {
                            case "OPEN":
                                _this.showCloseCollectorModal(surveyCollector);
                                break;
                            case "CLOSED":
                                _this.showOpenCollectorModal(surveyCollector);
                                break;
                        }
                    }
                },
                header: "default.layout.STATUS"
            },
            {
                id: "response",
                type: "text",
                sortable: true,
                header: "default.layout.RESPONSES"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.DATE_CREATED"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "default.layout.DATE_MODIFIED"
            }
        ];
    };
    SurveyCollectorsComponent.prototype.showCloseCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.CLOSE_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__["CloseCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorClose: surveyCollector }
        });
    };
    SurveyCollectorsComponent.prototype.showOpenCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.OPEN_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_7__["OpenCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorOpen: surveyCollector }
        });
    };
    SurveyCollectorsComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    SurveyCollectorsComponent.prototype.getSurveyCollectorList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveyCollectorService
            .getSurveyCollectorList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { formName: o.surveyForm.title });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyCollectorsComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.search = function () {
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.reset = function () {
        this.filter.searchKey = "";
        this.filter.searchValue = "";
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.onFilter = function ($event, key) {
        this.filter.filterKey = key;
        this.filter.filterValue = $event;
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveyCollectorList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveyCollectorsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveyCollectorsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveyCollectorsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveyCollectorsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveyCollectorList();
    };
    SurveyCollectorsComponent.prototype.openForm = function (surveyCollector) { };
    SurveyCollectorsComponent.prototype.showDeleteConfirm = function (surveyCollector, tplContent) {
        var _this = this;
        this.surveyCollectorDelete = surveyCollector;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_COLLECTOR"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.DELETE_COLLECTOR"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyCollector) {
                    return _this.onDeleteSurveyCollector(surveyCollector.id);
                }
            }
        });
    };
    SurveyCollectorsComponent.prototype.onDeleteSurveyCollector = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyCollectorService
            .deleteSurveyCollector(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyCollectorList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyCollectorsComponent.prototype.showRenameCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.EDIT_COLLECTOR_NICKNAME"),
            nzFooter: null,
            nzContent: _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_9__["RenameCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "rename-collector-dialog",
            nzComponentParams: { surveyCollectorRename: surveyCollector }
        });
    };
    SurveyCollectorsComponent.prototype.showClearResponsesConfirm = function (surveyCollector, tplContent) {
        var _this = this;
        this.surveyCollectorClearResponses = surveyCollector;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_CLEAR_ALL_THE_RESPONSES_IN_THIS_COLLECTOR"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.CLEAR_RESPONSES"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyCollector) {
                    return _this.clearResponsesByCollector(surveyCollector.id);
                }
            }
        });
    };
    SurveyCollectorsComponent.prototype.clearResponsesByCollector = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyResponseService
            .clearResponsesByCollector(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyCollectorList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyCollectorsComponent.prototype.showDeleteMultyConfirm = function () {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                return _this.onDeleteMultySurveyCollector();
            }
        });
    };
    SurveyCollectorsComponent.prototype.onDeleteMultySurveyCollector = function () {
        var _this = this;
        var surveyCollectorIds = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](lodash__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.surveyCollectorService
            .deleteMultySurveyCollector({ surveyCollectorIds: surveyCollectorIds })
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyCollectorList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyCollectorsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_collectors", type);
    };
    SurveyCollectorsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyCollectorService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] }
    ]; };
    SurveyCollectorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-collectors",
            template: __webpack_require__(/*! raw-loader!./survey-collectors.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.html"),
            styles: [__webpack_require__(/*! ./survey-collectors.component.scss */ "./src/app/modules/admin/pages/survey-collectors/survey-collectors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyCollectorService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]])
    ], SurveyCollectorsComponent);
    return SurveyCollectorsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-folders/survey-folders.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-folders/survey-folders.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1mb2xkZXJzL3N1cnZleS1mb2xkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1mb2xkZXJzL3N1cnZleS1mb2xkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvc3VydmV5LWZvbGRlcnMvc3VydmV5LWZvbGRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-folders/survey-folders.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-folders/survey-folders.component.ts ***!
  \********************************************************************************/
/*! exports provided: SurveyFoldersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFoldersComponent", function() { return SurveyFoldersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var SurveyFoldersComponent = /** @class */ (function () {
    function SurveyFoldersComponent(translateService, nzMessageService, modalService, loaderService, surveyFolderService, userService, formBuilder, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveyFolderService = surveyFolderService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        this.searchChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]("");
        this.listOfAllData = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.searchValue = "";
        this.searchKey = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.isLoading = false;
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    SurveyFoldersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedEdit = {};
        this.buildForm();
        this.getSurveyFolderList();
        var getUserList = function (name) {
            return _this.userService.searchUserList(name, 5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
                if (res.status.code === 200) {
                    return res.results;
                }
                return [];
            }));
        };
        var listOfUser$ = this.searchChange$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(getUserList));
        listOfUser$.subscribe(function (users) {
            _this.listOfUser = users;
            _this.isLoading = false;
        });
    };
    SurveyFoldersComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveyFoldersComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            { id: "userName", type: "text", header: "admin.layout.USER_NAME" },
            {
                id: "title",
                type: "text",
                sortable: true,
                header: "admin.layout.TITLE"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    SurveyFoldersComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]],
            userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(SurveyFoldersComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    SurveyFoldersComponent.prototype.getSurveyFolderList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveyFolderService
            .getSurveyFolderList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { userName: o.user.userName });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(err.message);
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFoldersComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getSurveyFolderList();
    };
    SurveyFoldersComponent.prototype.search = function () {
        this.getSurveyFolderList();
    };
    SurveyFoldersComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getSurveyFolderList();
    };
    SurveyFoldersComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveyFolderList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveyFoldersComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveyFoldersComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveyFoldersComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveyFoldersComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveyFolderList();
    };
    SurveyFoldersComponent.prototype.showDeleteConfirm = function (surveyFolderId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_SURVEY_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (surveyFolderId) {
                    return _this.onDeleteSurveyFolder(surveyFolderId);
                }
                return _this.onDeleteMultySurveyFolder();
            }
        });
    };
    SurveyFoldersComponent.prototype.openForm = function (surveyFolder) {
        this.visible = true;
        this.editing = false;
        this.selectedEdit = {};
        if (surveyFolder) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, surveyFolder);
        }
    };
    SurveyFoldersComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    SurveyFoldersComponent.prototype.onAddSurveyFolder = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.surveyFolderService.addSurveyFolder(formData.value).subscribe(function (res) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }, function (err) {
                _this.loaderService.display(false);
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
            });
        }
        return this.surveyFolderService
            .updateSurveyFolder(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            _this.resetFormAfterSubmit(formDirective);
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFoldersComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.getSurveyFolderList();
        this.editing = false;
        formDirective.resetForm();
        this.form.reset();
        this.closeForm();
    };
    SurveyFoldersComponent.prototype.onDeleteSurveyFolder = function (surveyFolderId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyFolderService.deleteSurveyFolder(surveyFolderId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyFolderList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFoldersComponent.prototype.onDeleteMultySurveyFolder = function () {
        var _this = this;
        var surveyFolderIds = lodash__WEBPACK_IMPORTED_MODULE_9__["keys"](lodash__WEBPACK_IMPORTED_MODULE_9__["pickBy"](this.mapOfCheckedId));
        this.surveyFolderService
            .deleteMultySurveyFolder({ surveyFolderIds: surveyFolderIds })
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.mapOfCheckedId = {};
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyFolderList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFoldersComponent.prototype.onSearch = function (value) {
        this.isLoading = true;
        this.searchChange$.next(value);
    };
    SurveyFoldersComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    SurveyFoldersComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_folders", type);
    };
    SurveyFoldersComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFolderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SurveyFoldersComponent.prototype, "formDirective", void 0);
    SurveyFoldersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-folders",
            template: __webpack_require__(/*! raw-loader!./survey-folders.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-folders/survey-folders.component.html"),
            styles: [__webpack_require__(/*! ./survey-folders.component.scss */ "./src/app/modules/admin/pages/survey-folders/survey-folders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFolderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], SurveyFoldersComponent);
    return SurveyFoldersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spin {\n  text-align: center;\n  padding: 30px 50px;\n  background-color: #f8fdff;\n}\n\n.search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1mb3Jtcy9zdXJ2ZXktZm9ybXMtY3JlYXRvci9zdXJ2ZXktZm9ybXMtY3JlYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlcy9zdXJ2ZXktZm9ybXMvc3VydmV5LWZvcm1zLWNyZWF0b3Ivc3VydmV5LWZvcm1zLWNyZWF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvc3VydmV5LWZvcm1zL3N1cnZleS1mb3Jtcy1jcmVhdG9yL3N1cnZleS1mb3Jtcy1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmRmZjtcbn1cbi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogOHB4O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDE4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG59XG4iLCIuc3BpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmZGZmO1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SurveyFormsCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFormsCreatorComponent", function() { return SurveyFormsCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var SurveyFormsCreatorComponent = /** @class */ (function () {
    function SurveyFormsCreatorComponent(activatedRoute, loaderService, nzMessageService, translateService, surveyFormService, router) {
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.surveyFormService = surveyFormService;
        this.router = router;
    }
    SurveyFormsCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.getSurveyFormById(params["surveyFormId"]);
        });
    };
    SurveyFormsCreatorComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyFormService.getSurveyFormById(surveyFormId).subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results && res.results[0]) {
                    _this.surveyFormDetail = res.results[0];
                }
                else {
                    _this.nzMessageService.warning(_this.translateService.instant("admin.layout.SURVEY_FORM_NOT_EXIST"));
                    _this.router.navigate(["/admin", "survey-forms"]);
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFormsCreatorComponent.prototype.onSurveySaved = function (json) {
        var _this = this;
        if (!json) {
            return;
        }
        this.nzMessageService.loading(this.translateService.instant("admin.layout.SAVING"));
        return this.surveyFormService
            .updateSurveyForm({ json: json }, this.surveyFormDetail.id)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant("admin.layout.SAVED"));
            }
        }, function (err) {
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        });
    };
    SurveyFormsCreatorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SurveyFormsCreatorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFormService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SurveyFormsCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-forms-creator",
            template: __webpack_require__(/*! raw-loader!./survey-forms-creator.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.html"),
            styles: [__webpack_require__(/*! ./survey-forms-creator.component.scss */ "./src/app/modules/admin/pages/survey-forms/survey-forms-creator/survey-forms-creator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SurveyFormsCreatorComponent);
    return SurveyFormsCreatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .customer-container {\n  margin-left: 15px;\n}\n\n.footer {\n  z-index: 1000;\n}\n\n.search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1mb3Jtcy9zdXJ2ZXktZm9ybXMvc3VydmV5LWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1mb3Jtcy9zdXJ2ZXktZm9ybXMvc3VydmV5LWZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvc3VydmV5LWZvcm1zL3N1cnZleS1mb3Jtcy9zdXJ2ZXktZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jdXN0b21lci1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG4uZm9vdGVyIHtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogOHB4O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDE4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG59XG4iLCI6aG9zdCAuY3VzdG9tZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5mb290ZXIge1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SurveyFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFormsComponent", function() { return SurveyFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var SurveyFormsComponent = /** @class */ (function () {
    function SurveyFormsComponent(translateService, nzMessageService, modalService, loaderService, surveyFormService, formBuilder, authService, windowresizeService, router, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveyFormService = surveyFormService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.windowresizeService = windowresizeService;
        this.router = router;
        this.excelService = excelService;
        this.listOfAllData = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.filterKey = "";
        this.filterValue = [];
        this.searchKey = "";
        this.searchValue = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.buttonLoading = false;
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    SurveyFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.authService.getCurrentUser().subscribe(function (userData) {
            if (userData) {
                _this.currentUser = userData;
            }
        });
        this.selectedEdit = {};
        this.selectedEdit.user = {};
        this.selectedEdit.surveyFolder = {};
        this.buildForm();
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveyFormsComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            {
                id: "title",
                type: "text",
                sortable: true,
                search: true,
                header: "admin.layout.TITLE"
            },
            { id: "userName", type: "text", header: "admin.layout.USER_NAME" },
            {
                id: "surveyFolderTitle",
                type: "text",
                header: "admin.layout.SURVEY_FOLDER"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    SurveyFormsComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]],
            description: [""]
        });
    };
    SurveyFormsComponent.prototype.getSurveyFormList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveyFormService
            .getSurveyFormList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue, this.filterKey, JSON.stringify(this.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { userName: o.user.userName, surveyFolderTitle: o.surveyFolder ? o.surveyFolder.title : "N/A" });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(SurveyFormsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    SurveyFormsComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.search = function () {
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.filter = function ($event, key) {
        this.filterKey = key;
        this.filterValue = $event;
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveyFormList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveyFormsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveyFormsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveyFormsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveyFormsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveyFormList();
    };
    SurveyFormsComponent.prototype.showDeleteConfirm = function (surveyFormId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (surveyFormId) {
                    return _this.onDeleteSurveyForm(surveyFormId);
                }
                return _this.onDeleteMultySurveyForm();
            }
        });
    };
    SurveyFormsComponent.prototype.openModal = function (tplTitle, tplContent, tplFooter, surveyForm) {
        if (surveyForm) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, surveyForm);
        }
        this.modalForm = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: true
        });
    };
    SurveyFormsComponent.prototype.onAddSurveyForm = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.buttonLoading = true;
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.surveyFormService
                .addSurveyForm(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formData.value, { userId: this.currentUser.id }))
                .subscribe(function (res) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }, function (err) {
                _this.loaderService.display(false);
                _this.buttonLoading = false;
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
                _this.buttonLoading = false;
            });
        }
        return this.surveyFormService
            .updateSurveyForm(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            _this.resetFormAfterSubmit(formDirective);
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.loaderService.display(false);
            _this.buttonLoading = false;
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
            _this.buttonLoading = false;
        });
    };
    SurveyFormsComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.editing = false;
        this.selectedEdit = {};
        this.selectedEdit.user = {};
        this.selectedEdit.surveyFolder = {};
        this.getSurveyFormList();
        formDirective.resetForm();
        this.form.reset();
        this.closeModal();
    };
    SurveyFormsComponent.prototype.closeModal = function () {
        this.modalForm.destroy();
    };
    SurveyFormsComponent.prototype.onDeleteSurveyForm = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyFormService.deleteSurveyForm(surveyFormId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyFormList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFormsComponent.prototype.onDeleteMultySurveyForm = function () {
        var _this = this;
        var surveyFormIds = lodash__WEBPACK_IMPORTED_MODULE_7__["keys"](lodash__WEBPACK_IMPORTED_MODULE_7__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.surveyFormService.deleteMultySurveyForm({ surveyFormIds: surveyFormIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyFormList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyFormsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    SurveyFormsComponent.prototype.gotoSurveyCreator = function () {
        if (this.selectedEdit.id) {
            this.closeModal();
            this.router.navigate(["/admin", "survey-forms", this.selectedEdit.id]);
        }
    };
    SurveyFormsComponent.prototype.viewSurveyForm = function (surveyForm) {
        this.selectSurveyView = surveyForm;
        this.modalForm = this.modalService.create({
            nzTitle: this.tplTitleModalView,
            nzContent: this.tplContentModalView,
            nzFooter: this.tplFooterModalView,
            nzWidth: 768,
            nzMaskClosable: true,
            nzClosable: true
        });
    };
    SurveyFormsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_forms", type);
    };
    SurveyFormsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFormService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SurveyFormsComponent.prototype, "formDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplTitleModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyFormsComponent.prototype, "tplTitleModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplContentModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyFormsComponent.prototype, "tplContentModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplFooterModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyFormsComponent.prototype, "tplFooterModalView", void 0);
    SurveyFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-forms",
            template: __webpack_require__(/*! raw-loader!./survey-forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.html"),
            styles: [__webpack_require__(/*! ./survey-forms.component.scss */ "./src/app/modules/admin/pages/survey-forms/survey-forms/survey-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["SurveyFormService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], SurveyFormsComponent);
    return SurveyFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvc3VydmV5LXJlY2lwaWVudHMvc3VydmV5LXJlY2lwaWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SurveyRecipientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyRecipientsComponent", function() { return SurveyRecipientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var SurveyRecipientsComponent = /** @class */ (function () {
    function SurveyRecipientsComponent(translateService, nzMessageService, modalService, loaderService, surveyRecipientService, excelService, windowresizeService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveyRecipientService = surveyRecipientService;
        this.excelService = excelService;
        this.windowresizeService = windowresizeService;
        this.listOfAllData = [];
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.filter = {
            searchKey: "name",
            searchValue: "",
            sortField: "createdAt",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    SurveyRecipientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveyRecipientsComponent.prototype.initTable = function () {
        this.columns = [
            {
                id: "email",
                type: "text",
                sortable: true,
                header: "default.layout.EMAIL"
            },
            {
                id: "firstName",
                type: "text",
                sortable: true,
                header: "default.layout.FIRST_NAME"
            },
            {
                id: "lastName",
                type: "text",
                sortable: true,
                header: "default.layout.LAST_NAME"
            },
            {
                id: "mailStatus",
                type: "text",
                sortable: true,
                header: "default.layout.SENT"
            },
            {
                id: "nameCollector",
                type: "text",
                header: "admin.layout.SURVEY_COLLECTOR"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    SurveyRecipientsComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    SurveyRecipientsComponent.prototype.getSurveyRecipientList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveyRecipientService
            .getSurveyRecipientList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { nameCollector: o.surveyCollector.name });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyRecipientsComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.search = function () {
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.reset = function () {
        this.filter.searchKey = "";
        this.filter.searchValue = "";
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.onFilter = function ($event, key) {
        this.filter.filterKey = key;
        this.filter.filterValue = $event;
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveyRecipientList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveyRecipientsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveyRecipientsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveyRecipientsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveyRecipientsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveyRecipientList();
    };
    SurveyRecipientsComponent.prototype.showDeleteConfirm = function (surveyRecipientId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (surveyRecipientId) {
                    return _this.onDeleteSurveyRecipient(surveyRecipientId);
                }
                return _this.onDeleteMultySurveyRecipient();
            }
        });
    };
    SurveyRecipientsComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    SurveyRecipientsComponent.prototype.onDeleteSurveyRecipient = function (surveyRecipientId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyRecipientService
            .deleteSurveyRecipient(surveyRecipientId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyRecipientList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyRecipientsComponent.prototype.onDeleteMultySurveyRecipient = function () {
        var _this = this;
        var surveyRecipientIds = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](lodash__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.surveyRecipientService
            .deleteMultySurveyRecipient({ surveyRecipientIds: surveyRecipientIds })
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyRecipientList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyRecipientsComponent.prototype.openForm = function (surveyRecipient) { };
    SurveyRecipientsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_recipients", type);
    };
    SurveyRecipientsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyRecipientService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"] }
    ]; };
    SurveyRecipientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-recipients",
            template: __webpack_require__(/*! raw-loader!./survey-recipients.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.html"),
            styles: [__webpack_require__(/*! ./survey-recipients.component.scss */ "./src/app/modules/admin/pages/survey-recipients/survey-recipients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyRecipientService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"]])
    ], SurveyRecipientsComponent);
    return SurveyRecipientsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-responses/survey-responses.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-responses/survey-responses.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1yZXNwb25zZXMvc3VydmV5LXJlc3BvbnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlcy9zdXJ2ZXktcmVzcG9uc2VzL3N1cnZleS1yZXNwb25zZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlcy9zdXJ2ZXktcmVzcG9uc2VzL3N1cnZleS1yZXNwb25zZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-responses/survey-responses.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-responses/survey-responses.component.ts ***!
  \************************************************************************************/
/*! exports provided: SurveyResponsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResponsesComponent", function() { return SurveyResponsesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var SurveyResponsesComponent = /** @class */ (function () {
    function SurveyResponsesComponent(translateService, nzMessageService, modalService, loaderService, surveyResponseService, excelService, windowresizeService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveyResponseService = surveyResponseService;
        this.excelService = excelService;
        this.windowresizeService = windowresizeService;
        this.listOfAllData = [];
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.filter = {
            searchKey: "name",
            searchValue: "",
            sortField: "createdAt",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    SurveyResponsesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveyResponsesComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            {
                id: "ipAddress",
                type: "text",
                sortable: true,
                header: "admin.layout.IP_ADDRESS"
            },
            { id: "nameForm", type: "text", header: "admin.layout.SURVEY_FORM" },
            {
                id: "nameCollector",
                type: "text",
                header: "admin.layout.SURVEY_COLLECTOR"
            },
            {
                id: "totalTimeToHMS",
                type: "text",
                sortable: true,
                header: "admin.layout.TOTAL_TIME"
            },
            {
                id: "startTime",
                type: "date",
                sortable: true,
                header: "admin.layout.START_TIME"
            },
            {
                id: "endTime",
                type: "date",
                sortable: true,
                header: "admin.layout.END_TIME"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    SurveyResponsesComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    SurveyResponsesComponent.prototype.getSurveyResponseList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveyResponseService
            .getSurveyResponseList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { nameForm: o.surveyForm.title, nameCollector: o.surveyCollector.name, totalTimeToHMS: _this.msToHMSTypicalTimeSpent(o.totalTime) });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyResponsesComponent.prototype.msToHMSTypicalTimeSpent = function (s) {
        function pad(n, z) {
            if (z === void 0) { z = 2; }
            z = z || 2;
            return ("00" + n).slice(-z);
        }
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return pad(hrs) + "h:" + pad(mins) + "m:" + pad(secs) + "s";
    };
    SurveyResponsesComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.search = function () {
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.reset = function () {
        this.filter.searchKey = "";
        this.filter.searchValue = "";
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.onFilter = function ($event, key) {
        this.filter.filterKey = key;
        this.filter.filterValue = $event;
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveyResponseList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveyResponsesComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveyResponsesComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveyResponsesComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveyResponsesComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveyResponseList();
    };
    SurveyResponsesComponent.prototype.showDeleteConfirm = function (surveyResponseId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (surveyResponseId) {
                    return _this.onDeleteSurveyResponse(surveyResponseId);
                }
                return _this.onDeleteMultySurveyResponse();
            }
        });
    };
    SurveyResponsesComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    SurveyResponsesComponent.prototype.onDeleteSurveyResponse = function (surveyResponseId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveyResponseService.deleteSurveyResponse(surveyResponseId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyResponseList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyResponsesComponent.prototype.onDeleteMultySurveyResponse = function () {
        var _this = this;
        var surveyResponseIds = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](lodash__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.surveyResponseService
            .deleteMultySurveyResponse({ surveyResponseIds: surveyResponseIds })
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveyResponseList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveyResponsesComponent.prototype.openForm = function (surveyResponse) { };
    SurveyResponsesComponent.prototype.viewSurveyForm = function (surveyForm) {
        this.selectSurveyView = surveyForm;
        this.modalForm = this.modalService.create({
            nzTitle: this.tplTitleModalView,
            nzContent: this.tplContentModalView,
            nzFooter: this.tplFooterModalView,
            nzWidth: 768,
            nzMaskClosable: true,
            nzClosable: true
        });
    };
    SurveyResponsesComponent.prototype.closeModal = function () {
        this.modalForm.destroy();
    };
    SurveyResponsesComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_responses", type);
    };
    SurveyResponsesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplTitleModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyResponsesComponent.prototype, "tplTitleModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplContentModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyResponsesComponent.prototype, "tplContentModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplFooterModalView", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SurveyResponsesComponent.prototype, "tplFooterModalView", void 0);
    SurveyResponsesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-responses",
            template: __webpack_require__(/*! raw-loader!./survey-responses.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-responses/survey-responses.component.html"),
            styles: [__webpack_require__(/*! ./survey-responses.component.scss */ "./src/app/modules/admin/pages/survey-responses/survey-responses.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveyResponseService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"]])
    ], SurveyResponsesComponent);
    return SurveyResponsesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/survey-sends/survey-sends.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-sends/survey-sends.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1zZW5kcy9zdXJ2ZXktc2VuZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvc3VydmV5LXNlbmRzL3N1cnZleS1zZW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3N1cnZleS1zZW5kcy9zdXJ2ZXktc2VuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/survey-sends/survey-sends.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/pages/survey-sends/survey-sends.component.ts ***!
  \****************************************************************************/
/*! exports provided: SurveySendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySendsComponent", function() { return SurveySendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var SurveySendsComponent = /** @class */ (function () {
    function SurveySendsComponent(translateService, nzMessageService, modalService, loaderService, surveySendService, excelService, windowresizeService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.surveySendService = surveySendService;
        this.excelService = excelService;
        this.windowresizeService = windowresizeService;
        this.listOfAllData = [];
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.filter = {
            searchKey: "name",
            searchValue: "",
            sortField: "createdAt",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    SurveySendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    SurveySendsComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            { id: "nameFrom", type: "text", header: "admin.layout.FROM" },
            { id: "to", type: "text", sortable: true, header: "admin.layout.TO" },
            { id: "nameForm", type: "text", header: "admin.layout.SURVEY_FORM" },
            {
                id: "type",
                type: "text",
                sortable: true,
                header: "admin.layout.SEND_TYPE"
            },
            {
                id: "status",
                type: "text",
                sortable: true,
                header: "admin.layout.STATUS"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    SurveySendsComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    SurveySendsComponent.prototype.getSurveySendList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.surveySendService
            .getSurveySendList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { nameFrom: o.user.userName, nameForm: o.surveyForm.title });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveySendsComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.search = function () {
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.reset = function () {
        this.filter.searchKey = "";
        this.filter.searchValue = "";
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.onFilter = function ($event, key) {
        this.filter.filterKey = key;
        this.filter.filterValue = $event;
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getSurveySendList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    SurveySendsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    SurveySendsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    SurveySendsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    SurveySendsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getSurveySendList();
    };
    SurveySendsComponent.prototype.showDeleteConfirm = function (surveySendId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (surveySendId) {
                    return _this.onDeleteSurveySend(surveySendId);
                }
                return _this.onDeleteMultySurveySend();
            }
        });
    };
    SurveySendsComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    SurveySendsComponent.prototype.onDeleteSurveySend = function (surveySendId) {
        var _this = this;
        this.loaderService.display(true);
        this.surveySendService.deleteSurveySend(surveySendId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveySendList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveySendsComponent.prototype.onDeleteMultySurveySend = function () {
        var _this = this;
        var surveySendIds = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](lodash__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.surveySendService.deleteMultySurveySend({ surveySendIds: surveySendIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getSurveySendList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    SurveySendsComponent.prototype.openForm = function (surveySend) { };
    SurveySendsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "survey_sends", type);
    };
    SurveySendsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveySendService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"] }
    ]; };
    SurveySendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-sends",
            template: __webpack_require__(/*! raw-loader!./survey-sends.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/survey-sends/survey-sends.component.html"),
            styles: [__webpack_require__(/*! ./survey-sends.component.scss */ "./src/app/modules/admin/pages/survey-sends/survey-sends.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["SurveySendService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["ExcelService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"]])
    ], SurveySendsComponent);
    return SurveySendsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/user-grants/user-grants.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/pages/user-grants/user-grants.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3VzZXItZ3JhbnRzL3VzZXItZ3JhbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3VzZXItZ3JhbnRzL3VzZXItZ3JhbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvdXNlci1ncmFudHMvdXNlci1ncmFudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/user-grants/user-grants.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/pages/user-grants/user-grants.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserGrantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGrantsComponent", function() { return UserGrantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);











var UserGrantsComponent = /** @class */ (function () {
    function UserGrantsComponent(translateService, nzMessageService, modalService, loaderService, formBuilder, userGrantService, userService, windowresizeService, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.formBuilder = formBuilder;
        this.userGrantService = userGrantService;
        this.userService = userService;
        this.windowresizeService = windowresizeService;
        this.excelService = excelService;
        this.searchChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]("");
        this.listOfAllData = [];
        this.listOfAllTable = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.filterKey = "";
        this.filterValue = [];
        this.searchKey = "";
        this.searchValue = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.isLoading = false;
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    UserGrantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.selectedEdit = {};
        this.selectedEdit.user = {};
        this.listOfAllTable = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].dbTable.map(function (o) {
            return { text: o, value: o };
        });
        this.buildForm();
        this.getUserGrantList();
        var getUserList = function (name) {
            return _this.userService.searchUserList(name, 5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (res) {
                if (res.status.code === 200) {
                    return res.results;
                }
                return [];
            }));
        };
        var listOfUser$ = this.searchChange$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(getUserList));
        listOfUser$.subscribe(function (users) {
            _this.listOfUser = users;
            _this.isLoading = false;
        });
    };
    UserGrantsComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    UserGrantsComponent.prototype.initTable = function () {
        // tslint:disable-next-line:max-line-length
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            { id: "userName", type: "text", header: "admin.layout.USER" },
            {
                id: "tableName",
                type: "text",
                sortable: true,
                filter: this.listOfAllTable,
                header: "admin.layout.TABLE_NAME"
            },
            { id: "recordId", type: "text", header: "admin.layout.RECORD_ID" },
            { id: "canView", type: "checkbox", header: "admin.layout.CAN_VIEW" },
            { id: "canInsert", type: "checkbox", header: "admin.layout.CAN_INSERT" },
            { id: "canUpdate", type: "checkbox", header: "admin.layout.CAN_UPDATE" },
            { id: "canDelete", type: "checkbox", header: "admin.layout.CAN_DELETE" },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                hidden: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                hidden: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    UserGrantsComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            tableName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            recordId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            canView: [false],
            canInsert: [false],
            canUpdate: [false],
            canDelete: [false]
        });
    };
    UserGrantsComponent.prototype.getUserGrantList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.userGrantService
            .getUserGrantList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue, this.filterKey, JSON.stringify(this.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { userName: o.user.userName });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(UserGrantsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserGrantsComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getUserGrantList();
    };
    UserGrantsComponent.prototype.search = function () {
        this.getUserGrantList();
    };
    UserGrantsComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getUserGrantList();
    };
    UserGrantsComponent.prototype.filter = function ($event, key) {
        this.filterKey = key;
        this.filterValue = $event;
        this.getUserGrantList();
    };
    UserGrantsComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getUserGrantList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    UserGrantsComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    UserGrantsComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    UserGrantsComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    UserGrantsComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getUserGrantList();
    };
    UserGrantsComponent.prototype.showDeleteConfirm = function (userGrantId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.ROLE_GRANT_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (userGrantId) {
                    return _this.onDeleteUserGrant(userGrantId);
                }
                return _this.onDeleteMultyUserGrant();
            }
        });
    };
    UserGrantsComponent.prototype.openForm = function (userGrant) {
        this.visible = true;
        this.editing = false;
        this.selectedEdit = {};
        this.selectedEdit.user = {};
        if (userGrant) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userGrant);
        }
    };
    UserGrantsComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    UserGrantsComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.getUserGrantList();
        this.editing = false;
        formDirective.resetForm();
        this.form.reset();
        this.selectedEdit = {};
        this.selectedEdit.user = {};
        this.closeForm();
    };
    UserGrantsComponent.prototype.onDeleteUserGrant = function (userGrantId) {
        var _this = this;
        this.loaderService.display(true);
        this.userGrantService.deleteUserGrant(userGrantId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UserGrantsComponent.prototype.onDeleteMultyUserGrant = function () {
        var _this = this;
        var userGrantIds = lodash__WEBPACK_IMPORTED_MODULE_10__["keys"](lodash__WEBPACK_IMPORTED_MODULE_10__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.userGrantService.deleteMultyUserGrant({ userGrantIds: userGrantIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UserGrantsComponent.prototype.onUpdateAction = function (userGrantId, actionKey) {
        var _this = this;
        this.loaderService.display(true);
        this.userGrantService.updateAction(userGrantId, actionKey).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserGrantList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UserGrantsComponent.prototype.onAddUserGrant = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_5__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.userGrantService.addUserGrant(formData.value).subscribe(function (res) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }, function (err) {
                _this.loaderService.display(false);
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
            });
        }
        return this.userGrantService
            .updateUserGrant(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            _this.resetFormAfterSubmit(formDirective);
            _this.nzMessageService.success(_this.translateService.instant(res.status.message));
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UserGrantsComponent.prototype.onSearch = function (value) {
        this.isLoading = true;
        this.searchChange$.next(value);
    };
    UserGrantsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    UserGrantsComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "user_grants", type);
    };
    UserGrantsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["UserGrantService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UserGrantsComponent.prototype, "formDirective", void 0);
    UserGrantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-grants",
            template: __webpack_require__(/*! raw-loader!./user-grants.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/user-grants/user-grants.component.html"),
            styles: [__webpack_require__(/*! ./user-grants.component.scss */ "./src/app/modules/admin/pages/user-grants/user-grants.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["UserGrantService"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["WindowresizeService"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], UserGrantsComponent);
    return UserGrantsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/users/users.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/pages/users/users.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n.search-box button {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/pages/users/users.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/pages/users/users.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var UsersComponent = /** @class */ (function () {
    function UsersComponent(translateService, nzMessageService, modalService, loaderService, userService, roleService, formBuilder, windowresizeService, excelService) {
        this.translateService = translateService;
        this.nzMessageService = nzMessageService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.userService = userService;
        this.roleService = roleService;
        this.formBuilder = formBuilder;
        this.windowresizeService = windowresizeService;
        this.excelService = excelService;
        this.listOfAllData = [];
        this.listOfAllRole = [];
        this.sortField = "id";
        this.sortType = "asc";
        this.filterKey = "";
        this.filterValue = [];
        this.searchKey = "";
        this.searchValue = "";
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.visible = false;
        this.editing = false;
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth = window.innerWidth;
        this.windowresizeService.getSize().subscribe(function (size) {
            _this.screenWidth = +size.innerWidth;
        });
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        this.buildForm();
        this.getUserList();
        this.getRoleList();
    };
    UsersComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    UsersComponent.prototype.initTable = function () {
        this.columns = [
            { id: "id", type: "text", hidden: true, header: "admin.layout.ID" },
            {
                id: "firstName",
                type: "text",
                sortable: true,
                search: true,
                header: "admin.layout.FIRST_NAME"
            },
            {
                id: "lastName",
                type: "text",
                sortable: true,
                search: true,
                header: "admin.layout.LAST_NAME"
            },
            {
                id: "userName",
                type: "text",
                sortable: true,
                search: true,
                header: "admin.layout.USER_NAME"
            },
            {
                id: "email",
                type: "text",
                hidden: true,
                search: true,
                header: "admin.layout.EMAIL"
            },
            {
                id: "roleName",
                type: "select",
                filter: [],
                filterKey: "roleId",
                header: "admin.layout.ROLE"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "admin.layout.CREATED_AT"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "admin.layout.UPDATED_AT"
            }
        ];
    };
    UsersComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            firstName: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]
            ],
            lastName: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]
            ],
            userName: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]
            ],
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].emailValidator(),
                    _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()
                ]
            ],
            roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])]
            ],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]]
        }, {
            validator: _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].passwordMatchValidator
        });
    };
    UsersComponent.prototype.getRoleList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.roleService.getAllRoleList().subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllRole = res.results.map(function (o) {
                    return { text: o.name, value: o.id };
                });
                _this.mapOptionsFilter("roleId", _this.listOfAllRole);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UsersComponent.prototype.mapOptionsFilter = function (id, options) {
        var column = this.columns.filter(function (col) { return col.filterKey === id || col.id === id; })[0];
        if (column) {
            column.filter = options;
        }
    };
    UsersComponent.prototype.getUserList = function () {
        var _this = this;
        this.loaderService.display(true);
        this.userService
            .getUserList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue, this.filterKey, JSON.stringify(this.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllData = res.results.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { roleName: o.role.name });
                });
                _this.pagging.total = res.paging.total;
                _this.refreshStatus();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(UsersComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.sort = function (sort) {
        this.sortField = sort.key;
        if (sort.value === "ascend") {
            this.sortType = "asc";
        }
        else {
            this.sortType = "desc";
        }
        this.getUserList();
    };
    UsersComponent.prototype.search = function () {
        this.getUserList();
    };
    UsersComponent.prototype.reset = function () {
        this.searchKey = "";
        this.searchValue = "";
        this.getUserList();
    };
    UsersComponent.prototype.filter = function ($event, key) {
        this.filterKey = key;
        this.filterValue = $event;
        this.getUserList();
    };
    UsersComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getUserList();
        this.mapOfCheckedId = {};
        this.refreshStatus();
    };
    UsersComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfAllData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfAllData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(function (item) { return _this.mapOfCheckedId[item.id]; }).length;
    };
    UsersComponent.prototype.checkItem = function (id, $event) {
        this.mapOfCheckedId[id] = $event;
        this.refreshStatus();
    };
    UsersComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfAllData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    UsersComponent.prototype.pageSizeChange = function ($event) {
        this.pagging.pageSize = $event;
        this.getUserList();
    };
    UsersComponent.prototype.showDeleteConfirm = function (userId) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
            nzCancelText: this.translateService.instant("admin.layout.NO"),
            nzOkText: this.translateService.instant("admin.layout.YES"),
            nzOnOk: function () {
                if (userId) {
                    return _this.onDeleteUser(userId);
                }
                return _this.onDeleteMultyUser();
            }
        });
    };
    UsersComponent.prototype.openForm = function (user) {
        this.visible = true;
        this.editing = false;
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        if (user) {
            this.editing = true;
            this.selectedEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user);
        }
    };
    UsersComponent.prototype.closeForm = function () {
        this.visible = false;
    };
    UsersComponent.prototype.onAddUser = function (formData, formDirective) {
        var _this = this;
        if (this.form.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        if (!this.editing) {
            return this.userService.addUser(formData.value).subscribe(function (res) {
                if (res.status.code === 200) {
                    _this.resetFormAfterSubmit(formDirective);
                    _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                }
            }, function (err) {
                _this.loaderService.display(false);
                _this.nzMessageService.error(_this.translateService.instant(err.message));
            }, function () {
                _this.loaderService.display(false);
            });
        }
        return this.userService
            .updateUser(formData.value, this.selectedEdit.id)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.resetFormAfterSubmit(formDirective);
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UsersComponent.prototype.resetFormAfterSubmit = function (formDirective) {
        this.getUserList();
        this.editing = false;
        formDirective.resetForm();
        this.form.reset();
        this.selectedEdit = {};
        this.selectedEdit.role = {};
        this.closeForm();
    };
    UsersComponent.prototype.onDeleteUser = function (userId) {
        var _this = this;
        this.loaderService.display(true);
        this.userService.deleteUser(userId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UsersComponent.prototype.onDeleteMultyUser = function () {
        var _this = this;
        var userIds = lodash__WEBPACK_IMPORTED_MODULE_7__["keys"](lodash__WEBPACK_IMPORTED_MODULE_7__["pickBy"](this.mapOfCheckedId));
        this.loaderService.display(true);
        this.userService.deleteMultyUser({ userIds: userIds }).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UsersComponent.prototype.onChangeRole = function (roleId, userId) {
        var _this = this;
        this.loaderService.display(true);
        this.userService.changeRole(userId, roleId).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getUserList();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    UsersComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    UsersComponent.prototype.onExport = function (type) {
        var _this = this;
        var data = [];
        this.listOfAllData.forEach(function (row) {
            var intance = {};
            _this.columns.forEach(function (col) {
                intance[_this.translateService.instant(col.header)] = row[col.id];
            });
            data.push(intance);
        });
        this.excelService.exportAsExcelFile(data, "users", type);
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formDirective", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UsersComponent.prototype, "formDirective", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/pages/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/admin/pages/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["WindowresizeService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module.js.map