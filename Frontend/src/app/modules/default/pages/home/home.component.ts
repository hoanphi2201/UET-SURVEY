import { Component, OnInit, AfterContentInit } from '@angular/core';
import {
  Pagging,
  TableListColumn,
  DSurveyFormService,
  SurveyForm,
  DSurveyFolderService,
  SurveyFolder,
  IValidators
} from '@app/core';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService, Helpers } from '@app/shared';
import * as _ from 'lodash';
import { ManageFoldersComponent } from '@app/shared/modals/manage-folders/manage-folders.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  listOfAllSurveyForm: SurveyForm[] = [];
  listOfAllSurveyFolder: SurveyFolder[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  searchKey = 'title';
  searchValue: string;
  sortField: string | null = 'createdAt';
  sortType: string | null = 'desc';
  filterKey = '';
  filterValue: any[] = [];
  columns: TableListColumn[] = [];
  showMoveToFolder = false;
  folderSelectTitle = 'All';
  folderSelectId = 'all';
  pagging: Pagging = {
    page: 1,
    total: 0,
    pageSize: 10
  };
  modalForm: NzModalRef;
  newFolder = false;
  addFolderForm: FormGroup;
  constructor(
    private dSurveyFormService: DSurveyFormService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private dSurveyFolderService: DSurveyFolderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getListSurvey();
    this.getListSurveyFolder();
    this.dSurveyFolderService.getRefreshList().subscribe(res => {
      if (res) {
        this.getListSurveyFolder();
        this.dSurveyFolderService.setRefreshList(false);
      }
    });
  }
  buildForm() {
    this.addFolderForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(120),
          IValidators.spaceStringValidator()
        ]
      ]
    });
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    // tslint:disable-next-line:max-line-length
    this.columns = [
      {
        id: 'title',
        td_two: 'createdAt',
        className: 'activity',
        type: 'text',
        action: {
          link: (surveyId: string) => {
            return `/create/summary/${surveyId}`;
          }
        },
        sortable: true,
        header: 'default.layout.TITLE'
      },
      {
        id: 'updatedAt',
        type: 'date',
        sortable: true,
        header: 'default.layout.MODIFIED'
      },
      {
        id: 'response',
        type: 'text',
        sortable: true,
        header: 'default.layout.RESPONSES'
      },
      {
        id: '',
        type: 'action',
        action: {
          link: (surveyId: string) => {
            return `/create/design-survey/${surveyId}`;
          },
          icon: 'form'
        },
        header: 'default.layout.DESIGN'
      },
      {
        id: '',
        type: 'action',
        action: {
          link: (surveyId: string) => {
            return '';
          },
          icon: 'link'
        },
        header: 'default.layout.COLLECT'
      },
      {
        id: '',
        type: 'action',
        action: {
          link: (surveyId: string) => {
            return '';
          },
          icon: 'bar-chart'
        },
        header: 'default.layout.ANALYZE'
      },
      {
        id: '',
        type: 'action',
        action: {
          link: (surveyId: string) => {
            return '';
          },
          icon: 'share-alt'
        },
        header: 'default.layout.SHARE'
      }
    ];
  }
  getListSurvey() {
    if (this.folderSelectId !== 'all') {
      this.filterValue = [this.folderSelectId];
      this.filterKey = 'surveyFolderId';
    } else {
      this.filterValue = [];
      this.filterKey = '';
    }
    this.loaderService.display(true);
    const countColumn = 'response';
    this.dSurveyFormService
      .getDefaultSurveyFormList(
        this.pagging.page,
        this.pagging.pageSize,
        this.sortField,
        this.sortType,
        this.searchKey,
        this.searchValue || '',
        this.filterKey,
        JSON.stringify(this.filterValue),
        countColumn
      )
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.listOfAllSurveyForm = res.results;
            this.pagging.total = res.paging.total;
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
  getListSurveyFolder() {
    this.dSurveyFolderService.getAllSurveyFolderList().subscribe(
      res => {
        if (res.status.code === 200) {
          this.listOfAllSurveyFolder = res.results;
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
  sort(sort: { key: string; value: string }): void {
    this.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.sortType = 'asc';
    } else {
      this.sortType = 'desc';
    }
    this.getListSurvey();
  }
  search(): void {
    this.getListSurvey();
  }
  reset(): void {
    this.searchKey = '';
    this.searchValue = '';
    this.getListSurvey();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getListSurvey();
    this.mapOfCheckedId = {};
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfAllSurveyForm.every(
      item => this.mapOfCheckedId[item.id]
    );
    this.isIndeterminate =
      this.listOfAllSurveyForm.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllSurveyForm.filter(
      item => this.mapOfCheckedId[item.id]
    ).length;
  }
  checkItem(id: string, $event: any) {
    this.mapOfCheckedId[id] = $event;
    this.refreshStatus();
  }
  checkAll(value: boolean): void {
    this.listOfAllSurveyForm.forEach(
      item => (this.mapOfCheckedId[item.id] = value)
    );
    this.refreshStatus();
  }
  pageSizeChange($event: any) {
    this.pagging.pageSize = $event;
    this.getListSurvey();
  }
  onShowMoveToFolder() {
    this.mapOfCheckedId = {};
    this.refreshStatus();
    this.showMoveToFolder = !this.showMoveToFolder;
  }
  showSurveyInFolder(folderId: string) {
    this.folderSelectId = folderId;
    this.mapOfCheckedId = {};
    this.refreshStatus();
    if (folderId === 'all') {
      this.folderSelectTitle = 'All';
    } else {
      this.folderSelectTitle = this.listOfAllSurveyFolder.filter(
        folder => folder.id === folderId
      )[0].title;
    }
    this.getListSurvey();
  }
  onMoveSurveyToFolder(folderId: string) {
    const surveyFormIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.dSurveyFormService
      .moveSurveyFormToFolder(folderId, surveyFormIds)
      .subscribe(
        res => {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          if (res.results.length > 0) {
            this.getListSurveyFolder();
            this.getListSurvey();
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
  openModal(): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.MANAGE_FOLDERS'),
      nzFooter: [
        {
          label: this.translateService.instant('default.layout.DONE'),
          type: 'primary',
          onClick: () => {
            this.modalForm.destroy();
          }
        }
      ],
      nzContent: ManageFoldersComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'manage-folders-dialog'
    });
  }
  updateNewFolder(value: boolean) {
    this.newFolder = value;
  }
  onAddNewFolder(formData: FormGroup) {
    if (this.addFolderForm.invalid) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    this.dSurveyFolderService.addSurveyFolder(formData.value).subscribe(
      res => {
        if (res.status.code === 200) {
          this.onMoveSurveyToFolder(res.results[0].id);
          formData.reset();
          this.updateNewFolder(false);
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
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  get f() {
    return this.addFolderForm.controls;
  }
}
