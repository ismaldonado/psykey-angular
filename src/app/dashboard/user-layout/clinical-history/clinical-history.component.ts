import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClinicalHistoryRR } from '../../../model/clinicalhistory/clinical-history-rr';
import { ClinicalHistoryService } from '../../../service/clinicalhistory/clinical-history.service';
import { AdditionalInfoRR } from '../../../model/clinicalhistory/additional-info-rr';
import { UserDetail } from '../../../model/user/user-detail';
import { MedicineRR } from '../../../model/clinicalhistory/medicine-rr';
import { DiagnosticRR } from '../../../model/clinicalhistory/diagnostic-rr';
import { ReportRR } from '../../../model/clinicalhistory/report-rr';
import { TreatmentRR } from '../../../model/clinicalhistory/treatment-rr';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.scss']
})
export class ClinicalHistoryComponent {
  @Input() set userDetailResponse(userDetail: UserDetail) {
    this.userDetail = userDetail;
    this.clinicalHistoryResponse = userDetail.clinicalHistoryResponse;
    this.changeClinicalHistory();
  }

  @Input() showClinicalHistory = false;
  @Output() updateUserDetail: EventEmitter<UserDetail> =
    new EventEmitter<UserDetail>();
  userDetail: UserDetail;
  clinicalHistoryResponse: ClinicalHistoryRR;
  medicineRRList: Array<MedicineRR>;
  diagnosticRRList: Array<DiagnosticRR>;
  reportRRList: Array<ReportRR>;
  treatmentRRList: Array<TreatmentRR>;

  constructor(
    private readonly clinicalHistoryService: ClinicalHistoryService
  ) {}

  onCreateClinicalHistory(): void {
    this.changeShowClinicalHistory(true);
  }

  saveAdditionalInfo(additionalInfoRR: AdditionalInfoRR): void {
    const clinicalHistoryRR: ClinicalHistoryRR = {
      id: this.clinicalHistoryResponse?.id,
      employeeId: this.userDetail.employeeId,
      patientId: this.userDetail.id,
      additionalInfoRR
    };
    this.clinicalHistoryService
      .saveClinicalHistory(clinicalHistoryRR)
      .subscribe((clinicalHistory: ClinicalHistoryRR) => {
        const userDetailUpdated: UserDetail = {
          ...this.userDetail,
          clinicalHistoryResponse: {
            ...this.userDetail.clinicalHistoryResponse,
            additionalInfoRR: clinicalHistory.additionalInfoRR
          }
        };
        this.updateUserDetail.emit(userDetailUpdated);
      });
  }

  saveMedicine(medicine: MedicineRR): void {
    const medicineRR: MedicineRR = {
      ...medicine,
      clinicalHistoryId: this.clinicalHistoryResponse?.id
    };
    this.clinicalHistoryService
      .saveMedicineRR(medicineRR)
      .subscribe((value: MedicineRR) => {
        const userDetailUpdated: UserDetail = {
          ...this.userDetail,
          clinicalHistoryResponse: {
            ...this.userDetail.clinicalHistoryResponse,
            medicineRRList: this.saveElementToList(
              this.userDetail.clinicalHistoryResponse.medicineRRList,
              value
            )
          }
        };
        this.updateUserDetail.emit(userDetailUpdated);
      });
  }
  
  saveDiagnostic(diagnostic: DiagnosticRR): void {
    const diagnosticRR: DiagnosticRR = {
      ...diagnostic,
      clinicalHistoryId: this.clinicalHistoryResponse?.id
    };
    this.clinicalHistoryService
      .saveDiagnosticRR(diagnosticRR)
      .subscribe((value: DiagnosticRR) => {
        const userDetailUpdated: UserDetail = {
          ...this.userDetail,
          clinicalHistoryResponse: {
            ...this.userDetail.clinicalHistoryResponse,
            diagnosticRRList: this.saveElementToList(
              this.userDetail.clinicalHistoryResponse.diagnosticRRList,
              value
            )
          }
        };
        this.updateUserDetail.emit(userDetailUpdated);
      });
  }

  saveTreatment(treatment: TreatmentRR): void {
    const treatmentRR: TreatmentRR = {
      ...treatment,
      clinicalHistoryId: this.clinicalHistoryResponse?.id
    };
    this.clinicalHistoryService
      .saveTreatmentRR(treatmentRR)
      .subscribe((value: TreatmentRR) => {
        const userDetailUpdated: UserDetail = {
          ...this.userDetail,
          clinicalHistoryResponse: {
            ...this.userDetail.clinicalHistoryResponse,
            treatmentRRList: this.saveElementToList(
              this.userDetail.clinicalHistoryResponse.treatmentRRList,
              value
            )
          }
        };
        this.updateUserDetail.emit(userDetailUpdated);
      });
  }

  saveReport(report: ReportRR): void {
    const reporttRR: ReportRR = {
      ...report,
      clinicalHistoryId: this.clinicalHistoryResponse?.id
    };
    this.clinicalHistoryService
      .saveReportRR(reporttRR)
      .subscribe((value: ReportRR) => {
        const userDetailUpdated: UserDetail = {
          ...this.userDetail,
          clinicalHistoryResponse: {
            ...this.userDetail.clinicalHistoryResponse,
            reportRRList: this.saveElementToList(
              this.userDetail.clinicalHistoryResponse.reportRRList,
              value
            )
          }
        };
        this.updateUserDetail.emit(userDetailUpdated);
      });
  }

  changeShowClinicalHistory(value: boolean): void {
    this.showClinicalHistory = value;
  }

  private changeClinicalHistory(): void {
    const medicineList = this.clinicalHistoryResponse?.medicineRRList;
    const diagnosticList = this.clinicalHistoryResponse?.diagnosticRRList;
    const reportList = this.clinicalHistoryResponse?.reportRRList;
    const treatmentList = this.clinicalHistoryResponse?.treatmentRRList;
    this.medicineRRList = Array.from(medicineList ? medicineList : []);
    this.diagnosticRRList = Array.from(diagnosticList ? diagnosticList : []);
    this.reportRRList = Array.from(reportList ? reportList : []);
    this.treatmentRRList = Array.from(treatmentList ? treatmentList : []);
  }

  private saveElementToList(list: Array<any>, element: any): Array<any> {
    if (list && list.length > 0) {
      const index: number = this.findIndex(list, element);
      if (index !== -1) {
        list[index] = element;
      } else {
        list.push(element);
      }
      return list;
    }
    return Array.of(element);
  }

  private findIndex(list: Array<any>, element: any): number {
    return list.findIndex((value) => value.id === element.id);
  }
}
