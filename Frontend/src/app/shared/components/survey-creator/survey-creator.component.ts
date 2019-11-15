import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
import * as SurveyCreator from 'survey-creator';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import * as SurveyKo from 'survey-knockout';

widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);

import 'inputmask/dist/inputmask/phone-codes/phone.js';
import { NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared/services';
@Component({
  selector: 'survey-creator',
  template: `
    <div id="surveyCreatorContainer"></div>
  `
})
export class SurveyCreatorComponent implements OnInit, AfterViewInit {
  surveyCreator: SurveyCreator.SurveyCreator;

  @Input() json: any;
  @Input() activeTab: string;
  @Output() surveySaved: EventEmitter<any> = new EventEmitter();
  constructor(
    private modalService: NzModalService,
    private translateService: TranslateService
  ) { }
  ngOnInit() {
    // Change theme
    setTimeout(() => {
      this.setTheme();

      const options = {
        showJSONEditorTab: false,
        generateValidJSON: false,
        showTestSurveyTab: true,
        showTranslationTab: true,
        showLogicTab: true,
        showState: true
      };
      SurveyCreator[
        'localization'
      ].getLocale().ed.saved = this.translateService.instant(
        'admin.layout.SAVE_SURVEY_TO_SERVICE'
      );
      this.surveyCreator = new SurveyCreator.SurveyCreator(
        'surveyCreatorContainer',
        options
      );
      this.surveyCreator.koHideAdvancedSettings(true);
      this.surveyCreator.isAutoSave = true;
      if (this.json) {
        this.surveyCreator.text = JSON.stringify(this.json);
      }
      this.surveyCreator.saveSurveyFunc = (saveNo, callback) => {
        this.saveMySurvey();
        !!callback && callback(saveNo, true);
      };
      this.surveyCreator.toolbarItems.push({
        id: 'clear-survey',
        visible: true,
        icon: 'icon-actiondelete',
        title: this.translateService.instant('admin.layout.CLEAR_SURVEY'),
        action: () => {
          this.showModelClearSurvey();
        }
      });
      if (this.activeTab) {
        this.surveyCreator.makeNewViewActive(this.activeTab);
      }
    }, 10);
  }
  ngAfterViewInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.json && changes.json.currentValue && this.surveyCreator) {
      this.surveyCreator.text = JSON.stringify(changes.json.currentValue);
    }
  }
  saveMySurvey = () => {
    this.surveySaved.emit(eval('(' + this.surveyCreator.text + ')'));
  };
  showModelClearSurvey() {
    this.modalService.confirm({
      nzTitle: this.translateService.instant('admin.layout.CLEAR_SURVEY_TITLE'),
      nzCancelText: this.translateService.instant('admin.layout.NO'),
      nzOkText: this.translateService.instant('admin.layout.YES'),
      nzOnOk: () => {
        this.surveyCreator.text = '';
        this.saveMySurvey();
      }
    });
  }
  setTheme() {
    const mainColor = '#00bf6f';
    const mainHoverColor = '#6fe06f';
    const textColor = '#4a4a4a';
    const headerColor = '#001629';
    const headerBackgroundColor = '#4a4a4a';
    const bodyContainerBackgroundColor = '#f8f8f8';

    const defaultThemeColorsSurvey = Survey.StylesManager.ThemeColors['default'];
    defaultThemeColorsSurvey['$main-color'] = mainColor;
    defaultThemeColorsSurvey['$main-hover-color'] = mainHoverColor;
    defaultThemeColorsSurvey['$text-color'] = textColor;
    defaultThemeColorsSurvey['$header-color'] = headerColor;
    defaultThemeColorsSurvey['$header-background-color'] = headerBackgroundColor;
    defaultThemeColorsSurvey['$body-container-background-color'] = bodyContainerBackgroundColor;

    const defaultThemeColorsEditor = SurveyCreator.StylesManager.ThemeColors['default'];
    defaultThemeColorsEditor['$primary-color'] = mainColor;
    defaultThemeColorsEditor['$secondary-color'] = mainColor;
    defaultThemeColorsEditor['$primary-hover-color'] = mainHoverColor;
    defaultThemeColorsEditor['$primary-text-color'] = textColor;
    defaultThemeColorsEditor['$selection-border-color'] = mainColor;

    Survey.StylesManager.applyTheme();
    SurveyCreator.StylesManager.applyTheme();
  }
}
