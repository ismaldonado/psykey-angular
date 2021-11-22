import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MedicineRR } from '../../../../model/clinicalhistory/medicine-rr';

@Component({
  selector: 'app-medicine-layout',
  templateUrl: './medicine-layout.component.html',
  styleUrls: ['./medicine-layout.component.css'],
})
export class MedicineLayoutComponent implements OnChanges {
  @Input() medicineRRList: Array<MedicineRR>;
  @Output() saveMedicine: EventEmitter<MedicineRR> =
    new EventEmitter<MedicineRR>();
  @Output() actions: EventEmitter<boolean> = new EventEmitter<boolean>();
  isEdit = false;
  medicineToUpdate: MedicineRR;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.medicineRRList) {
      this.medicineToUpdate = null;
      this.changeIsEdit(false);
    }
  }

  onSaveMedicine(medicineRR: MedicineRR): void {
    this.saveMedicine.emit(medicineRR);
  }

  onEdit(medicineRR: MedicineRR): void {
    this.medicineToUpdate = medicineRR;
    this.changeIsEdit(true);
  }

  changeIsEdit($event: boolean): void {
    this.isEdit = $event;
    if ($event === false) {
      this.medicineToUpdate = null;
    }
  }
}
