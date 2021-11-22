import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClinicalSessionRR } from '../../../model/clinicalhistory/clinical-session-rr';
import { ClinicalSessionService } from '../../../service/clinicalsession/clinical-session.service';

@Component({
  selector: 'app-clinical-session',
  templateUrl: './clinical-session.component.html',
  styleUrls: ['./clinical-session.component.scss']
})
export class ClinicalSessionComponent {
  @Input() clinicalSessionResponseList: Array<ClinicalSessionRR>;
  @Input() userId: number;
  @Input() employeeId: number;
  @Output() saveClinicalSession: EventEmitter<ClinicalSessionRR> = new EventEmitter<ClinicalSessionRR>();
  clinicalSessionToUpdate: ClinicalSessionRR;
  numberOfSession = 1;
  isEdit = false;

  constructor(private readonly clinicalSessionService: ClinicalSessionService) { }

  onCreate(clinicalSession: ClinicalSessionRR): void {
    const clinicalSessionRequest: ClinicalSessionRR = {
      ...clinicalSession,
      patientId: this.userId,
      employeeId: this.employeeId
    };
    this.clinicalSessionService.createSession(clinicalSessionRequest)
      .subscribe((clinicalSessionResponse: ClinicalSessionRR) => {
        this.saveClinicalSession.emit(clinicalSessionResponse);
        this.changeIsEdit(false);
      });
  }

  addClinicalSession(): void {
    this.clinicalSessionToUpdate = null;
    this.numberOfSession = this.clinicalSessionResponseList?.length + 1;
    this.changeIsEdit(true);
  }

  onEdit(clinicalSession: ClinicalSessionRR): void {
    this.clinicalSessionToUpdate = clinicalSession;
    this.changeIsEdit(true);
  }

  onCancel(): void {
    this.changeIsEdit(false);
  }

  changeIsEdit(value: boolean): void {
    this.isEdit = value;
  }
}
