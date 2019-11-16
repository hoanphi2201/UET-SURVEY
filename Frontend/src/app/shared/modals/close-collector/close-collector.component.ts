import { Component, OnInit } from '@angular/core';
import { SurveyCollector, DSurveyCollectorService, IValidators } from '@app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared/services';
import { Helpers } from '@app/shared/helpers';

@Component({
  selector: 'app-close-collector',
  templateUrl: './close-collector.component.html',
  styleUrls: ['./close-collector.component.scss']
})
export class CloseCollectorComponent implements OnInit {
  form: FormGroup;
  buttonLoading = false;
  surveyCollectorClose: SurveyCollector;
  constructor(
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private dSurveyCollectorService: DSurveyCollectorService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.patchForm();
  }

  get f() {
    return this.form.controls;
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      closedMessage: ['', [
        Validators.required,
        Validators.maxLength(2000),
        IValidators.spaceStringValidator()
      ]
      ]
    });
  }

  private patchForm() {
    if (!this.surveyCollectorClose) {
      return;
    }
    this.form.patchValue({
      closedMessage: this.surveyCollectorClose.closedMessage || this.translateService.instant('default.layout.DEFAULT_CLOSED_MESSAGE')
    });
  }

  onSaveSurveyCollector(formData: FormGroup) {
    if (formData.invalid) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    this.buttonLoading = true;
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    const dataUpdate = Object.assign(formData.value, {
      status: 'CLOSED'
    });
    this.dSurveyCollectorService.updateSurveyCollector(this.surveyCollectorClose.id, dataUpdate).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.surveyCollectorClose = Object.assign(
          this.surveyCollectorClose,
          dataUpdate
        );
        this.modalService.closeAll();
      }
    }, err => {
      this.loaderService.display(false);
      this.buttonLoading = false;
      this.nzMessageService.error(this.translateService.instant(err.message));
      this.modalService.closeAll();
    }, () => {
      this.loaderService.display(false);
      this.buttonLoading = false;
      this.modalService.closeAll();
    });
  }

  onCancel() {
    this.modalService.closeAll();
  }
}
