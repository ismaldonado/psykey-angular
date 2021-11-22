import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ReportRR } from 'src/app/model/clinicalhistory/report-rr';

@Component({
  selector: 'app-report-layout',
  templateUrl: './report-layout.component.html',
  styleUrls: ['./report-layout.component.css'],
})
export class ReportLayoutComponent implements OnChanges {
  @Input() reportRRList: Array<ReportRR>;
  @Output() saveReport: EventEmitter<ReportRR> = new EventEmitter<ReportRR>();
  @Output() actions: EventEmitter<boolean> = new EventEmitter<boolean>();
  isEdit = false;
  reportToUpdate: ReportRR;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.reportRRList) {
      this.reportToUpdate = null;
      this.changeIsEdit(false);
    }
  }

  onSaveReport(reportRR: ReportRR): void {
    this.saveReport.emit(reportRR);
  }

  onEdit(reportRR: ReportRR): void {
    this.reportToUpdate = reportRR;
    this.changeIsEdit(true);
  }

  changeIsEdit($event: boolean): void {
    this.isEdit = $event;
    if (this.isEdit === false) {
      this.reportToUpdate = null;
    }
  }
}
