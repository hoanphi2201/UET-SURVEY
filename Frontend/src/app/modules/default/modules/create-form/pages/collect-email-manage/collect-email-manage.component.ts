import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DSurveyFormService, DSurveyCollectorService, SurveyCollector, Filter, Pagging, DSurveyRecipientService, SurveyRecipient, TableListColumn } from '@app/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NzModalService, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { LoaderService } from '@app/shared';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ContactDetailsComponent } from '@app/shared/modals/contact-details/contact-details.component';

@Component({
  selector: 'app-collect-email-manage',
  templateUrl: './collect-email-manage.component.html',
  styleUrls: ['./collect-email-manage.component.scss']
})
export class CollectEmailManageComponent implements OnInit, AfterContentInit {
  surveyCollectorDetail: SurveyCollector;
  private subscriptions: Subscription[] = [];
  listOfAllSurveyRecipient: SurveyRecipient[];
  columns: TableListColumn[] = [];
  filter: Filter = {
    sortField: 'createdAt',
    sortType: 'desc',
    searchKey: 'email',
    searchValue: '',
    filterKey: 'surveyCollectorId',
    filterValue: []
  };
  pagging: Pagging = { page: 1, total: 0, pageSize: 10 };
  private modalForm: NzModalRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyCollectorService: DSurveyCollectorService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private router: Router,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyRecipientService: DSurveyRecipientService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { collectorId } = params;
        this.getSurveyCollectorById(collectorId);
        this.filter.filterValue = [collectorId];
        this.getListSurveyRecipient();
      })
    );
  }

  ngAfterContentInit(): void {
    this.initTable();
  }

  initTable() {
    this.columns = [
      { id: 'email', type: 'text', sortable: true, header: 'default.layout.EMAIL'},
      { id: 'firstName', type: 'text', sortable: true, header: 'default.layout.FIRST_NAME' },
      { id: 'lastName', type: 'text', sortable: true, header: 'default.layout.LAST_NAME' },
      { id: 'mailStatus', type: 'text', sortable: true, header: 'default.layout.SENT' },
      { id: 'createdAt', type: 'date', sortable: true, header: 'default.layout.DATE_CREATED' }
    ];
  }

  private getSurveyCollectorById(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.dSurveyCollectorService.getSurveyCollectorById(surveyCollectorId).subscribe(res => {
      if (res.status.code === 200) {
        if (res.results && res.results[0]) {
          this.surveyCollectorDetail = res.results[0];
          this.dSurveyFormService.setSurveyFormDetail(this.surveyCollectorDetail.surveyForm);
        } else {
          this.nzMessageService.warning(this.translateService.instant('admin.layout.SURVEY_COLLECTOR_NOT_EXIST'));
          this.router.navigate(['/dashboard']);
        }
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

  private getListSurveyRecipient() {
    this.loaderService.display(true);
    this.dSurveyRecipientService.getSurveyRecipientList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || '', this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllSurveyRecipient = res.results;
        this.pagging.total = res.paging.total;
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }

  onShowModalContactDetails(surveyRecipient: SurveyRecipient) {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.VIEW_RECIPIENT'),
      nzFooter: null,
      nzContent: ContactDetailsComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'contact-detail-dialog',
      nzComponentParams: { surveyRecipientDetails: surveyRecipient },
    });
    this.subscriptions.push(this.modalForm.afterClose.subscribe(() => {
      this.getListSurveyRecipient();
    }))
  }
  sort(sort: { key: string; value: string }): void {
    this.filter.sortField = sort.key;
    if (sort.value === 'ascend') {
      this.filter.sortType = 'asc';
    } else {
      this.filter.sortType = 'desc';
    }
    this.getListSurveyRecipient();
  }
  search(): void {
    this.getListSurveyRecipient();
  }
  reset(): void {
    this.filter.searchKey = '';
    this.filter.searchValue = '';
    this.getListSurveyRecipient()
  }
  pageIndexChange($event: any) {
    this.pagging.page = $event;
    this.getListSurveyRecipient()
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
