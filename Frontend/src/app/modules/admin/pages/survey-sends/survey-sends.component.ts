import { Component, OnInit } from '@angular/core';
import { FormBuilder,  } from '@angular/forms';
import { RoleService, Role, TableListColumn, Pagging, Filter, SurveySend, SurveySendService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LoaderService, WindowresizeService} from '@app/shared';
import * as _ from 'lodash';

@Component({
  selector: 'app-survey-sends',
  templateUrl: './survey-sends.component.html',
  styleUrls: ['./survey-sends.component.scss']
})
export class SurveySendsComponent implements OnInit {
  listOfAllData: SurveySend[] = [];
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
  constructor(
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private modalService: NzModalService,
    private loaderService: LoaderService,
    private surveySendService: SurveySendService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private windowresizeService: WindowresizeService
  ) { }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.getSurveySendList();
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    this.columns = [
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      { id: 'nameFrom', type: 'text', header: 'admin.layout.FROM'},
      { id: 'to', type: 'text', sortable: true, header: 'admin.layout.TO'},
      { id: 'nameForm', type: 'text', header: 'admin.layout.SURVEY_FORM'},
      { id: 'type', type: 'text', sortable: true, header: 'admin.layout.SEND_TYPE'},
      { id: 'createdAt', type: 'date', sortable: true, header: 'admin.layout.CREATED_AT' },
      { id: 'updatedAt', type: 'date', sortable: true, header: 'admin.layout.UPDATED_AT' }
    ];
  }
  mapOptionsFilter(id: string, options: any) {
    const column = this.columns.filter(col => col.filterKey === id || col.id === id)[0];
    if (column) {
      column.filter = options;
    }
  }
  getSurveySendList() {
    this.loaderService.display(true);
    this.surveySendService.getSurveySendList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllData = res.results.map((o: any) => {
          return Object.assign(o, { 
            nameFrom: o.user.userName,
            nameForm: o.surveyForm.title
          });
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
    this.getSurveySendList();
  }
  search(): void {
    this.getSurveySendList();
  }
  reset(): void {
    this.filter.searchKey = '';
    this.filter.searchValue = '';
    this.getSurveySendList();
  }
  onFilter($event: any, key: string) {
    this.filter.filterKey = key;
    this.filter.filterValue = $event;
    this.getSurveySendList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getSurveySendList();
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
    this.getSurveySendList();
  }
  showDeleteConfirm(surveySendId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.DELETE_USER_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        if (surveySendId) {
          return this.onDeleteSurveySend(surveySendId);
        }
        return this.onDeleteMultySurveySend();
      }
    });
  }

  closeForm(): void {
    this.visible = false;
  }
  
  onDeleteSurveySend(surveySendId: string) {
    this.loaderService.display(true);
    this.surveySendService.deleteSurveySend(surveySendId).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveySendList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  onDeleteMultySurveySend() {
    const surveySendIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.surveySendService.deleteMultySurveySend({ surveySendIds }).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveySendList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  openForm(surveySend: SurveySend) {

  }
}
