import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyForm, DSurveyFormService } from '@app/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-design-survey',
  templateUrl: './design-survey.component.html',
  styleUrls: ['./design-survey.component.scss']
})
export class DesignSurveyComponent implements OnInit, OnDestroy {
  surveyFormDetail: SurveyForm;
  private subscriptions: Subscription[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private dSurveyFormService: DSurveyFormService,
    private titleService: Title
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
          this.titleService.setTitle('UetMonkey - Design - ' + this.surveyFormDetail.title);
          this.dSurveyFormService.setSurveyFormDetail(null);
        }
      })
    );
    this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
  }
  onSurveySaved(json: any) {
    if (!json) {
      return;
    }
    this.nzMessageService.loading(
      this.translateService.instant('admin.layout.SAVING')
    );
    return this.dSurveyFormService.updateSurveyForm({ json }, this.surveyFormDetail.id).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant('admin.layout.SAVED')
        );
      }
    }, err => {
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
    }
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
