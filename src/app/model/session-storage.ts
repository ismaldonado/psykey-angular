import { Observable } from 'rxjs';

export interface SessionStorage {
  select(key: string, defaultValue: any): Observable<any>;

  set(key: string, value: any): void;

  remove(key: string): void;
}
