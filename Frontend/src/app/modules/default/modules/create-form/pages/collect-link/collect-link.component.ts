import { Component, OnInit } from '@angular/core';
import { DSurveyFormService, DSurveyCollectorService, SurveyCollector, IValidators } from '@app/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { LoaderService, Helpers } from '@app/shared';
import { RenameCollectorComponent } from '@app/shared/modals/rename-collector/rename-collector.component';
import { CloseCollectorComponent } from '@app/shared/modals/close-collector/close-collector.component';
import { OpenCollectorComponent } from '@app/shared/modals/open-collector/open-collector.component';
import { environment as env } from '@env/environment';
import { ngCopy } from 'angular-6-clipboard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect-link',
  templateUrl: './collect-link.component.html',
  styleUrls: ['./collect-link.component.scss']
})
export class CollectLinkComponent implements OnInit {
  form: FormGroup;
  clientUrl = env.clientUrl;
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
    private router: Router,
    private dSurveyFormService: DSurveyFormService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { collectorId } = params;
        this.getSurveyCollectorById(collectorId);
      })
    );
  }

  private getSurveyCollectorById(surveyCollectorId: string) {
    this.loaderService.display(true);
    this.dSurveyCollectorService.getSurveyCollectorById(surveyCollectorId).subscribe(res => {
      if (res.status.code === 200) {
        if (res.results && res.results[0]) {
          this.surveyCollectorDetail = res.results[0];
          this.surveyCollectorDetail.fullUrl = this.clientUrl + '/publish/answer-survey/' + this.surveyCollectorDetail.url;
          this.dSurveyFormService.setSurveyFormDetail(this.surveyCollectorDetail.surveyForm);
        } else {
          this.nzMessageService.warning(
            this.translateService.instant(
              'admin.layout.SURVEY_COLLECTOR_NOT_EXIST'
            )
          );
          this.router.navigate(['/dashboard']);
        }
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
    }, () => {
      this.loaderService.display(false);
    }
    );
  }

  showRenameCollectorModal(surveyCollector: SurveyCollector): void {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.EDIT_COLLECTOR_NICKNAME'),
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
    const canvasDataUrl = canvas.toDataURL().replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
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
}
