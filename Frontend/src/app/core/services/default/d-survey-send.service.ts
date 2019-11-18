import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DSurveySendService {
  constructor(private apiService: ApiService) { }
  getSurveySendList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string, filterKey: string = '', filterValue: any = JSON.stringify([])) {
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

  deleteSurveySend(surveySendId: string): Promise<any> {
    return this.apiService.delete(`/survey-sends/${surveySendId}`).toPromise()
  }

  addSurveySend(surveySend: any): Observable<any> {
    return this.apiService.post('/survey-sends', surveySend);
  }
}
