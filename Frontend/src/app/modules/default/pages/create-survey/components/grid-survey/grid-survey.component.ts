import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyForm, Pagging, Filter, DSurveyFormService } from '@app/core';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared';
import * as _ from 'lodash';

@Component({
  selector: 'app-grid-survey',
  templateUrl: './grid-survey.component.html',
  styleUrls: ['./grid-survey.component.scss', './../../styles/style.scss']
})
export class GridSurveyComponent implements OnInit {
  @Input('emptyDescription') emptyDescription: string = 'default.layout.NO_RECENT_SURVEYS_FOUND';
  @Input('listOfAllData') listOfAllData: SurveyForm[] = [];
  @Input('pagging') pagging: Pagging;
  @Input('filter') filter: Filter;
  @Output('loadMore') loadMore = new EventEmitter<any>();
  @Output('previewSurvey') previewSurvey = new EventEmitter<SurveyForm>();
  constructor(
    private dSurveyFormService: DSurveyFormService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() { }
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
  loadMoreSurvey() {
    this.pagging.page += 1;
    this.loadMore.emit({
      pagging: this.pagging,
      filter: this.filter,
      listOfData: this.listOfAllData
    });
  }

  onUpdateFavorite(surveyId: string) {
    let survey;
    survey = _.find(this.listOfAllData, o => {
      return o.id === surveyId;
    });
    survey.isFavorite = survey.isFavorite ? !survey.isFavorite : true;
    if (!survey) {
      return;
    }
    this.loaderService.display(true);
    return this.dSurveyFormService.updateSurveyForm(survey, survey.id).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(
            this.translateService.instant(res.status.message)
          )
        );
        this.loaderService.display(false);
      }
    }, err => {
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
      this.loaderService.display(false);
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  onPreviewCopy(survey: SurveyForm) {
    if (survey) {
      this.previewSurvey.emit(survey);
    }
  }
}
