import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableListColumn, Pagging, Filter, ExcelService, SurveyResponse, SurveyResponseService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { LoaderService, WindowresizeService} from '@app/shared';
import * as _ from 'lodash';

@Component({
  selector: 'app-survey-responses',
  templateUrl: './survey-responses.component.html',
  styleUrls: ['./survey-responses.component.scss']
})
export class SurveyResponsesComponent implements OnInit {
  @ViewChild('tplTitleModalView', { static: false }) tplTitleModalView: TemplateRef<any>;
  @ViewChild('tplContentModalView', { static: false }) tplContentModalView: TemplateRef<any>;
  @ViewChild('tplFooterModalView', { static: false }) tplFooterModalView: TemplateRef<any>;
  listOfAllData: SurveyResponse[] = [];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  screenWidth: number;
  visible = false;
  editing = false;
  columns: TableListColumn[] = [];
  selectSurveyView: SurveyResponse;
  modalForm: NzModalRef;
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
    private surveyResponseService: SurveyResponseService,
    private excelService: ExcelService,
    private windowresizeService: WindowresizeService
  ) { }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.getSurveyResponseList();
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
    this.columns = [
      { id: 'id', type: 'text', hidden: true, header: 'admin.layout.ID' },
      { id: 'ipAddress', type: 'text', sortable: true, header: 'admin.layout.IP_ADDRESS'},
      { id: 'nameForm', type: 'text', header: 'admin.layout.SURVEY_FORM'},
      { id: 'nameCollector', type: 'text', header: 'admin.layout.SURVEY_COLLECTOR'}, 
      { id: 'totalTimeToHMS', type: 'text', sortable: true, header: 'admin.layout.TOTAL_TIME'},
      { id: 'startTime',  type: 'date', sortable: true, header: 'admin.layout.START_TIME'}, 
      { id: 'endTime',  type: 'date', sortable: true, header: 'admin.layout.END_TIME'},
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
  getSurveyResponseList() {
    this.loaderService.display(true);
    this.surveyResponseService.getSurveyResponseList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue, this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllData = res.results.map((o: any) => {
          return  {...o, nameForm: o.surveyForm.title,  nameCollector: o.surveyCollector.name, totalTimeToHMS: this.msToHMSTypicalTimeSpent(o.totalTime)};
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

  msToHMSTypicalTimeSpent(s: number) {
    function pad(n, z = 2) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return `${pad(hrs)}h:${pad(mins)}m:${pad(secs)}s`;
  }

  sort(sort: { key: string; value: string }): void {
    this.filter.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.filter.sortType = 'asc';
    } else {
      this.filter.sortType = 'desc';
    }
    this.getSurveyResponseList();
  }
  search(): void {
    this.getSurveyResponseList();
  }
  reset(): void {
    this.filter.searchKey = '';
    this.filter.searchValue = '';
    this.getSurveyResponseList();
  }
  onFilter($event: any, key: string) {
    this.filter.filterKey = key;
    this.filter.filterValue = $event;
    this.getSurveyResponseList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getSurveyResponseList();
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
    this.getSurveyResponseList();
  }
  showDeleteConfirm(surveyResponseId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.DELETE_USER_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        if (surveyResponseId) {
          return this.onDeleteSurveyResponse(surveyResponseId);
        }
        return this.onDeleteMultySurveyResponse();
      }
    });
  }

  closeForm(): void {
    this.visible = false;
  }
  
  onDeleteSurveyResponse(surveyResponseId: string) {
    this.loaderService.display(true);
    this.surveyResponseService.deleteSurveyResponse(surveyResponseId).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveyResponseList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  onDeleteMultySurveyResponse() {
    const surveyResponseIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.surveyResponseService.deleteMultySurveyResponse({ surveyResponseIds }).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.getSurveyResponseList();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  openForm(surveyResponse: SurveyResponse) {

  }
  viewSurveyForm(surveyForm: SurveyResponse) {
    this.selectSurveyView = surveyForm;
    this.modalForm = this.modalService.create({
      nzTitle: this.tplTitleModalView,
      nzContent: this.tplContentModalView,
      nzFooter: this.tplFooterModalView,
      nzWidth: 768,
      nzMaskClosable: true,
      nzClosable: true
    });
  }
  closeModal() {
    this.modalForm.destroy();
  }
  onExport(type: string) {
    const data = [];
    this.listOfAllData.forEach(row => {
      const intance = {};
      this.columns.forEach(col => {
        intance[this.translateService.instant(col.header)] = row[col.id]; 
      })
      data.push(intance);
    })
    this.excelService.exportAsExcelFile(data, 'survey_responses', type);
  }
}
