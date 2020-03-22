import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VisitorsService {
  constructor(private httpClient: HttpClient) {}
  getIpAddress() {
    return this.httpClient
      .get("https://api.ipify.org?format=json")
      .pipe(catchError(this.handleError));
  }
  getGeoLocation(ip: string) {
    const params = new HttpParams()
      .set("apiKey", "0f4e06b0721a4a2b82bce38abc80b31a")
      .set("ip", ip);
    let url = "https://api.ipgeolocation.io/ipgeo";
    return this.httpClient
      .get(url, { params })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
