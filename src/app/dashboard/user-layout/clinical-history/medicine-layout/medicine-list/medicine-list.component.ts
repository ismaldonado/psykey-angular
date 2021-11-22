import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MedicineRR } from '../../../../../model/clinicalhistory/medicine-rr';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent {
  @Input() medicineRRList: Array<MedicineRR>;
  @Output() medicineToUpdate: EventEmitter<MedicineRR> =
    new EventEmitter<MedicineRR>();

  displayedMedicineColumns: string[] = [
    'name',
    'dose',
    'startDate',
    'endDate',
    'comments',
    'actions',
  ];

  onEdit(medicine: MedicineRR): void {
    this.medicineToUpdate.emit(medicine);
  }
}
