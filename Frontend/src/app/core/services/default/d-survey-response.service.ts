import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DSurveyResponseService {
  constructor(private apiService: ApiService) {}

  getResponsesBySurveyForm(surveyFormId: string): Observable<any> {
    return this.apiService.get(
      '/survey-responses/analyze-results/' + surveyFormId
    );
  }
  countAllResponsesAndTypicalTimeSpent(): Observable<any> {
    return this.apiService.get(
      '/survey-responses/count-all-responses-typical-time-spent'
    );
  }
  clearResponsesByCollector(surveyCollectorId: string): Observable<any> {
    return this.apiService.get(
      '/survey-responses/clear-responses/' + surveyCollectorId
    );
  }
}
