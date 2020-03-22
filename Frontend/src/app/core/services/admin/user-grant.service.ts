import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserGrantService {
  constructor(private apiService: ApiService) {}
  // tslint:disable-next-line:max-line-length
  getUserGrantList(
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
    return this.apiService.get("/user-grants", params);
  }
  addUserGrant(userGrant: any): Observable<any> {
    return this.apiService.post("/user-grants", userGrant);
  }
  updateUserGrant(userGrant: any, userGrantId: string): Observable<any> {
    return this.apiService.put(`/user-grants/${userGrantId}`, userGrant);
  }
  deleteUserGrant(userGrantId: string): Observable<any> {
    return this.apiService.delete(`/user-grants/${userGrantId}`);
  }
  deleteMultyUserGrant(param: any): Observable<any> {
    return this.apiService.deleteMulty("/user-grants/delete-multy", param);
  }
  updateAction(userGrantId: string, actionKey: string): Observable<any> {
    return this.apiService.put(`/user-grants/update-action/${userGrantId}`, {
      actionKey
    });
  }
}
