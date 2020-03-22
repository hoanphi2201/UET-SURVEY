import { Component, OnInit } from "@angular/core";
import {
  TableListColumn,
  Pagging,
  Filter,
  ExcelService,
  SurveyRecipient,
  SurveyRecipientService
} from "@app/core";
import { TranslateService } from "@ngx-translate/core";
import { NzMessageService, NzModalService } from "ng-zorro-antd";
import { LoaderService, WindowresizeService } from "@app/shared";
import * as _ from "lodash";

@Component({
  selector: "app-survey-recipients",
  templateUrl: "./survey-recipients.component.html",
  styleUrls: ["./survey-recipients.component.scss"]
})
export class SurveyRecipientsComponent implements OnInit {
  listOfAllData: SurveyRecipient[] = [];
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
    searchKey: "name",
    searchValue: "",
    sortField: "createdAt",
    sortType: "desc",
    filterKey: "surveyFormId",
    filterValue: []
  };
  constructor(
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private modalService: NzModalService,
    private loaderService: LoaderService,
    private surveyRecipientService: SurveyRecipientService,
    private excelService: ExcelService,
    private windowresizeService: WindowresizeService
  ) {}
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.windowresizeService.getSize().subscribe(size => {
      this.screenWidth = +size.innerWidth;
    });
    this.getSurveyRecipientList();
  }
  ngAfterContentInit(): void {
    this.initTable();
  }
  initTable() {
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
  }
  mapOptionsFilter(id: string, options: any) {
    const column = this.columns.filter(
      col => col.filterKey === id || col.id === id
    )[0];
    if (column) {
      column.filter = options;
    }
  }
  getSurveyRecipientList() {
    this.loaderService.display(true);
    this.surveyRecipientService
      .getSurveyRecipientList(
        this.pagging.page,
        this.pagging.pageSize,
        this.filter.sortField,
        this.filter.sortType,
        this.filter.searchKey,
        this.filter.searchValue,
        this.filter.filterKey,
        JSON.stringify(this.filter.filterValue)
      )
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.listOfAllData = res.results.map((o: any) => {
              return { ...o, nameCollector: o.surveyCollector.name };
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

  sort(sort: { key: string; value: string }): void {
    this.filter.sortField = sort.key;
    if (sort.value === "ascend") {
      this.filter.sortType = "asc";
    } else {
      this.filter.sortType = "desc";
    }
    this.getSurveyRecipientList();
  }
  search(): void {
    this.getSurveyRecipientList();
  }
  reset(): void {
    this.filter.searchKey = "";
    this.filter.searchValue = "";
    this.getSurveyRecipientList();
  }
  onFilter($event: any, key: string) {
    this.filter.filterKey = key;
    this.filter.filterValue = $event;
    this.getSurveyRecipientList();
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getSurveyRecipientList();
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
    this.getSurveyRecipientList();
  }
  showDeleteConfirm(surveyRecipientId?: string): void {
    this.modalService.confirm({
      nzTitle: this.translateService.instant("admin.layout.DELETE_USER_TITLE"),
      nzCancelText: this.translateService.instant("admin.layout.NO"),
      nzOkText: this.translateService.instant("admin.layout.YES"),
      nzOnOk: () => {
        if (surveyRecipientId) {
          return this.onDeleteSurveyRecipient(surveyRecipientId);
        }
        return this.onDeleteMultySurveyRecipient();
      }
    });
  }

  closeForm(): void {
    this.visible = false;
  }

  onDeleteSurveyRecipient(surveyRecipientId: string) {
    this.loaderService.display(true);
    this.surveyRecipientService
      .deleteSurveyRecipient(surveyRecipientId)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.getSurveyRecipientList();
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
  onDeleteMultySurveyRecipient() {
    const surveyRecipientIds = _.keys(_.pickBy(this.mapOfCheckedId));
    this.loaderService.display(true);
    this.surveyRecipientService
      .deleteMultySurveyRecipient({ surveyRecipientIds })
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.getSurveyRecipientList();
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
  openForm(surveyRecipient: SurveyRecipient) {}
  onExport(type: string) {
    const data = [];
    this.listOfAllData.forEach(row => {
      const intance = {};
      this.columns.forEach(col => {
        intance[this.translateService.instant(col.header)] = row[col.id];
      });
      data.push(intance);
    });
    this.excelService.exportAsExcelFile(data, "survey_recipients", type);
  }
}
