import { Component, OnInit, TemplateRef,  } from '@angular/core';
import { FormGroup,  } from '@angular/forms';
import { TableListColumn, Pagging, SurveyCollector, SurveyCollectorService, SurveyResponseService, Filter } from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { LoaderService, WindowresizeService, Helpers } from '@app/shared';
import * as _ from 'lodash';
import { OpenCollectorComponent } from '@app/shared/modals/open-collector/open-collector.component';
import { CloseCollectorComponent } from '@app/shared/modals/close-collector/close-collector.component';
import { RenameCollectorComponent } from '@app/shared/modals/rename-collector/rename-collector.component';

@Component({
  selector: 'app-survey-collectors',
  templateUrl: './survey-collectors.component.html',
  styleUrls: ['./survey-collectors.component.scss']
})
export class SurveyCollectorsComponent implements OnInit {
  listOfAllData: SurveyCollector[] = [];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  screenWidth: number;
  visible = false;
  editing = false;
  columns: TableListColumn[] = [];
  pagging: Pagging = {
    page: 1,
    total: 0,
    pageSize: 10
  };
  filter: Filter = {
    searchKey: 'name',
    searchValue: '',
    sortField: 'createdAt',
    sortType: 'desc',
    filterKey: 'surveyFormId',
    filterValue: []
  };
  surveyCollectorDelete: SurveyCollector;
  surveyCollectorClearResponses: SurveyCollector;
  private modalForm: NzModalRef;
  constructor(
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private modalService: NzModalService,
    private loaderService: LoaderService,
    private surveyCollectorService: SurveyCollectorService,
    private windowresizeService: WindowresizeService,
    private surveyResponseService: SurveyResponseService
  ) { }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.getSurveyCollectorList();
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    this.columns = [
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      {
        id: 'type',
        type: 'icon',
        action: {
          iconMap: (type: string) => {
            switch (type) {
              case 'WEBLINK':
                return 'link';
              case 'EMAIL':
                return 'mail';
              default:
                return 'loading';
            }
          }
        },
        sortable: true,
        header: 'default.layout.ICON'
      },
      {id: 'formName', type: 'text', header: 'admin.layout.SURVEY_FORM' },
      {
        id: 'name',
        td_two: 'createdAt',
        className: 'activity',
        type: 'text',
        search: true,
        action: {
          link: (collectorId: string, type: string) => {
            switch (type) {
              case 'WEBLINK':
                return `/create/collector-responses/collector-link/${collectorId}`;
              case 'EMAIL':
                return `/create/collector-responses/collector-email/manage/${collectorId}`;
              default:
                return 'loading';
            }
            
          }
        },
        sortable: true,
        header: 'default.layout.TITLE'
      },
      {
        id: 'status',
        type: 'status',
        sortable: true,
        action: {
          classMap: (status: string) => {
            switch (status) {
              case 'OPEN':
                return 'open';
              case 'CLOSED':
                return 'closed';
              default:
                return 'closed';
            }
          },
          doChangeStatus: (
            surveyCollector: SurveyCollector,
            status: string
          ) => {
            switch (status) {
              case 'OPEN':
                this.showCloseCollectorModal(surveyCollector);
                break;
              case 'CLOSED':
                this.showOpenCollectorModal(surveyCollector);
                break;
            }
          }
        },
        header: 'default.layout.STATUS'
      },
      {
        id: 'response',
        type: 'text',
        sortable: true,
        header: 'default.layout.RESPONSES'
      },
      {
        id: 'createdAt',
        type: 'date',
        sortable: true,
        header: 'admin.layout.DATE_CREATED'
      },
      {
        id: 'updatedAt',
        type: 'date',
        sortable: true,
        header: 'default.layout.DATE_MODIFIED'
      }
    ];
  }
  showCloseCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.CLOSE_COLLECTOR'),
      nzFooter: null,
      nzContent: CloseCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'close-collector-dialog',
      nzComponentParams: { surveyCollectorClose: surveyCollector }
    });
  }
  showOpenCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.OPEN_COLLECTOR'),
      nzFooter: null,
      nzContent: OpenCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'close-collector-dialog',
      nzComponentParams: { surveyCollectorOpen: surveyCollector }
    });
  }
  
  mapOptionsFilter(id: string, options: any) {
    const column = this.columns.filter(col => col.filterKey === id || col.id === id)[0];
    if (column) {
      column.filter = options;
    }
  }
  getSurveyCollectorList() {
    this.loaderService.display(true);
    this.surveyCollectorService.getSurveyCollectorList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllData = res.results.map(o => {
          return Object.assign(o, {formName: o.surveyForm.title})
        });
        this.pagging.total = res.paging.total;
        this.refreshStatus();
      }
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
  
  sort(sort: { key: string; value: string }): void {
    this.filter.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.filter.sortType = 'asc';
    } else {
      this.filter.sortType = 'desc';
    }
    this.getSurveyCollectorList();
  }
  search(): void {
    this.getSurveyCollectorList();
  }
  reset(): void {
    this.filter.searchKey = '';
    this.filter.searchValue = '';
    this.getSurveyCollectorList();
  }
  onFilter($event: any, key: string) {
    this.filter.filterKey = key;
    this.filter.filterValue = $event;
    this.getSurveyCollectorList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getSurveyCollectorList();
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
    this.getSurveyCollectorList();
  }
  
  openForm(surveyCollector: SurveyCollector) {

  }

  showDeleteConfirm(surveyCollector: SurveyCollector, tplContent: TemplateRef<{}>): void {
    this.surveyCollectorDelete = surveyCollector;
    this.modalService.confirm({
      nzTitle: this.translateService.instant('default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_COLLECTOR'),
      nzCancelText: this.translateService.instant('default.layout.CANCEL'),
      nzOkText: this.translateService.instant('default.layout.DELETE_COLLECTOR'),
      nzContent: tplContent,
      nzOnOk: () => {
        if (surveyCollector) {
          return this.onDeleteSurveyCollector(surveyCollector.id);
        }
      }
    });
  }

  private onDeleteSurveyCollector(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.surveyCollectorService.deleteSurveyCollector(surveyCollectorId).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveyCollectorList();
      }
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

  showRenameCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.EDIT_COLLECTOR_NICKNAME'),
      nzFooter: null,
      nzContent: RenameCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'rename-collector-dialog',
      nzComponentParams: { surveyCollectorRename: surveyCollector }
    });
  }

  showClearResponsesConfirm(surveyCollector: SurveyCollector, tplContent: TemplateRef<{}>): void {
    this.surveyCollectorClearResponses = surveyCollector;
    this.modalService.confirm({
      nzTitle: this.translateService.instant('default.layout.ARE_YOU_SURE_YOU_WANT_TO_CLEAR_ALL_THE_RESPONSES_IN_THIS_COLLECTOR'),
      nzCancelText: this.translateService.instant('default.layout.CANCEL'),
      nzOkText: this.translateService.instant('default.layout.CLEAR_RESPONSES'),
      nzContent: tplContent,
      nzOnOk: () => {
        if (surveyCollector) {
          return this.clearResponsesByCollector(surveyCollector.id);
        }
      }
    });
  }
  private clearResponsesByCollector(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.surveyResponseService.clearResponsesByCollector(surveyCollectorId).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.getSurveyCollectorList();
      }
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
  showDeleteMultyConfirm(): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.DELETE_USER_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        return this.onDeleteMultySurveyCollector();
      }
    });
  }
  onDeleteMultySurveyCollector() {
    const surveyCollectorIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.surveyCollectorService.deleteMultySurveyCollector({ surveyCollectorIds }).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveyCollectorList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
}
