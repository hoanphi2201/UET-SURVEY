import { Router } from '@angular/router';
import { SurveyForm, DSurveyFormService, AuthService, User } from '@app/core';
import { Component, OnInit } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared/services';

@Component({
  selector: 'app-preview-copy',
  templateUrl: './preview-copy.component.html',
  styleUrls: ['./preview-copy.component.scss']
})
export class PreviewCopyComponent implements OnInit {
  surveyFormDetail: SurveyForm;
  currentUser: User;
  constructor(
    private dSurveyFormService: DSurveyFormService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
      }
    });
  }

  closeModalPreview() {
    this.modalService.closeAll();
  }

  countQuestionSurvey(json: any) {
    const defaultValue = 0;
    if (!json) {
      return defaultValue;
    }
    let total = 0;
    try {
      json.pages.forEach(o => {
        if (o.elements && Array.isArray(o.elements)) {
          total += o.elements.length;
        }
      });
    } catch (error) {
      return defaultValue;
    }
    return total >= defaultValue ? total : defaultValue;
  }

  onUpdateFavorite(survey: SurveyForm) {
    survey.isFavorite = survey.isFavorite ? !survey.isFavorite : true;
    if (!survey) {
      return;
    }
    this.loaderService.display(true);
    return this.dSurveyFormService.updateSurveyForm(survey, survey.id).subscribe(res => {
      if (res.status.code === 200) {
        this.nzMessageService.success(
          this.translateService.instant(
            this.translateService.instant(res.status.message)
          )
        );
        this.loaderService.display(false);
      }
    }, err => {
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
      this.loaderService.display(false);
    }, () => {
      this.loaderService.display(false);
    }
    );
  }

  onMakeCopy(surveyForm: SurveyForm) {
    const copySurvey = {
      json: surveyForm.json,
      title: `Copy of ${surveyForm.title}`,
      description: surveyForm.description,
      userId: this.currentUser.id
    };
    return this.dSurveyFormService.addSurveyForm(copySurvey).subscribe(
      res => {
        if (res.status.code === 200) {
          this.modalService.closeAll();
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
          this.router.navigate(['/create', 'design-survey', res.results[0].id]);
        }
      }, err => {
        this.loaderService.display(false);
        this.nzMessageService.error(this.translateService.instant(err.message));
      }, () => {
        this.loaderService.display(false);
      }
    );
  }
}
