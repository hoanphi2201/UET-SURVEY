import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { TableListColumn, Pagging, SurveyFolderService, SurveyFolder, IValidators, User, UserService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LoaderService, Helpers } from '@app/shared';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-survey-folders',
  templateUrl: './survey-folders.component.html',
  styleUrls: ['./survey-folders.component.scss']
})
export class SurveyFoldersComponent implements OnInit {
  @ViewChild('formDirective', { static: false }) private formDirective: NgForm;
  searchChange$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  form: FormGroup;
  listOfAllData: SurveyFolder[] = [];
  listOfUser: any;
  sortField: string | null = 'id';
  sortType: string | null = 'asc';
  searchValue = '';
  searchKey = '';
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  visible = false;
  editing = false;
  selectedEdit: SurveyFolder;
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
    private surveyFolderService: SurveyFolderService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.selectedEdit = {} as SurveyFolder;
    this.buildForm();
    this.getSurveyFolderList();

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
    this.columns = [
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      { id: 'userName', type: 'text', header: 'admin.layout.USER_NAME' },
      { id: 'title', type: 'text', sortable: true, header: 'admin.layout.TITLE' },
      { id: 'createdAt', type: 'date', sortable: true, header: 'admin.layout.CREATED_AT' },
      { id: 'createdAt', type: 'date', sortable: true, header: 'admin.layout.UPDATED_AT' }
    ];
  }
  buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, IValidators.spaceStringValidator()]],
      userId: ['', [Validators.required]]
    });
  }
  get f() {
    return this.form.controls;
  }
  getSurveyFolderList() {
    this.loaderService.display(true);
    this.surveyFolderService.getSurveyFolderList(this.pagging.page, this.pagging.pageSize, this.sortField, this.sortType, this.searchKey, this.searchValue).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllData = res.results.map((o: any) => {
          return Object.assign(o, { userName: o.user.userName });
        });
        this.pagging.total = res.paging.total;
        this.refreshStatus();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(err.message);
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  sort(sort: { key: string; value: string }): void {
    this.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.sortType = 'asc';
    } else {
      this.sortType = 'desc';
    }
    this.getSurveyFolderList();
  }
  search(): void {
    this.getSurveyFolderList();
  }
  reset(): void {
    this.searchKey = '';
    this.searchValue = '';
    this.getSurveyFolderList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getSurveyFolderList();
    this.mapOfCheckedId = {};
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfAllData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate = this.listOfAllData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
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
    this.getSurveyFolderList();
  }
  showDeleteConfirm(surveyFolderId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.DELETE_SURVEY_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        if (surveyFolderId) {
          return this.onDeleteSurveyFolder(surveyFolderId);
        }
        return this.onDeleteMultySurveyFolder();
      }
    });
  }
  openForm(surveyFolder: SurveyFolder) {
    this.visible = true;
    this.editing = false;
    this.selectedEdit = {} as SurveyFolder;
    if (surveyFolder) {
      this.editing = true;
      this.selectedEdit = Object.assign({}, surveyFolder);
    }
  }
  closeForm(): void {
    this.visible = false;
  }
  onAddSurveyFolder(formData: any, formDirective: FormGroupDirective) {
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
      return this.surveyFolderService.addSurveyFolder(formData.value).subscribe(res => {
        this.resetFormAfterSubmit(formDirective);
        this.nzMessageService.success(this.translateService.instant(res.status.message));
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
    return this.surveyFolderService.updateSurveyFolder(formData.value, this.selectedEdit.id).subscribe(res => {
      this.resetFormAfterSubmit(formDirective);
      this.nzMessageService.success(this.translateService.instant(res.status.message));
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  resetFormAfterSubmit(formDirective: FormGroupDirective) {
    this.getSurveyFolderList();
    this.editing = false;
    formDirective.resetForm();
    this.form.reset();
    this.closeForm();
  }
  onDeleteSurveyFolder(surveyFolderId: string) {
    this.loaderService.display(true);
    this.surveyFolderService.deleteSurveyFolder(surveyFolderId).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.getSurveyFolderList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  onDeleteMultySurveyFolder() {
    const surveyFolderIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.surveyFolderService.deleteMultySurveyFolder({ surveyFolderIds }).subscribe(res => {
      if (res.status.code === 200) {
        this.mapOfCheckedId = {};
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.getSurveyFolderList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
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
