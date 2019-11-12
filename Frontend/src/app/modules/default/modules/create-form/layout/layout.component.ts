import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { DSurveyFormService, SurveyForm, IValidators } from '@app/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormGroupDirective
} from '@angular/forms';
import { Helpers, LoaderService } from '@app/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', { static: false }) private formDirective: NgForm;
  surveyFormDetail: SurveyForm;
  visibleNzDrawer = false;
  buttonLoading = false;
  form: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private dSurveyFormService: DSurveyFormService,
    public router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
    this.subscriptions.push(
      this.activatedRoute.children[0].params.subscribe((params: Params) => {
        const { surveyFormId } = params;
        this.getSurveyFormById(surveyFormId);
      })
    );
  }
  buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, IValidators.spaceStringValidator()]],
      description: ['']
    });
  }
  get f() {
    return this.form.controls;
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  getSurveyFormById(surveyFormId: string) {
    this.subscriptions.push(
      this.dSurveyFormService.getSurveyFormDetail().subscribe(res => {
        if (res) {
          this.surveyFormDetail = res;
          this.patchForm();
          this.dSurveyFormService.setSurveyFormDetail(null);
        }
      })
    );
    this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
  }
  private patchForm() {
    if (!this.surveyFormDetail) {
      return;
    }
    this.form.patchValue({
      title: this.surveyFormDetail.title,
      description: this.surveyFormDetail.description
    });
  }

  setStateNzDrawer(value): void {
    this.visibleNzDrawer = value;
  }
  onSurveySaved(formData: any, formDirective: FormGroupDirective) {
    if (this.form.invalid) {
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
    return this.dSurveyFormService
      .updateSurveyForm(formData.value, this.surveyFormDetail.id)
      .subscribe(
        res => {
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
        },
        err => {
          this.buttonLoading = false;
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.buttonLoading = false;
          this.loaderService.display(false);
        }
      );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
