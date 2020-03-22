import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoleGrantService {
  constructor(private apiService: ApiService) {}
  getRoleGrantList(
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
    return this.apiService.get("/role-grants", params);
  }
  addRoleGrant(roleGrant: any): Observable<any> {
    return this.apiService.post("/role-grants", roleGrant);
  }
  updateRoleGrant(roleGrant: any, roleGrantId: string): Observable<any> {
    return this.apiService.put(`/role-grants/${roleGrantId}`, roleGrant);
  }
  deleteRoleGrant(roleGrantId: string): Observable<any> {
    return this.apiService.delete(`/role-grants/${roleGrantId}`);
  }
  deleteMultyRoleGrant(param: any): Observable<any> {
    return this.apiService.deleteMulty("/role-grants/delete-multy", param);
  }
  updateAction(roleGrantId: string, actionKey: string): Observable<any> {
    return this.apiService.put(`/role-grants/update-action/${roleGrantId}`, {
      actionKey
    });
  }
}
