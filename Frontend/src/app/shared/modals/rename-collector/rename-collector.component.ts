import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/services';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  DSurveyCollectorService,
  IValidators,
  SurveyCollector
} from '@app/core';
import { Router } from '@angular/router';
import { Helpers } from '@app/shared/helpers';

@Component({
  selector: 'app-rename-collector',
  templateUrl: './rename-collector.component.html',
  styleUrls: ['./rename-collector.component.scss']
})
export class RenameCollectorComponent implements OnInit {
  form: FormGroup;
  buttonLoading = false;
  surveyCollectorRename: SurveyCollector;
  constructor(
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private dSurveyCollectorService: DSurveyCollectorService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.patchForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          IValidators.spaceStringValidator()
        ]
      ]
    });
  }

  private patchForm() {
    if (!this.surveyCollectorRename) {
      return;
    }
    this.form.patchValue({
      name: this.surveyCollectorRename.name
    });
  }

  get f() {
    return this.form.controls;
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
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
    this.dSurveyCollectorService
      .updateSurveyCollector(this.surveyCollectorRename.id, formData.value)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.surveyCollectorRename.name = formData.value.name;
            this.modalService.closeAll();
          }
        },
        err => {
          this.loaderService.display(false);
          this.buttonLoading = false;
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
          this.modalService.closeAll();
        },
        () => {
          this.loaderService.display(false);
          this.buttonLoading = false;
          this.modalService.closeAll();
        }
      );
  }

  onCancel() {
    this.modalService.closeAll();
  }
}
