import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);

@Component({
  selector: 'app-survey-response',
  template: `
    <div id="surveyResponseElement"></div>
  `
})
export class SurveyResponseComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input('json') json: any;
  @Input('data') data: any;

  ngOnInit() {
    setTimeout(() => {
      this.setTheme();
      const surveyModel = new Survey.Model(this.json);

      if (this.data && Object.keys(this.data).length > 0) {
        surveyModel.data = this.data;
      }
      if (this.disabled) {
        surveyModel.mode = 'display';
      }
      surveyModel.showTitle = false;
      Survey.SurveyNG.render('surveyResponseElement', { model: surveyModel });
    }, 100);
  }
  setTheme() {
    const mainColor = '#00bf6f';
    const mainHoverColor = '#6fe06f';
    const textColor = '#4a4a4a';
    const headerColor = '#001629';
    const headerBackgroundColor = '#4a4a4a';
    const bodyContainerBackgroundColor = '#f8f8f8';

    const defaultThemeColorsSurvey =
      Survey.StylesManager.ThemeColors['default'];
    defaultThemeColorsSurvey['$main-color'] = mainColor;
    defaultThemeColorsSurvey['$main-hover-color'] = mainHoverColor;
    defaultThemeColorsSurvey['$text-color'] = textColor;
    defaultThemeColorsSurvey['$header-color'] = headerColor;
    defaultThemeColorsSurvey[
      '$header-background-color'
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      '$body-container-background-color'
    ] = bodyContainerBackgroundColor;

    Survey.StylesManager.applyTheme();
  }
}