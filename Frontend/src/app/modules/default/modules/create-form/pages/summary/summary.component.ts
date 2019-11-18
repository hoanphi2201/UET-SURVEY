import { Component, OnInit } from '@angular/core';
import { DSurveyFormService, SurveyForm, Pagging, Filter, DSurveyCollectorService, SurveyCollector } from '@app/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from '@app/shared';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  surveyFormDetail: SurveyForm;
  listOfAllSurveyCollect: SurveyCollector[] = [];
  private subscriptions: Subscription[] = [];
  pagging: Pagging = {
    page: 1,
    total: 0,
    pageSize: 5
  };
  filter: Filter = {
    searchKey: 'title',
    searchValue: '',
    sortField: 'response',
    sortType: 'desc',
    filterKey: 'surveyFormId',
    filterValue: []
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyCollectorService: DSurveyCollectorService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { surveyFormId } = params;
        this.getSurveyFormById(surveyFormId);
      })
    );
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
    this.dSurveyCollectorService.getDefaultSurveyCollectorList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || '', this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllSurveyCollect = res.results;
        this.pagging.total = res.paging.total;
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
  get displayPageSurvey() {
    if (!this.surveyFormDetail) {
      return;
    }
    if (!this.surveyFormDetail.json) {
      return 0;
    }
    return this.surveyFormDetail.json['pages'].length;
  }
  countQuestionSurvey(json: any) {
    const defaultValue = 0;
    if (!json) {
      return defaultValue;
    }
    let total = 0;
    try {
      json.pages.forEach(o => {
        if (o.elements && Array.isArray(o.elements)) {
          total += o.elements.length;
        }
      });
    } catch (error) {
      return defaultValue;
    }
    return total >= defaultValue ? total : defaultValue;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  getLinkCollecttor(collectorId: string, type: 'WEBLINK' | 'EMAIL') {
    switch (type) {
      case 'WEBLINK':
        return `/create/collector-responses/collector-link/${collectorId}`;
      case 'EMAIL':
        return `/create/collector-responses/collector-email/manage/${collectorId}`;
      default:
        return 'loading';
    }
  }
}
