import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DSurveyCollectorService, DSurveyFormService, SurveyCollector, IValidators, DSurveyRecipientService, SurveyRecipient } from '@app/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService, Helpers } from '@app/shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collect-email-compose',
  templateUrl: './collect-email-compose.component.html',
  styleUrls: ['./collect-email-compose.component.scss']
})
export class CollectEmailComposeComponent implements OnInit {
  @ViewChild('tplContentRecipientsRemoved', {static: false}) tplContentRecipientsRemoved: TemplateRef<any>;
  DEFAULT_SUBJECT = 'We want your opinion 1';
  DEFAULT_MESSAGE = "We're conducting a survey and your input would be appreciated. Click the button below to start the survey. Thank you for your participation!";
  formCompose: FormGroup;
  formSchedule: FormGroup;
  surveyCollectorDetail: SurveyCollector;
  private subscriptions: Subscription[] = [];
  currentStep = 1;
  emails: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyCollectorService: DSurveyCollectorService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NzModalService,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyRecipientService: DSurveyRecipientService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { collectorId } = params;
        this.getSurveyCollectorById(collectorId);
      })
    );
  }
  private buildForm() {
    this.formCompose = this.formBuilder.group({
      emails: [null, [Validators.required, IValidators.arrayEmailValidator()]],
      subject: [this.DEFAULT_SUBJECT, [Validators.required, IValidators.spaceStringValidator()]],
      message: [this.DEFAULT_MESSAGE, [Validators.required, IValidators.spaceStringValidator()]]
    });
    this.formSchedule = this.formBuilder.group({
      sendDateEnabled: [false, []],
      sendDate: ['', []]
    });
  }
  getSurveyCollectorById(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.dSurveyCollectorService.getSurveyCollectorById(surveyCollectorId).subscribe(res => {
      if (res.status.code === 200) {
        if (res.results && res.results[0]) {
          this.surveyCollectorDetail = res.results[0];
          this.dSurveyFormService.setSurveyFormDetail(this.surveyCollectorDetail.surveyForm);
        } else {
          this.nzMessageService.warning(this.translateService.instant('admin.layout.SURVEY_COLLECTOR_NOT_EXIST'));
          this.router.navigate(['/dashboard']);
        }
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }

  private onAddSurveySecipient(formData: FormGroup) {
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
    const recipients = [];

    formData.value.emails.forEach(email => {
      if (!this.emails.includes(email)) {
        const recipient: SurveyRecipient = {
          email,
          surveyCollectorId: this.surveyCollectorDetail.id,
          message: formData.value.message,
          subject: formData.value.subject
        } 
        recipients.push(recipient);
      }
    });
    
    for (let i = 0; i < this.emails.length; i++) {
      if (!formData.value.emails.includes(this.emails[i])) {
        this.emails.splice(i, 1);
      }
    }
    
    if (recipients.length === 0) {
      this.loaderService.display(false);
      this.currentStep = 2;
      return;
    }
    this.dSurveyRecipientService.addMultySurveyRecipient(recipients).subscribe(res => {
      if (res.status.code === 200) {
        if (res.results.every(rec => rec === null)) {
          this.modalService.info({
            nzTitle: this.translateService.instant('default.layout.EMAIL_RECIPIENTS_REMOVED'),
            nzContent: this.tplContentRecipientsRemoved
          });
          formData.controls.emails.reset();
          Helpers.validateAllFormFields(formData);
          formData.patchValue({
            emails: this.emails
          })
        } else {
          this.nzMessageService.success(this.translateService.instant(res.status.message));
          this.currentStep = 2;
          formData.controls.emails.reset();
          res.results.forEach(rec => {
            if (rec !== null) {
              this.emails.push(rec.email);
            }
          })
          formData.patchValue({
            emails: this.emails
          })
        }
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }

  get fCompose() {
    return this.formCompose.controls;
  }

  get fSchedule () {
    return this.formSchedule.controls;
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  nextStep() {
    if (this.currentStep < 4) {
      switch (this.currentStep) {
        case 1: {
            this.onAddSurveySecipient(this.formCompose);
            break;
          }
        case 2: {
            this.currentStep = 3;
            break;
          }
        case 3: {
            this.onSendMail(this.formCompose);
            break;
          }
      
        default:
          break;
      }
    }
  }

  backStep() {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    }
  }

  onSendMail(formData: FormGroup) {
    if (this.emails.length === 0) {
      return
    }
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
    const recipients = {
      emails: this.emails,
      surveyCollector: this.surveyCollectorDetail,
      message: formData.value.message,
      subject: formData.value.subject
    }
    this.dSurveyRecipientService.sendMailSurveyRecipient(recipients).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.router.navigate(['create', 'collector-responses', 'collector-email', 'manage', this.surveyCollectorDetail.id])
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }
}
