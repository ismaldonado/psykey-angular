import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdditionalInfoRR } from '../../../../../model/clinicalhistory/additional-info-rr';

@Component({
  selector: 'app-additional-info-list',
  templateUrl: './additional-info-list.component.html',
  styleUrls: ['./additional-info-list.component.scss']
})
export class AdditionalInfoListComponent {
  @Input() additionalInfoRR: AdditionalInfoRR;
  @Output() edit: EventEmitter<boolean> = new EventEmitter<boolean>();
  panelOpenState = false;
  onEdit(): void {
    this.edit.emit(true);
  }
}
