import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClinicalSessionRR } from '../../../../model/clinicalhistory/clinical-session-rr';

@Component({
  selector: 'app-clinical-session-list',
  templateUrl: './clinical-session-list.component.html',
  styleUrls: ['./clinical-session-list.component.scss'],
})
export class ClinicalSessionListComponent {
  @Input() clinicalSessionResponseList: Array<ClinicalSessionRR>;
  @Output() editClinicalSession: EventEmitter<ClinicalSessionRR> =
    new EventEmitter<ClinicalSessionRR>();
  @Output() createClinicalSession: EventEmitter<any> = new EventEmitter<any>();
  panelOpenState = false;

  editSession(session: ClinicalSessionRR): void {
    this.editClinicalSession.emit(session);
  }
}
