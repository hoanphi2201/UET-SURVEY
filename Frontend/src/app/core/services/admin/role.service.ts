import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  constructor(private apiService: ApiService) {}
  getRoleList(
    page: number,
    pageSize: number,
    sortField: string,
    sortType: string,
    searchKey: string,
    searchValue: string
  ) {
    let params = new HttpParams()
      .set("page", page.toString())
      .set("pageSize", pageSize.toString())
      .set("searchKey", searchKey)
      .set("searchValue", searchValue);
    if (sortField) {
      params = params.set("sortField", sortField);
      params = params.set("sortType", sortType);
    }

    return this.apiService.get("/roles", params);
  }
  getAllRoleList() {
    return this.apiService.get("/roles/all");
  }
  addRole(role: any): Observable<any> {
    return this.apiService.post("/roles", role);
  }
  updateRole(role: any, roleId: string): Observable<any> {
    return this.apiService.put(`/roles/${roleId}`, role);
  }
  deleteRole(roleId: string): Observable<any> {
    return this.apiService.delete(`/roles/${roleId}`);
  }
  deleteMultyRole(param: any): Observable<any> {
    return this.apiService.deleteMulty("/roles/delete-multy", param);
  }
  changeRoleAcp(roleId: string): Observable<any> {
    return this.apiService.put(`/roles/change-role-acp/${roleId}`);
  }
  changeDefaultSignUp(roleId: string): Observable<any> {
    return this.apiService.put(`/roles/default-sign-up/${roleId}`);
  }
}
