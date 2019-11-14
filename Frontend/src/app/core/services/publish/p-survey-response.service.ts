import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SurveyResponse } from '@app/core/domain';

@Injectable({
  providedIn: 'root'
})
export class PSurveyResponseService {
  constructor(private apiService: ApiService) { }

  addSurveySurveyResponse(surveyResponse: SurveyResponse): Observable<any> {
    return this.apiService.post('/survey-responses', surveyResponse);
  }
}
