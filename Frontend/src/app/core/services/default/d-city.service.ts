import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class DCityService {
  constructor(private apiService: ApiService) {}

  searchCitiesByName(cityName: string, limit: number): Observable<any> {
    const params = new HttpParams()
      .set("cityName", cityName)
      .set("limit", limit.toString());
    return this.apiService.get("/cities/search", params);
  }

  getCityById(cityId: string): Promise<any> {
    return this.apiService.get("/cities/" + cityId).toPromise();
  }
}
