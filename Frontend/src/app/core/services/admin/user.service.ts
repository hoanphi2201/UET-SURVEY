import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private apiService: ApiService, private router: Router) {}
  getUserList(
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
    return this.apiService.get("/users", params);
  }
  searchUserList(userName: string, limit: number): Observable<any> {
    const params = new HttpParams()
      .set("userName", userName)
      .set("limit", limit.toString());
    return this.apiService.get("/users/search", params);
  }
  addUser(user: any): Observable<any> {
    return this.apiService.post("/users", user);
  }
  updateUser(user: any, userId: string): Observable<any> {
    return this.apiService.put(`/users/${userId}`, user);
  }
  deleteUser(userId: string): Observable<any> {
    return this.apiService.delete(`/users/${userId}`);
  }
  deleteMultyUser(param: any): Observable<any> {
    return this.apiService.deleteMulty("/users/delete-multy", param);
  }
  changeRole(userId: string, roleId: string): Observable<any> {
    return this.apiService.put(`/users/change-role/${userId}`, { roleId });
  }
}
