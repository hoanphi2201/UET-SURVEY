import { Component, OnInit } from "@angular/core";
import {
  SurveyRecipient,
  IValidators,
  DSurveyRecipientService
} from "@app/core";
import { NzModalService, NzMessageService } from "ng-zorro-antd";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Helpers } from "@app/shared/helpers";
import { LoaderService } from "@app/shared/services";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"]
})
export class ContactDetailsComponent implements OnInit {
  form: FormGroup;
  surveyRecipientDetails: SurveyRecipient;
  constructor(
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private formBuilder: FormBuilder,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private dSurveyRecipientService: DSurveyRecipientService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.patchForm();
  }
  onCancel() {
    this.modalService.closeAll();
  }

  get f() {
    return this.form.controls;
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, IValidators.emailValidator()]],
      firstName: ["", [IValidators.spaceStringValidator()]],
      lastName: ["", [IValidators.spaceStringValidator()]]
    });
  }

  private patchForm() {
    if (!this.surveyRecipientDetails) {
      return;
    }
    this.form.patchValue({
      email: this.surveyRecipientDetails.email,
      firstName: this.surveyRecipientDetails.firstName,
      lastName: this.surveyRecipientDetails.lastName
    });
  }
  onUpdateRecipient(formData: FormGroup) {
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
    const data = {
      ...formData.value,
      surveyCollectorId: this.surveyRecipientDetails.surveyCollectorId
    };
    this.dSurveyRecipientService
      .updateSurveyRecipient(this.surveyRecipientDetails.id, data)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
          }
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
  }
  onRemoveRecipient() {
    this.loaderService.display(true);
    this.dSurveyRecipientService
      .deleteSurveyRecipient(this.surveyRecipientDetails.id)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.modalService.closeAll();
          }
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
  }
}
