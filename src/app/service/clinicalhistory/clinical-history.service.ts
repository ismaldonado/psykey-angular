import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClinicalHistoryRR } from 'src/app/model/clinicalhistory/clinical-history-rr';
import { DiagnosticRR } from 'src/app/model/clinicalhistory/diagnostic-rr';
import { MedicineRR } from 'src/app/model/clinicalhistory/medicine-rr';
import { ReportRR } from 'src/app/model/clinicalhistory/report-rr';
import { TreatmentRR } from 'src/app/model/clinicalhistory/treatment-rr';

@Injectable({
  providedIn: 'root'
})
export class ClinicalHistoryService {
  private readonly basePathUser = '/api/clinical-history';
  constructor(private httpClient: HttpClient) { }

  saveClinicalHistory(clinicalHistoryRR: ClinicalHistoryRR): Observable<ClinicalHistoryRR> {
    return this.httpClient.post<ClinicalHistoryRR>(this.basePathUser + '/save-clinical-history', clinicalHistoryRR);
  }

  saveDiagnosticRR(diagnosticRR: DiagnosticRR): Observable<DiagnosticRR> {
    return this.httpClient.post<DiagnosticRR>(this.basePathUser + '/save-diagnostic', diagnosticRR);
  }

  saveMedicineRR(medicineRR: MedicineRR): Observable<MedicineRR> {
    return this.httpClient.post<MedicineRR>(this.basePathUser + '/save-medicine', medicineRR);
  }

  saveReportRR(reportRR: ReportRR): Observable<ReportRR> {
    return this.httpClient.post<ReportRR>(this.basePathUser + '/save-report', reportRR);
  }
  saveTreatmentRR(treatmentRR: TreatmentRR): Observable<TreatmentRR> {
    return this.httpClient.post<TreatmentRR>(this.basePathUser + '/save-treatment', treatmentRR);
  }
}
