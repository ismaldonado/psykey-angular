import {
  Component,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { DiagnosticRR } from 'src/app/model/clinicalhistory/diagnostic-rr';

@Component({
  selector: 'app-diagnostic-layout',
  templateUrl: './diagnostic-layout.component.html',
  styleUrls: ['./diagnostic-layout.component.css'],
})
export class DiagnosticLayoutComponent implements OnChanges {
  @Input() diagnosticRRList: Array<DiagnosticRR>;
  @Output() saveDiagnostic: EventEmitter<DiagnosticRR> =
    new EventEmitter<DiagnosticRR>();
  @Output() actions: EventEmitter<boolean> = new EventEmitter<boolean>();
  isEdit = false;
  diagnosticToUpdate: DiagnosticRR;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.diagnosticRRList) {
      this.diagnosticToUpdate = null;
      this.changeIsEdit(false);
    }
  }

  onSaveDiagnostic(diagnosticRR: DiagnosticRR): void {
    this.saveDiagnostic.emit(diagnosticRR);
  }

  onEdit(diagnosticRR: DiagnosticRR): void {
    this.diagnosticToUpdate = diagnosticRR;
    this.changeIsEdit(true);
  }

  changeIsEdit($event: boolean): void {
    this.isEdit = $event;
    if ($event === false) {
      this.diagnosticToUpdate = null;
    }
  }
}
