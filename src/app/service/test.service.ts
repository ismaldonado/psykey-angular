import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
// TODO: Borrar Todo!!
  constructor(private readonly httpClient: HttpClient) { }

  test(): Observable<number> {
    return this.httpClient.get<number>('/access/test');
  }

  test2(): Observable<Array<string>> {
    const list = ['Irina', 'David', 'David', 'Irina'];
    return this.httpClient.post<Array<string>>('/access/test-post', list);
  }
}
