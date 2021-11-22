import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreatmentRR } from 'src/app/model/clinicalhistory/treatment-rr';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent {
  @Input() treatmentRRList: Array<TreatmentRR>;
  @Output() treatmentToUpdate: EventEmitter<TreatmentRR> = new EventEmitter<TreatmentRR>();
  panelOpenState = false;

  onEdit(treatment: TreatmentRR): void {
    this.treatmentToUpdate.emit(treatment);
  }
}
