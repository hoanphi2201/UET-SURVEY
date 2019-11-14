import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  constructor(private apiService: ApiService) { }
  // tslint:disable-next-line:max-line-length
  getSurveyFormList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string, filterValue: string) {
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
  getSurveyFormById(surveyFormId: string): Observable<any> {
    return this.apiService.get('/survey-forms/' + surveyFormId);
  }
  addSurveyForm(surveyForm: any): Observable<any> {
    return this.apiService.post('/survey-forms', surveyForm);
  }
  updateSurveyForm(surveyForm: any, surveyFormId: string): Observable<any> {
    return this.apiService.put(`/survey-forms/${surveyFormId}`, surveyForm);
  }
  deleteSurveyForm(surveyFormId: string): Observable<any> {
    return this.apiService.delete(`/survey-forms/${surveyFormId}`);
  }
  deleteMultySurveyForm(param: any): Observable<any> {
    return this.apiService.post('/survey-forms/delete-multy', param);
  }
  changeRole(surveyFormId: string, roleId: string): Observable<any> {
    return this.apiService.put(`/survey-forms/change-role/${surveyFormId}`, {
      roleId
    });
  }
}
