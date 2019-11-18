import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveySendService {
  constructor(private apiService: ApiService, private router: Router) { }
  getSurveySendList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string, filterValue: string) {
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
    return this.apiService.get('/survey-sends', params);
  }
  addSurveySend(surveySend: any): Observable<any> {
    return this.apiService.post('/survey-sends', surveySend);
  }
  updateSurveySend(surveySend: any, surveySendId: string): Observable<any> {
    return this.apiService.put(`/survey-sends/${surveySendId}`, surveySend);
  }
  deleteSurveySend(surveySendId: string): Observable<any> {
    return this.apiService.delete(`/survey-sends/${surveySendId}`);
  }
  deleteMultySurveySend(surveySendIds: any): Observable<any> {
    return this.apiService.deleteMulty('/survey-sends/delete-multy', surveySendIds);
  }
}
