import { Component, OnInit } from '@angular/core';
import { SurveyForm, DSurveyFormService } from '@app/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preview-score',
  templateUrl: './preview-score.component.html',
  styleUrls: ['./preview-score.component.scss']
})
export class PreviewScoreComponent implements OnInit {
  surveyFormDetail: SurveyForm;
  private subscriptions: Subscription[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyFormService: DSurveyFormService
  ) {}

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
