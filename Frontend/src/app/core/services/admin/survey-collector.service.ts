import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyCollectorService {
  constructor(private apiService: ApiService, private router: Router) { }
  getSurveyCollectorList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string, filterValue: string) {
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
    return this.apiService.get('/survey-collectors', params);
  }
  addSurveyCollector(surveyCollector: any): Observable<any> {
    return this.apiService.post('/survey-collectors', surveyCollector);
  }
  updateSurveyCollector(surveyCollector: any, surveyCollectorId: string): Observable<any> {
    return this.apiService.put(`/survey-collectors/${surveyCollectorId}`, surveyCollector);
  }
  deleteSurveyCollector(surveyCollectorId: string): Observable<any> {
    return this.apiService.delete(`/survey-collectors/${surveyCollectorId}`);
  }
  deleteMultySurveyCollector(surveyCollectorIds: any): Observable<any> {
    return this.apiService.deleteMulty('/survey-collectors/delete-multy', surveyCollectorIds);
  }
}
