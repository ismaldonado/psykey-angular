import { Injectable } from '@angular/core';
import { SessionStorage } from '../../model/session-storage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements SessionStorage {

  select(key: string): Observable<any> {
    return of(JSON.parse(sessionStorage.getItem(key)));
  }

  get(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
