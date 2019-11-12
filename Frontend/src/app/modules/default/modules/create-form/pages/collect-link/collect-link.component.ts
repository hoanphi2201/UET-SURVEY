import { Component, OnInit } from '@angular/core';
import {
  SurveyForm,
  DSurveyFormService,
  DSurveyCollectorService,
  SurveyCollector,
  IValidators
} from '@app/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { LoaderService, Helpers } from '@app/shared';
import { RenameCollectorComponent } from '@app/shared/modals/rename-collector/rename-collector.component';
import { CloseCollectorComponent } from '@app/shared/modals/close-collector/close-collector.component';
import { OpenCollectorComponent } from '@app/shared/modals/open-collector/open-collector.component';
import { environment } from '@env/environment';
import { ngCopy } from 'angular-6-clipboard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect-link',
  templateUrl: './collect-link.component.html',
  styleUrls: ['./collect-link.component.scss']
})
export class CollectLinkComponent implements OnInit {
  form: FormGroup;
  clientUrl = environment.clientUrl;
  surveyCollectorDetail: SurveyCollector;
  private subscriptions: Subscription[] = [];
  private modalForm: NzModalRef;
  styleRadio = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    fontWeight: 'normal'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyCollectorService: DSurveyCollectorService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dSurveyFormService: DSurveyFormService
  ) {}

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
    this.form = this.formBuilder.group({
      thankYouMessage: [
        '',
        [Validators.required, IValidators.spaceStringValidator()]
      ],
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

  private patchForm() {
    if (!this.surveyCollectorDetail) {
      return;
    }
    this.form.patchValue({
      thankYouMessage: this.surveyCollectorDetail.thankYouMessage,
      allowMultipleResponses:
        this.surveyCollectorDetail.allowMultipleResponses || false,
      anonymousType: this.surveyCollectorDetail.anonymousType || false,
      displaySurveyResults:
        this.surveyCollectorDetail.displaySurveyResults || false,
      closeDateEnabled: this.surveyCollectorDetail.closeDateEnabled || false,
      closeDate: this.surveyCollectorDetail.closeDate || new Date(),
      responseLimitEnabled:
        this.surveyCollectorDetail.responseLimitEnabled || false,
      responseLimit: this.surveyCollectorDetail.responseLimit || '',
      passwordEnabled: this.surveyCollectorDetail.passwordEnabled || false,
      password: this.surveyCollectorDetail.password || '',
      passwordLabel:
        this.surveyCollectorDetail.passwordLabel || 'Enter Password',
      passwordRequiredMessage:
        this.surveyCollectorDetail.passwordRequiredMessage ||
        'This survey requires a password.<br /><br />If you do not know the password, contact the author of this survey for further assistance.',
      passwordRequiredErrorMessage:
        this.surveyCollectorDetail.passwordRequiredErrorMessage ||
        'The password entered was incorrect please check your data and try again.'
    });
  }

  get f() {
    return this.form.controls;
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  getSurveyCollectorById(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.dSurveyCollectorService
      .getSurveyCollectorById(surveyCollectorId)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            if (res.results && res.results[0]) {
              this.surveyCollectorDetail = res.results[0];
              this.surveyCollectorDetail.fullUrl =
                this.clientUrl +
                '/open/answer-survey/' +
                this.surveyCollectorDetail.url;
              this.dSurveyFormService.setSurveyFormDetail(
                this.surveyCollectorDetail.surveyForm
              );
              this.patchForm();
            } else {
              this.nzMessageService.warning(
                this.translateService.instant(
                  'admin.layout.SURVEY_COLLECTOR_NOT_EXIST'
                )
              );
              this.router.navigate(['/dashboard']);
            }
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

  showRenameCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant(
        'default.layout.EDIT_COLLECTOR_NICKNAME'
      ),
      nzFooter: null,
      nzContent: RenameCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'rename-collector-dialog',
      nzComponentParams: { surveyCollectorRename: surveyCollector }
    });
  }

  showCloseCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.CLOSE_COLLECTOR'),
      nzFooter: null,
      nzContent: CloseCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'close-collector-dialog',
      nzComponentParams: { surveyCollectorClose: surveyCollector }
    });
  }

  showOpenCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.OPEN_COLLECTOR'),
      nzFooter: null,
      nzContent: OpenCollectorComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'close-collector-dialog',
      nzComponentParams: { surveyCollectorOpen: surveyCollector }
    });
  }

  onCopyUrl(url: string) {
    ngCopy(url);
    this.nzMessageService.success(
      this.translateService.instant('default.layout.LINK_COPIED_TO_CLIPBOARD')
    );
  }

  onDownloadQrCode() {
    try {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      this.saveCanvasAs(canvas, `${this.surveyCollectorDetail.url}.png`);
    } catch (error) {
      this.nzMessageService.error(
        this.translateService.instant('default.layout.DOWNLOAD_QR_CODE_FAIL')
      );
    }
  }

  saveCanvasAs(canvas: HTMLCanvasElement, fileName: string) {
    const canvasDataUrl = canvas
      .toDataURL()
      .replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    const link = document.createElement('a');
    link.setAttribute('href', canvasDataUrl);
    link.setAttribute('target', '_blank');
    link.setAttribute('download', fileName);
    if (document.createEvent) {
      var evtObj = document.createEvent('MouseEvents');
      evtObj.initEvent('click', true, true);
      link.dispatchEvent(evtObj);
    } else if (link.click) {
      link.click();
    }
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
    this.dSurveyCollectorService
      .updateSurveyCollector(this.surveyCollectorDetail.id, dataUpdate)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(
                'default.layout.YOUR_CHANGES_HAVE_BEEN_SAVED'
              )
            );
            this.surveyCollectorDetail = Object.assign(
              this.surveyCollectorDetail,
              dataUpdate
            );
            this.form.patchValue(dataUpdate);
          }
        },
        err => {
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        }
      );
  }
}
