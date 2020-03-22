import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SurveyRecipientService {
  constructor(private apiService: ApiService) {}
  getSurveyRecipientList(
    page: number,
    pageSize: number,
    sortField: string,
    sortType: string,
    searchKey: string,
    searchValue: string,
    filterKey: string,
    filterValue: string
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
    return this.apiService.get("/survey-recipients", params);
  }
  addSurveyRecipient(surveyRecipient: any): Observable<any> {
    return this.apiService.post("/survey-recipients", surveyRecipient);
  }
  updateSurveyRecipient(
    surveyRecipient: any,
    surveyRecipientId: string
  ): Observable<any> {
    return this.apiService.put(
      `/survey-recipients/${surveyRecipientId}`,
      surveyRecipient
    );
  }
  deleteSurveyRecipient(surveyRecipientId: string): Observable<any> {
    return this.apiService.delete(`/survey-recipients/${surveyRecipientId}`);
  }
  deleteMultySurveyRecipient(surveyRecipientIds: any): Observable<any> {
    return this.apiService.deleteMulty(
      "/survey-recipients/delete-multy",
      surveyRecipientIds
    );
  }
}
