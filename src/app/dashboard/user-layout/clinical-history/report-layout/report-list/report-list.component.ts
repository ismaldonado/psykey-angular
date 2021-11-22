import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportRR } from 'src/app/model/clinicalhistory/report-rr';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent {
  @Input() reportRRList: Array<ReportRR>;
  @Output() reportToUpdate: EventEmitter<ReportRR> =
    new EventEmitter<ReportRR>();
    panelOpenState = false;

  onEdit(report: ReportRR): void {
    this.reportToUpdate.emit(report);
  }
}
