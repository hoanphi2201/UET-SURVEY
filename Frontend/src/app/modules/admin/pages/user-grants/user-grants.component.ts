import { Component, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {
  Validators,
  FormBuilder,
  FormGroup,
  NgForm,
  FormControl,
  FormGroupDirective
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LoaderService, WindowresizeService, Helpers } from '@app/shared';
// tslint:disable-next-line:max-line-length
import {
  UserGrant,
  TableListColumn,
  Pagging,
  UserGrantService,
  User,
  UserService
} from '@app/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { ngCopy } from 'angular-6-clipboard';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-grants',
  templateUrl: './user-grants.component.html',
  styleUrls: ['./user-grants.component.scss']
})
export class UserGrantsComponent implements OnInit {
  @ViewChild('formDirective', { static: false }) private formDirective: NgForm;
  searchChange$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  form: FormGroup;
  listOfAllData: UserGrant[] = [];
  listOfUser: any;
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
  selectedEdit: UserGrant;
  columns: TableListColumn[] = [];
  isLoading = false;
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
    private formBuilder: FormBuilder,
    private userGrantService: UserGrantService,
    private userService: UserService,
    private windowresizeService: WindowresizeService
  ) {}
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.selectedEdit = {} as UserGrant;
    this.selectedEdit.user = {} as User;
    this.listOfAllTable = environment.dbTable.map(o => {
      return { text: o, value: o };
    });
    this.buildForm();
    this.getUserGrantList();

    const getUserList = (name: string) =>
      this.userService.searchUserList(name, 5).pipe(
        map((res: any) => {
          if (res.status.code === 200) {
            return res.results;
          }
          return [];
        })
      );
    const listOfUser$: Observable<User[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getUserList));
    listOfUser$.subscribe(users => {
      this.listOfUser = users;
      this.isLoading = false;
    });
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    // tslint:disable-next-line:max-line-length
    this.columns = [
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      { id: 'userName', type: 'text', header: 'admin.layout.USER' },
      {
        id: 'tableName',
        type: 'text',
        sortable: true,
        filter: this.listOfAllTable,
        header: 'admin.layout.TABLE_NAME'
      },
      { id: 'recordId', type: 'text', header: 'admin.layout.RECORD_ID' },
      { id: 'canView', type: 'checkbox', header: 'admin.layout.CAN_VIEW' },
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
      userId: ['', [Validators.required]],
      recordId: ['', [Validators.required]],
      canView: [false],
      canInsert: [false],
      canUpdate: [false],
      canDelete: [false]
    });
  }
  getUserGrantList() {
    this.loaderService.display(true);
    // tslint:disable-next-line:max-line-length
    this.userGrantService
      .getUserGrantList(
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
              return Object.assign(o, { userName: o.user.userName });
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
    this.getUserGrantList();
  }
  search(): void {
    this.getUserGrantList();
  }
  reset(): void {
    this.searchKey = '';
    this.searchValue = '';
    this.getUserGrantList();
  }
  filter($event: any, key: string) {
    this.filterKey = key;
    this.filterValue = $event;
    this.getUserGrantList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getUserGrantList();
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
    this.getUserGrantList();
  }
  showDeleteConfirm(userGrantId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.ROLE_GRANT_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        if (userGrantId) {
          return this.onDeleteUserGrant(userGrantId);
        }
        return this.onDeleteMultyUserGrant();
      }
    });
  }
  openForm(userGrant: UserGrant) {
    this.visible = true;
    this.editing = false;
    this.selectedEdit = {} as UserGrant;
    this.selectedEdit.user = {} as User;
    if (userGrant) {
      this.editing = true;
      this.selectedEdit = Object.assign({}, userGrant);
    }
  }
  closeForm(): void {
    this.visible = false;
  }
  resetFormAfterSubmit(formDirective: FormGroupDirective) {
    this.getUserGrantList();
    this.editing = false;
    formDirective.resetForm();
    this.form.reset();
    this.selectedEdit = {} as UserGrant;
    this.selectedEdit.user = {} as User;
    this.closeForm();
  }
  onDeleteUserGrant(userGrantId: string) {
    this.loaderService.display(true);
    this.userGrantService.deleteUserGrant(userGrantId).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getUserGrantList();
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
  onDeleteMultyUserGrant() {
    const userGrantIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.userGrantService.deleteMultyUserGrant({ userGrantIds }).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getUserGrantList();
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
  onUpdateAction(userGrantId: string, actionKey: string) {
    this.loaderService.display(true);
    this.userGrantService.updateAction(userGrantId, actionKey).subscribe(
      res => {
        if (res.status.code === 200) {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.getUserGrantList();
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
  onAddUserGrant(formData: any, formDirective: FormGroupDirective) {
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
      return this.userGrantService.addUserGrant(formData.value).subscribe(
        data => {
          this.resetFormAfterSubmit(formDirective);
          this.nzMessageService.success(
            this.translateService.instant(data.status.message)
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
    return this.userGrantService
      .updateUserGrant(formData.value, this.selectedEdit.id)
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
  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
}
