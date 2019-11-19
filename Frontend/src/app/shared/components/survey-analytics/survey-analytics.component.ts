import { Component, OnInit, Input } from '@angular/core';
import * as Survey from 'survey-angular';
import * as SurveyAnalytics from 'survey-analytics';
import { LoaderService } from '@app/shared/services';

@Component({
  selector: 'app-survey-analytics',
  template: `
    <div class="surveyAnalyticsContainer" id="surveyAnalyticsContainer"></div>
  `
})
export class SurveyAnalyticsComponent implements OnInit {
  @Input() json: any;
  @Input() data: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderService.display(true);
      try {
        const survey = new Survey.SurveyModel(this.json);
        const normalizedData = this.data.map(item => {
          survey.getAllQuestions().forEach(q => {
            if (!item[q.name]) {
              item[q.name] = '';
            }
          });
          return item;
        });

        const visPanel = new SurveyAnalytics.VisualizationPanel(
          document.getElementById('surveyAnalyticsContainer'),
          survey.getAllQuestions(),
          normalizedData
        );
        visPanel.render();
        this.loaderService.display(false);
      } catch (error) {
        this.loaderService.display(false);
       }
    }, 100);
  }
}
