import { Component, OnInit } from '@angular/core';
import { SurveyForm, IValidators, SurveySend, AuthService, User, RealtimeService } from '@app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { Helpers } from '@app/shared/helpers';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared/services';
import { DSurveySendService } from '@app/core/services/default/d-survey-send.service';

@Component({
  selector: 'app-send-survey',
  templateUrl: './send-survey.component.html',
  styleUrls: ['./send-survey.component.scss']
})
export class SendSurveyComponent implements OnInit {
  form: FormGroup;
  surveyForm: SurveyForm;
  sendType: 'SEND_COPY' | 'TRANSFER';
  currentUser: User;
  constructor(
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private formBuilder: FormBuilder,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private dSurveySendService: DSurveySendService,
    private authService: AuthService,
    private realtimeService: RealtimeService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
      }
    })
  }
  
  get f() {
    return this.form.controls;
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      to: ['', [
        Validators.required,
        IValidators.spaceStringValidator()
      ]]
    });
  }

  onCancel() {
    this.modalService.closeAll();
  }

  onSend(formData: FormGroup) {
    if (formData.invalid) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    const surveySend: SurveySend = {
      from: this.currentUser.id,
      to: formData.value.to,
      surveyFormId: this.surveyForm.id,
      type: this.sendType
    }
    this.dSurveySendService.addSurveySend(surveySend).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.realtimeService.sendEvent('CLIENT_SEND_A_COPY_SURVEY', res.results[0]);
        this.modalService.closeAll();
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }
}
