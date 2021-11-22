import { Injectable } from '@angular/core';
import { SessionStorage } from '../../model/session-storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements SessionStorage {
  protected subject: { [key: string]: BehaviorSubject<any> } = {};

  select(key: string, defaultValue?: any): Observable<any> {
    return this.getSubject(key, defaultValue).asObservable();
  }

  get(key: string, defaultValue = null): any {
    return this.getSubject(key, defaultValue).getValue();
  }

  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));

    if (this.subject.hasOwnProperty(key)) {
      this.subject[key].next(value);
    }
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);

    if (this.subject.hasOwnProperty(key)) {
      this.subject[key].next(null);
    }
  }

  private getSubject(key: string, defaultValue = null): BehaviorSubject<any> {
    if (this.subject.hasOwnProperty(key)) {
      return this.subject[key];
    }

    if (!sessionStorage.getItem(key) && defaultValue) {
      sessionStorage.setItem(key, JSON.stringify(defaultValue));
    }

    this.subject[key] = new BehaviorSubject<any>(!!sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key) as string)
      : defaultValue);

    return this.subject[key];
  }
}
