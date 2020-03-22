import {
  Component,
  OnInit,
  AfterContentInit,
  TemplateRef
} from "@angular/core";
import {
  SurveyForm,
  DSurveyFormService,
  SurveyCollector,
  Pagging,
  DSurveyCollectorService,
  Filter,
  TableListColumn,
  User,
  AuthService,
  DSurveyResponseService
} from "@app/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NzMessageService, NzModalService, NzModalRef } from "ng-zorro-antd";
import { TranslateService } from "@ngx-translate/core";
import { LoaderService } from "@app/shared";
import { RenameCollectorComponent } from "@app/shared/modals/rename-collector/rename-collector.component";
import { CloseCollectorComponent } from "@app/shared/modals/close-collector/close-collector.component";
import { OpenCollectorComponent } from "@app/shared/modals/open-collector/open-collector.component";

@Component({
  selector: "app-collect-responses",
  templateUrl: "./collect-responses.component.html",
  styleUrls: ["./collect-responses.component.scss"]
})
export class CollectResponsesComponent implements OnInit, AfterContentInit {
  listOfAllSurveyCollect: SurveyCollector[] = [];
  surveyFormDetail: SurveyForm;
  private subscriptions: Subscription[] = [];
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
  isSearch: boolean;
  currentUser: User;
  surveyCollectorDelete: SurveyCollector;
  surveyCollectorClearResponses: SurveyCollector;
  private modalForm: NzModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyCollectorService: DSurveyCollectorService,
    private dSurveyResponseService: DSurveyResponseService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
      }
    });
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { surveyFormId } = params;
        this.getSurveyFormById(surveyFormId);
      })
    );
  }

  ngAfterContentInit(): void {
    this.initTable();
  }

  initTable() {
    this.columns = [
      {
        id: "type",
        type: "icon",
        action: {
          iconMap: (type: string) => {
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
      {
        id: "name",
        td_two: "createdAt",
        className: "activity",
        type: "text",
        action: {
          link: (collectorId: string, type: string) => {
            switch (type) {
              case "WEBLINK":
                return `/create/collector-responses/collector-link/${collectorId}`;
              case "EMAIL":
                return `/create/collector-responses/collector-email/manage/${collectorId}`;
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
          classMap: (status: string) => {
            switch (status) {
              case "OPEN":
                return "open";
              case "CLOSED":
                return "closed";
              default:
                return "closed";
            }
          },
          doChangeStatus: (
            surveyCollector: SurveyCollector,
            status: string
          ) => {
            switch (status) {
              case "OPEN":
                this.showCloseCollectorModal(surveyCollector);
                break;
              case "CLOSED":
                this.showOpenCollectorModal(surveyCollector);
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
        id: "updatedAt",
        type: "date",
        sortable: true,
        header: "default.layout.DATE_MODIFIED"
      }
    ];
  }

  getSurveyFormById(surveyFormId: string) {
    this.subscriptions.push(
      this.dSurveyFormService.getSurveyFormDetail().subscribe(res => {
        if (res) {
          this.surveyFormDetail = res;
          this.getListSurveyCollector();
          this.dSurveyFormService.setSurveyFormDetail(null);
        }
      })
    );
    this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
  }

  getListSurveyCollector() {
    if (!this.surveyFormDetail.id) {
      return;
    }
    this.filter.filterValue = [this.surveyFormDetail.id];
    this.loaderService.display(true);
    this.dSurveyCollectorService
      .getDefaultSurveyCollectorList(
        this.pagging.page,
        this.pagging.pageSize,
        this.filter.sortField,
        this.filter.sortType,
        this.filter.searchKey,
        this.filter.searchValue || "",
        this.filter.filterKey,
        JSON.stringify(this.filter.filterValue)
      )
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.listOfAllSurveyCollect = res.results;
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

  sort(sort: { key: string; value: string }): void {
    this.filter.sortField = sort.key;
    if (sort.value === "ascend") {
      this.filter.sortType = "asc";
    } else {
      this.filter.sortType = "desc";
    }
    this.getListSurveyCollector();
  }
  search(): void {
    this.isSearch = true;
    if (this.filter.searchValue === "") {
      this.isSearch = false;
    }
    this.getListSurveyCollector();
  }

  onAddNewCollector(type: "WEBLINK" | "EMAIL") {
    if (!type) {
      return;
    }
    this.loaderService.display(true);
    const surveyCollector: SurveyCollector = {
      name: "",
      type,
      surveyFormId: this.surveyFormDetail.id,
      userId: this.currentUser.id
    };
    let navigateUrl = ["/dashboard"];
    switch (type) {
      case "WEBLINK":
        surveyCollector.name = "Web link";
        navigateUrl = ["/create", "collector-responses", "collector-link"];
        break;
      case "EMAIL":
        surveyCollector.name = "Email Invitation";
        navigateUrl = [
          "/create",
          "collector-responses",
          "collector-email",
          "compose"
        ];
        break;
      default:
        break;
    }
    this.dSurveyCollectorService.addSurveyCollector(surveyCollector).subscribe(
      res => {
        if (res.status.code === 200) {
          if (res.results && res.results[0]) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            navigateUrl.push(res.results[0].id);
            return this.router.navigate(navigateUrl);
          }
          return this.router.navigate(["/dashboard"]);
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

  showDeleteConfirm(
    surveyCollector: SurveyCollector,
    tplContent: TemplateRef<{}>
  ): void {
    this.surveyCollectorDelete = surveyCollector;
    this.modalService.confirm({
      nzTitle: this.translateService.instant(
        "default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_COLLECTOR"
      ),
      nzCancelText: this.translateService.instant("default.layout.CANCEL"),
      nzOkText: this.translateService.instant(
        "default.layout.DELETE_COLLECTOR"
      ),
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
    this.dSurveyCollectorService
      .deleteSurveyCollector(surveyCollectorId)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.getListSurveyCollector();
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

  showRenameCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant(
        "default.layout.EDIT_COLLECTOR_NICKNAME"
      ),
      nzFooter: null,
      nzContent: RenameCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: "rename-collector-dialog",
      nzComponentParams: { surveyCollectorRename: surveyCollector }
    });
  }

  showCloseCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant("default.layout.CLOSE_COLLECTOR"),
      nzFooter: null,
      nzContent: CloseCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: "close-collector-dialog",
      nzComponentParams: { surveyCollectorClose: surveyCollector }
    });
  }

  showOpenCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant("default.layout.OPEN_COLLECTOR"),
      nzFooter: null,
      nzContent: OpenCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: "close-collector-dialog",
      nzComponentParams: { surveyCollectorOpen: surveyCollector }
    });
  }

  showClearResponsesConfirm(
    surveyCollector: SurveyCollector,
    tplContent: TemplateRef<{}>
  ): void {
    this.surveyCollectorClearResponses = surveyCollector;
    this.modalService.confirm({
      nzTitle: this.translateService.instant(
        "default.layout.ARE_YOU_SURE_YOU_WANT_TO_CLEAR_ALL_THE_RESPONSES_IN_THIS_COLLECTOR"
      ),
      nzCancelText: this.translateService.instant("default.layout.CANCEL"),
      nzOkText: this.translateService.instant("default.layout.CLEAR_RESPONSES"),
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
    this.dSurveyResponseService
      .clearResponsesByCollector(surveyCollectorId)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.getListSurveyCollector();
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
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
