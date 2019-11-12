import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { SurveyForm } from '@app/core/domain';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared/services/loader.service';
import { tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DSurveyFormService {
  surveyFormDetail: SurveyForm;
  surveyFormDetail$: BehaviorSubject<SurveyForm> = new BehaviorSubject<
    SurveyForm
  >(null);
  updateSurveyFormDetail$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(null);
  urlSurveyFormId$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {
    this.updateSurveyFormDetail$.subscribe(surveyFormId => {
      if (surveyFormId) {
        this.loaderService.display(true);
        this.getSurveyFormById(surveyFormId).subscribe(
          res => {
            if (res.status.code === 200) {
              if (res.results && res.results[0]) {
                this.surveyFormDetail = res.results[0];
                this.setSurveyFormDetail(this.surveyFormDetail);
              }
            }
          },
          err => {
            this.loaderService.display(false);
            this.nzMessageService.warning(
              this.translateService.instant(
                'default.layout.SURVEY_FORM_NOT_EXIST'
              )
            );
            this.router.navigate(['/dashboard']);
          },
          () => {
            this.loaderService.display(false);
          }
        );
        this.updateSurveyFormDetail$.next(null);
      }
    });
  }

  getCacheSurveyFormDetail(surveyFormId: string) {
    if (this.surveyFormDetail && this.surveyFormDetail.id === surveyFormId) {
      this.setSurveyFormDetail(this.surveyFormDetail);
    } else {
      this.updateSurveyFormDetail$.next(surveyFormId);
    }
  }

  getSurveyFormDetail(): Observable<SurveyForm> {
    return this.surveyFormDetail$.asObservable();
  }

  setSurveyFormDetail(value: SurveyForm): void {
    this.surveyFormDetail$.next(value);
  }

  getUrlSurveyFormId(): Observable<string> {
    return this.urlSurveyFormId$.asObservable();
  }

  setUrlSurveyFormId(value: string): void {
    this.urlSurveyFormId$.next(value);
  }
  // tslint:disable-next-line:max-line-length
  getDefaultSurveyFormList(
    page: number,
    pageSize: number,
    sortField: string,
    sortType: string,
    searchKey: string,
    searchValue: string,
    filterKey: string = '',
    filterValue: any = JSON.stringify([])
  ) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchKey', searchKey)
      .set('searchValue', searchValue)
      .set('filterKey', filterKey)
      .set('filterValue', filterValue);
    if (sortField) {
      params = params.set('sortField', sortField);
      params = params.set('sortType', sortType);
    }
    return this.apiService.get('/survey-forms', params);
  }

  searchDashboardSurveyFormList(title: string, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('title', title)
      .set('limit', limit.toString());
    return this.apiService.get('/survey-forms/search', params);
  }

  countSurveyFormStatus(): Observable<any> {
    return this.apiService.get('/survey-forms/count-status');
  }

  moveSurveyFormToFolder(surveyFolderId: string, surveyFormIds: string[]) {
    return this.apiService.post('/survey-forms/move-to-folder', {
      surveyFolderId,
      surveyFormIds
    });
  }

  getSurveyFormById(surveyFormId: string): Observable<any> {
    return this.apiService.get('/survey-forms/' + surveyFormId);
  }

  updateSurveyForm(
    surveyForm: any,
    surveyFormId: string,
    updateCache?: boolean
  ): Observable<any> {
    return this.apiService
      .put(`/survey-forms/${surveyFormId}`, surveyForm)
      .pipe(
        tap(res => {
          if (res.status.code === 200) {
            this.surveyFormDetail = res.results[0];
            this.setSurveyFormDetail(this.surveyFormDetail);
          }
        })
      );
  }

  deleteSurveyForm(surveyFormId: string): Observable<any> {
    return this.apiService.delete(`/survey-forms/${surveyFormId}`);
  }

  addSurveyForm(surveyForm: any): Observable<any> {
    return this.apiService.post('/survey-forms', surveyForm);
  }
}
