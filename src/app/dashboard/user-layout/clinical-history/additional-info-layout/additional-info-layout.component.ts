import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AdditionalInfoRR } from '../../../../model/clinicalhistory/additional-info-rr';

@Component({
  selector: 'app-additional-info-layout',
  templateUrl: './additional-info-layout.component.html',
  styleUrls: ['./additional-info-layout.component.scss']
})
export class AdditionalInfoLayoutComponent implements OnChanges {
  @Input() additionalInfoRR: AdditionalInfoRR;
  @Output() saveAdditionalInfo: EventEmitter<AdditionalInfoRR> = new EventEmitter<AdditionalInfoRR>();
  @Output() actions: EventEmitter<boolean> = new EventEmitter<boolean>();

  isEdit = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.additionalInfoRR) {
      this.isEdit = false;
    }
  }

  onSaveAdditionalInfo(additionalInfoRR: AdditionalInfoRR): void {
    this.saveAdditionalInfo.emit(additionalInfoRR);
  }

  onActions($event: boolean): void {
    this.isEdit = $event;
    if (!this.additionalInfoRR && !this.isEdit) {
      this.actions.emit(false);
    }
  }
}
