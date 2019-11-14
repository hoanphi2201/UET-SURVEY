import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {
  DSurveyCollectorService,
  DSurveyFormService,
  SurveyCollector,
  IValidators
} from '@app/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collect-email-compose',
  templateUrl: './collect-email-compose.component.html',
  styleUrls: ['./collect-email-compose.component.scss']
})
export class CollectEmailComposeComponent implements OnInit {
  form: FormGroup;
  surveyCollectorDetail: SurveyCollector;
  private subscriptions: Subscription[] = [];
  private modalForm: NzModalRef;
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
      recipients: [
        '',
        [Validators.required, IValidators.spaceStringValidator()]
      ]
    });
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
              this.dSurveyFormService.setSurveyFormDetail(
                this.surveyCollectorDetail.surveyForm
              );
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
}
