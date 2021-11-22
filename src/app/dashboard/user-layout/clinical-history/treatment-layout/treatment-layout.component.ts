import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TreatmentRR } from 'src/app/model/clinicalhistory/treatment-rr';

@Component({
  selector: 'app-treatment-layout',
  templateUrl: './treatment-layout.component.html',
  styleUrls: ['./treatment-layout.component.css'],
})
export class TreatmentLayoutComponent implements OnChanges {
  @Input() treatmentRRList: Array<TreatmentRR>;
  @Output() saveTreatment: EventEmitter<TreatmentRR> =
    new EventEmitter<TreatmentRR>();
  @Output() actions: EventEmitter<boolean> = new EventEmitter<boolean>();
  treatmentToUpdate: TreatmentRR;
  isEdit: boolean;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.treatmentRRList) {
      this.treatmentToUpdate = null;
      this.changeIsEdit(false);
    }
  }
  onSaveTreatment(traetment: TreatmentRR): void {
    this.saveTreatment.emit(traetment);
  }

  onEdit(treatment: TreatmentRR): void {
    this.treatmentToUpdate = treatment;
    this.changeIsEdit(true);
  }
  changeIsEdit($event: boolean) {
    this.isEdit = $event;
    if (this.isEdit === false) {
      this.treatmentToUpdate = null;
    }
  }
}
