import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { SurveyRecipient } from '@app/core/domain';

@Injectable({
  providedIn: 'root'
})
export class DSurveyRecipientService {
  constructor(private apiService: ApiService) {}
  getSurveyRecipientList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string = '', filterValue: any = JSON.stringify([])) {
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
    return this.apiService.get('/survey-recipients', params);
  }
  addMultySurveyRecipient(recipients: any): Observable<any> {
    return this.apiService.post('/survey-recipients/multy', recipients);
  }
  sendMailSurveyRecipient(recipients: any): Observable<any> {
    return this.apiService.post('/survey-recipients/send-email', recipients);
  }
  updateSurveyRecipient(recipientId: string, recipient: SurveyRecipient) {
    return this.apiService.put(`/survey-recipients/${recipientId}`, recipient);
  }
  
  deleteSurveyRecipient(recipientId: string): Observable<any> {
    return this.apiService.delete(`/survey-recipients/${recipientId}`);
  }
}
