import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { SurveyCollector } from "@app/core/domain";

@Injectable({
  providedIn: "root"
})
export class DSurveyCollectorService {
  constructor(private apiService: ApiService) {}
  getDefaultSurveyCollectorList(
    page: number,
    pageSize: number,
    sortField: string,
    sortType: string,
    searchKey: string,
    searchValue: string,
    filterKey: string = "",
    filterValue: any = JSON.stringify([])
  ) {
    let params = new HttpParams()
      .set("page", page.toString())
      .set("pageSize", pageSize.toString())
      .set("searchKey", searchKey)
      .set("searchValue", searchValue)
      .set("filterKey", filterKey)
      .set("filterValue", filterValue);
    if (sortField) {
      params = params.set("sortField", sortField);
      params = params.set("sortType", sortType);
    }
    return this.apiService.get("/survey-collectors", params);
  }

  getSurveyCollectorById(surveyCollectorId: string): Observable<any> {
    return this.apiService.get("/survey-collectors/" + surveyCollectorId);
  }

  deleteSurveyCollector(surveyCollectorId: string): Observable<any> {
    return this.apiService.delete(`/survey-collectors/${surveyCollectorId}`);
  }

  addSurveyCollector(surveyCollector: SurveyCollector): Observable<any> {
    return this.apiService.post("/survey-collectors", surveyCollector);
  }

  updateSurveyCollector(surveyCollectorId: string, surveyCollector: any) {
    return this.apiService.put(
      `/survey-collectors/${surveyCollectorId}`,
      surveyCollector
    );
  }

  transferSurveyCollector(surveyFormId: string): Promise<any> {
    return this.apiService
      .put(`/survey-collectors/transfer/${surveyFormId}`)
      .toPromise();
  }
}
