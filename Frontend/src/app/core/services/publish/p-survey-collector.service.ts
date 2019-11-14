import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PSurveyCollectorService {
  constructor(private apiService: ApiService) { }

  getSurveyCollectorByUrl(url: string): Observable<any> {
    return this.apiService.get('/survey-collectors/' + url);
  }

  compareSurveyCollectorPassword(data: any) {
    return this.apiService.post('/survey-collectors/compare-password', data);
  }
}
