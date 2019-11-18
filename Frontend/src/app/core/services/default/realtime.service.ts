import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  private socket;
  constructor() { }
  public initSocket(): void {
    this.socket = io(env.serverRootUrl);
  }
  public getSocket() {
    if (this.socket) {
      return true;
    }
    return false;
  }
  public sendEvent(key: string, data: any) {
    this.socket.emit(key, data);
  }
  public listenEvent(key: string): Observable<any> {
    return new Observable<any>(observer => {
      if (this.socket) {
        this.socket.on(key, (data: any) => observer.next(data));
      }
    });
  }
}
