import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SurveyCollector, IValidators, DSurveyCollectorService } from '@app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Helpers } from '@app/shared/helpers';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-collector-options',
  templateUrl: './collector-options.component.html',
  styleUrls: ['./collector-options.component.scss']
})
export class CollectorOptionsComponent implements OnInit, OnChanges {
  @Input('surveyCollectorDetail') surveyCollectorDetail: SurveyCollector;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dSurveyCollectorService: DSurveyCollectorService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    
  }
  get f() {
    return this.form.controls;
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      thankYouMessage: ['', [Validators.required, IValidators.spaceStringValidator()]],
      allowMultipleResponses: ['', []],
      anonymousType: ['', []],
      displaySurveyResults: ['', []],
      closeDateEnabled: ['', []],
      closeDate: ['', []],
      responseLimitEnabled: ['', []],
      responseLimit: ['', [Validators.min(1)]],
      passwordEnabled: ['', []],
      password: ['', []],
      passwordLabel: ['', []],
      passwordRequiredMessage: ['', []],
      passwordRequiredErrorMessage: ['', []]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.surveyCollectorDetail && changes.surveyCollectorDetail.currentValue) {
      this.buildForm();
      this.patchForm();
    }
  }
  private patchForm() {
    if (!this.surveyCollectorDetail) {
      return;
    }
    
    this.form.patchValue({
      thankYouMessage: this.surveyCollectorDetail.thankYouMessage,
      allowMultipleResponses: this.surveyCollectorDetail.allowMultipleResponses || false,
      anonymousType: this.surveyCollectorDetail.anonymousType || false,
      displaySurveyResults: this.surveyCollectorDetail.displaySurveyResults || false,
      closeDateEnabled: this.surveyCollectorDetail.closeDateEnabled || false,
      closeDate: this.surveyCollectorDetail.closeDate || new Date(),
      responseLimitEnabled: this.surveyCollectorDetail.responseLimitEnabled || false,
      responseLimit: this.surveyCollectorDetail.responseLimit || '',
      passwordEnabled: this.surveyCollectorDetail.passwordEnabled || false,
      password: this.surveyCollectorDetail.password || '',
      passwordLabel: this.surveyCollectorDetail.passwordLabel || 'Enter Password',
      passwordRequiredMessage: this.surveyCollectorDetail.passwordRequiredMessage || 'This survey requires a password.<br /><br />If you do not know the password, contact the author of this survey for further assistance.',
      passwordRequiredErrorMessage: this.surveyCollectorDetail.passwordRequiredErrorMessage || 'The password entered was incorrect please check your data and try again.'
    });
  }

  onSaveSurveyCollector(name: string, value: any) {
    if (this.surveyCollectorDetail[name] === value) {
      return;
    }
    if (this.form.invalid) {
      Helpers.validateAllFormFields(this.form);
      return;
    }
    if (Helpers.isString(value)) {
      value = value.trim();
    }
    const dataUpdate = {};
    dataUpdate[name] = value;
    this.dSurveyCollectorService.updateSurveyCollector(this.surveyCollectorDetail.id, dataUpdate).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant('default.layout.YOUR_CHANGES_HAVE_BEEN_SAVED')
        );
        this.surveyCollectorDetail = Object.assign(
          this.surveyCollectorDetail,
          dataUpdate
        );
        this.form.patchValue(dataUpdate);
      }
    }, err => {
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
    }
    );
  }


}
