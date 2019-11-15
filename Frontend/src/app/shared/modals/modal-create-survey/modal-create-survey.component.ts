import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/services';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IValidators, DSurveyFormService, AuthService, User } from '@app/core';
import { environment } from '@env/environment';
import { Helpers } from '@app/shared/helpers';

@Component({
  selector: 'app-modal-create-survey',
  templateUrl: './modal-create-survey.component.html',
  styleUrls: ['./modal-create-survey.component.scss']
})
export class ModalCreateSurveyComponent implements OnInit {
  form: FormGroup;
  listOfAllCategory = environment.surveyCategory;
  buttonLoading = false;
  currentUser: User;
  constructor(
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private dSurveyFormService: DSurveyFormService,
    private authService: AuthService,
    private router: Router,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.authService.getCurrentUser().subscribe(userData => {
      if ((this.currentUser = userData)) {
        this.currentUser = userData;
      }
    });
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, IValidators.spaceStringValidator()]],
      description: [''],
      category: [null]
    });
  }

  get f() {
    return this.form.controls;
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  onSaveSurvey(formData: FormGroup) {
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
    this.dSurveyFormService.addSurveyForm(Object.assign(formData.value, { userId: this.currentUser.id })).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(res.status.message)
        );
        this.router.navigate([
          '/create',
          'design-survey',
          res.results[0].id
        ]);
      }
    }, err => {
      this.loaderService.display(false);
      this.buttonLoading = false;
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
      this.modalService.closeAll();
    }, () => {
      this.loaderService.display(false);
      this.buttonLoading = false;
      this.modalService.closeAll();
    }
    );
  }
}
