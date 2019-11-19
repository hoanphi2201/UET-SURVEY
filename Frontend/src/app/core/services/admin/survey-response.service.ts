import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyResponseService {

  constructor(private apiService: ApiService) { }
  getSurveyResponseList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string, filterValue: string) {
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
    return this.apiService.get('/survey-responses', params);
  }
  addSurveyResponse(surveyResponse: any): Observable<any> {
    return this.apiService.post('/survey-responses', surveyResponse);
  }
  updateSurveyResponse(surveyResponse: any, surveyResponseId: string): Observable<any> {
    return this.apiService.put(`/survey-responses/${surveyResponseId}`, surveyResponse);
  }
  deleteSurveyResponse(surveyResponseId: string): Observable<any> {
    return this.apiService.delete(`/survey-responses/${surveyResponseId}`);
  }
  deleteMultySurveyResponse(surveyResponseIds: any): Observable<any> {
    return this.apiService.deleteMulty('/survey-responses/delete-multy', surveyResponseIds);
  }
  clearResponsesByCollector(surveyCollectorId: string): Observable<any> {
    return this.apiService.get('/survey-responses/clear-responses-collector/' + surveyCollectorId);
  }
  clearResponsesByForm(surveyFormId: string): Observable<any> {
    return this.apiService.get('/survey-responses/clear-responses-form/' + surveyFormId);
  }
}
