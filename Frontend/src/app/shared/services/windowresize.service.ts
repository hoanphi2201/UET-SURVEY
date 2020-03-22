import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";

export interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

@Injectable({
  providedIn: "root"
})
export class WindowresizeService {
  currentSize$: BehaviorSubject<WindowSize> = new BehaviorSubject<WindowSize>(
    null
  );

  getSize(): Observable<WindowSize> {
    return this.currentSize$.asObservable();
  }

  setSize(size: WindowSize): void {
    this.currentSize$.next(size);
  }
}
