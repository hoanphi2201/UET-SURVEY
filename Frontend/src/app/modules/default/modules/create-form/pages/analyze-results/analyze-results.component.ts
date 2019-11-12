import { Component, OnInit } from '@angular/core';
import {
  SurveyForm,
  DSurveyFormService,
  DSurveyResponseService,
  SurveyResponse
} from '@app/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared';

@Component({
  selector: 'app-analyze-results',
  templateUrl: './analyze-results.component.html',
  styleUrls: ['./analyze-results.component.scss']
})
export class AnalyzeResultsComponent implements OnInit {
  surveyFormDetail: SurveyForm;
  private listOfAllSurveyResponse: SurveyResponse[];
  listOfAllDataSurveyResponse: any[];
  private subscriptions: Subscription[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyResponseService: DSurveyResponseService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService
  ) {}
  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { surveyFormId } = params;
        this.getSurveyFormById(surveyFormId);
        this.getResponsesBySurveyForm(surveyFormId);
      })
    );
  }
  private getResponsesBySurveyForm(surveyFormId: string) {
    this.loaderService.display(true);
    this.dSurveyResponseService
      .getResponsesBySurveyForm(surveyFormId)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.listOfAllSurveyResponse = res.results;
            this.listOfAllDataSurveyResponse = [];
            this.listOfAllSurveyResponse.forEach((o: SurveyResponse) => {
              if (o.json && Object.keys(o.json).length > 0) {
                this.listOfAllDataSurveyResponse.push(o.json);
              }
            });
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
  private getSurveyFormById(surveyFormId: string) {
    this.subscriptions.push(
      this.dSurveyFormService.getSurveyFormDetail().subscribe(res => {
        if (res) {
          this.surveyFormDetail = res;
          this.dSurveyFormService.setSurveyFormDetail(null);
        }
      })
    );
    this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
