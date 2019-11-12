import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SurveyFolder } from '@app/core/domain';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DSurveyFolderService {
  refreshList$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private apiService: ApiService) {}
  getAllSurveyFolderList() {
    return this.apiService.get('/survey-folders/all');
  }
  updateFolderTitle(folderId: string, folder: SurveyFolder) {
    return this.apiService.put(`/survey-folders/${folderId}`, folder);
  }
  addSurveyFolder(surveyFolder: any): Observable<any> {
    return this.apiService.post('/survey-folders', surveyFolder);
  }
  deleteSurveyFolder(surveyFolderId: string): Observable<any> {
    return this.apiService.delete(`/survey-folders/${surveyFolderId}`);
  }
  getRefreshList(): Observable<boolean> {
    return this.refreshList$.asObservable();
  }

  setRefreshList(value: boolean): void {
    this.refreshList$.next(value);
  }
}
