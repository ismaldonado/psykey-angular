import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClinicalSessionRR } from '../../model/clinicalhistory/clinical-session-rr';

@Injectable({
  providedIn: 'root'
})
export class ClinicalSessionService {
  private readonly basePathUser = '/api/clinical-session';

  constructor(private readonly httpClient: HttpClient) {}

  createSession(clinicalSessionRR: ClinicalSessionRR): Observable<ClinicalSessionRR> {
    return this.httpClient.post<ClinicalSessionRR>(this.basePathUser + '/save-session', clinicalSessionRR);
  }
}
