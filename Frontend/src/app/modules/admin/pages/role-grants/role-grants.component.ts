import { Component, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import {
  RoleGrant,
  RoleGrantService,
  RoleService,
  Role,
  TableListColumn,
  Pagging
} from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LoaderService, WindowresizeService, Helpers } from '@app/shared';
import { environment } from '@env/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-role-grants',
  templateUrl: './role-grants.component.html',
  styleUrls: ['./role-grants.component.scss']
})
export class RoleGrantsComponent implements OnInit {
  @ViewChild('formDirective', { static: false }) private formDirective: NgForm;
  form: FormGroup;
  listOfAllData: RoleGrant[] = [];
  listOfAllRole: any[] = [];
  listOfAllTable: any[] = [];
  sortField: string | null = 'id';
  sortType: string | null = 'asc';
  filterKey = '';
  filterValue: any[] = [];
  searchKey = '';
  searchValue = '';
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  screenWidth: number;
  visible = false;
  editing = false;
  selectedEdit: RoleGrant;
  columns: TableListColumn[] = [];
  pagging: Pagging = {
    page: 1,
    total: 0,
    pageSize: 10
  };
  constructor(
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private modalService: NzModalService,
    private loaderService: LoaderService,
    private roleGrantService: RoleGrantService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private windowresizeService: WindowresizeService
  ) {}
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.selectedEdit = {} as RoleGrant;
    this.selectedEdit.role = {} as Role;
    this.listOfAllTable = environment.dbTable.map(o => {
      return { text: o, value: o };
    });
    this.buildForm();
    this.getRoleGrantList();
    this.getRoleList();
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    this.columns = [
      // tslint:disable-next-line:max-line-length
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      {
        id: 'roleName',
        type: 'text',
        filter: this.listOfAllRole,
        filterKey: 'roleId',
        header: 'admin.layout.ROLE'
      },
      {
        id: 'tableName',
        type: 'text',
        sortable: true,
        filter: this.listOfAllTable,
        header: 'admin.layout.TABLE_NAME'
      },
      {
        id: 'canViewAll',
        type: 'checkbox',
        header: 'admin.layout.CAN_VIEW_ALL'
      },
      {
        id: 'canSelfView',
        type: 'checkbox',
        header: 'admin.layout.CAN_SELF_VIEW'
      },
      { id: 'canInsert', type: 'checkbox', header: 'admin.layout.CAN_INSERT' },
      { id: 'canUpdate', type: 'checkbox', header: 'admin.layout.CAN_UPDATE' },
      { id: 'canDelete', type: 'checkbox', header: 'admin.layout.CAN_DELETE' },
      {
        id: 'createdAt',
        type: 'date',
        sortable: true,
        hidden: true,
        header: 'admin.layout.CREATED_AT'
      },
      {
        id: 'createdAt',
        type: 'date',
        sortable: true,
        hidden: true,
        header: 'admin.layout.UPDATED_AT'
      }
    ];
  }
  buildForm() {
    this.form = this.formBuilder.group({
      tableName: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      canViewAll: [false],
      canSelfView: [false],
      canInsert: [false],
      canUpdate: [false],
      canDelete: [false]
    });
  }
  getRoleList() {
    this.loaderService.display(true);
    this.roleService.getAllRoleList().subscribe(
      res => {
        if (res.status.code === 200) {
          this.listOfAllRole = res.results.map((o: any) => {
            return { text: o.name, value: o.id };
          });
          this.mapOptionsFilter('roleId', this.listOfAllRole);
        }
      },
      err => {
        this.loaderService.display(false);
        this.nzMessageService.error(this.translateService.instant(err.message));
      },
      () => {
        this.loaderService.display(false);
      }
    );
  }
  mapOptionsFilter(id: string, options: any) {
    const column = this.columns.filter(
      col => col.filterKey === id || col.id === id
    )[0];
    if (column) {
      column.filter = options;
    }
  }
  getRoleGrantList() {
    this.loaderService.display(true);
    // tslint:disable-next-line:max-line-length
    this.roleGrantService
      .getRoleGrantList(
        this.pagging.page,
        this.pagging.pageSize,
        this.sortField,
        this.sortType,
        this.searchKey,
        this.searchValue,
        this.filterKey,
        JSON.stringify(this.filterValue)
      )
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.listOfAllData = res.results.map((o: any) => {
              return Object.assign(o, { roleName: o.role.name });
            });
            this.pagging.total = res.paging.total;
            this.refreshStatus();
          }
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
  }
  get f() {
    return this.form.controls;
  }
  sort(sort: { key: string; value: string }): void {
    this.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.sortType = 'asc';
    } else {
      this.sortType = 'desc';
    }
    this.getRoleGrantList();
  }
  search(): void {
    this.getRoleGrantList();
  }
  reset(): void {
    this.searchKey = '';
    this.searchValue = '';
    this.getRoleGrantList();
  }
  filter($event: any, key: string) {
    this.filterKey = key;
    this.filterValue = $event;
    this.getRoleGrantList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getRoleGrantList();
    this.mapOfCheckedId = {};
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfAllData.every(
      item => this.mapOfCheckedId[item.id]
    );
    this.isIndeterminate =
      this.listOfAllData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(
      item => this.mapOfCheckedId[item.id]
    ).length;
  }
  checkItem(id: string, $event: any) {
    this.mapOfCheckedId[id] = $event;
    this.refreshStatus();
  }
  checkAll(value: boolean): void {
    this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  pageSizeChange($event: any) {
    this.pagging.pageSize = $event;
    this.getRoleGrantList();
  }
  showDeleteConfirm(roleGrantId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.ROLE_GRANT_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        if (roleGrantId) {
          return this.onDeleteRoleGrant(roleGrantId);
        }
        return this.onDeleteMultyRoleGrant();
      }
    });
  }
  openForm(roleGrant: RoleGrant) {
    this.visible = true;
    this.editing = false;
    this.selectedEdit = {} as RoleGrant;
    this.selectedEdit.role = {} as Role;
    if (roleGrant) {
      this.editing = true;
      this.selectedEdit = Object.assign({}, roleGrant);
    }
  }
  closeForm(): void {
    this.visible = false;
  }
  resetFormAfterSubmit(formDirective: FormGroupDirective) {
    this.getRoleGrantList();
    this.editing = false;
    formDirective.resetForm();
    this.form.reset();
    this.selectedEdit = {} as RoleGrant;
    this.selectedEdit.role = {} as Role;
    this.closeForm();
  }
  onDeleteRoleGrant(roleGrantId: string) {
    this.loaderService.display(true);
    this.roleGrantService.deleteRoleGrant(roleGrantId).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getRoleGrantList();
        }
      },
      err => {
        this.loaderService.display(false);
        this.nzMessageService.error(this.translateService.instant(err.message));
      },
      () => {
        this.loaderService.display(false);
      }
    );
  }
  onDeleteMultyRoleGrant() {
    const roleGrantIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.roleGrantService.deleteMultyRoleGrant({ roleGrantIds }).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getRoleGrantList();
        }
      },
      err => {
        this.loaderService.display(false);
        this.nzMessageService.error(this.translateService.instant(err.message));
      },
      () => {
        this.loaderService.display(false);
      }
    );
  }
  onUpdateAction(roleGrantId: string, actionKey: string) {
    this.loaderService.display(true);
    this.roleGrantService.updateAction(roleGrantId, actionKey).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getRoleGrantList();
        }
      },
      err => {
        this.loaderService.display(false);
        this.nzMessageService.error(this.translateService.instant(err.message));
      },
      () => {
        this.loaderService.display(false);
      }
    );
  }
  onAddRoleGrant(formData: any, formDirective: FormGroupDirective) {
    if (this.form.invalid) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    if (!this.editing) {
      return this.roleGrantService.addRoleGrant(formData.value).subscribe(
        res => {
          this.resetFormAfterSubmit(formDirective);
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
    }
    return this.roleGrantService
      .updateRoleGrant(formData.value, this.selectedEdit.id)
      .subscribe(
        res => {
          this.resetFormAfterSubmit(formDirective);
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
}
