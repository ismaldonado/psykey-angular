import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchResponse } from '../../model/searcher/search-response';
import { SearchRequest } from '../../model/searcher/search-request';
import { UserDetail } from '../../model/user/user-detail';
import { UserCreateRequest } from '../../model/user/user-create-request';
import { tap } from 'rxjs/operators';
import { TherapistResponse } from 'src/app/model/therapist/therapist-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly basePathUser = '/api/user';
  private userDetailBehaviorSubject: BehaviorSubject<UserDetail> = new BehaviorSubject<UserDetail>(undefined);
  private userSearchResponseBehaviorSubject: BehaviorSubject<Array<SearchResponse>> = new BehaviorSubject<Array<SearchResponse>>(undefined);

  constructor(private readonly httpClient: HttpClient) {}

  searchUsers(searchRequest: SearchRequest): Observable<Array<SearchResponse>> {
    return this.httpClient.post<Array<SearchResponse>>(this.basePathUser + '/search', searchRequest)
      .pipe(tap((response: Array<SearchResponse>) => this.setUserSearchResponse(response)));
  }

  findUser(id: string): Observable<UserDetail> {
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<UserDetail>(this.basePathUser + '/user-by-id', { params })
      .pipe(tap((userDetail: UserDetail) => this.setUserDetail(userDetail)));
  }

  createUser(userCreateRequest: UserCreateRequest): Observable<number> {
    return this.httpClient.post<number>(this.basePathUser + '/create', userCreateRequest);
  }

  getTherapistResponseList(therapyType: string): Observable<Array<TherapistResponse>> {
    const params = new HttpParams().set('therapyType', therapyType);
    return this.httpClient.get<Array<TherapistResponse>>(this.basePathUser + '/employees-by-therapy', { params });
  }

  getUserSearchResponse(): Observable<Array<SearchResponse>> {
    return this.userSearchResponseBehaviorSubject.asObservable();
  }

  setUserSearchResponse(searchResponseList: Array<SearchResponse>): void {
    this.userSearchResponseBehaviorSubject.next(searchResponseList);
  }

  getUserDetail(): Observable<UserDetail> {
    return this.userDetailBehaviorSubject.asObservable();
  }

  setUserDetail(userDetail: UserDetail): void {
    this.resetUserDetail();
    this.userDetailBehaviorSubject.next(userDetail);
  }

  resetUserSearchResponse(): void {
    this.userSearchResponseBehaviorSubject.next(null);
  }

  resetUserDetail(): void {
    this.userDetailBehaviorSubject.next(undefined);
  }
}
