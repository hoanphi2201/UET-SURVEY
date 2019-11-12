import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.autocomplete(Survey);

@Component({
  selector: 'app-survey-response',
  template: `
    <div id="surveyResponseElement"></div>
  `
})
export class SurveyResponseComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input() disabled: boolean = false;
  @Input('json') json: any;
  @Input('data') data: any;
  private result: any;

  ngOnInit() {
    const surveyModel = new Survey.Model(this.json);
    if (this.disabled) {
      surveyModel.mode = 'display';
    }
    if (this.data) {
      surveyModel.data = this.data;
    }
    surveyModel.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
    surveyModel.showTitle = false;
    Survey.SurveyNG.render('surveyResponseElement', { model: surveyModel });
  }
}
