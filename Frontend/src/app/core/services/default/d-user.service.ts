import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DUserService {
  constructor(private apiService: ApiService) { }
  updateUser(user: any, userId: string): Observable<any> {
    return this.apiService.put(`/users/${userId}`, user);
  }
}
