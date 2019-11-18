import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyResponseService {

  constructor(private apiService: ApiService) { }
  
  clearResponsesByCollector(surveyCollectorId: string): Observable<any> {
    return this.apiService.get('/survey-responses/clear-responses-collector/' + surveyCollectorId);
  }
  clearResponsesByForm(surveyFormId: string): Observable<any> {
    return this.apiService.get('/survey-responses/clear-responses-form/' + surveyFormId);
  }
}
