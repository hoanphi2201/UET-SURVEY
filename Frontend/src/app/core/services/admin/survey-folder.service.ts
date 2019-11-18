import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyFolderService {
  constructor(private apiService: ApiService) { }
  // tslint:disable-next-line:max-line-length
  getSurveyFolderList(page: number, pageSize: number, sortField: string, sortType: string, searchKey: string, searchValue: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchKey', searchKey)
      .set('searchValue', searchValue);
    if (sortField) {
      params = params.set('sortField', sortField);
      params = params.set('sortType', sortType);
    }
    return this.apiService.get('/survey-folders', params);
  }
  getAllSurveyFolderList() {
    return this.apiService.get('/survey-folders/all');
  }
  addSurveyFolder(surveyFolder: any): Observable<any> {
    return this.apiService.post('/survey-folders', surveyFolder);
  }
  updateSurveyFolder(
    surveyFolder: any,
    surveyFolderId: string
  ): Observable<any> {
    return this.apiService.put(
      `/survey-folders/${surveyFolderId}`,
      surveyFolder
    );
  }
  deleteSurveyFolder(surveyFolderId: string): Observable<any> {
    return this.apiService.delete(`/survey-folders/${surveyFolderId}`);
  }
  deleteMultySurveyFolder(param: any): Observable<any> {
    return this.apiService.deleteMulty('/survey-folders/delete-multy', param);
  }
}
