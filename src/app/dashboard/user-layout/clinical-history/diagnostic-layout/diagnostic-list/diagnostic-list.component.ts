import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiagnosticRR } from 'src/app/model/clinicalhistory/diagnostic-rr';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.css'],
})
export class DiagnosticListComponent  {
  @Input() diagnosticRRlist: Array<DiagnosticRR>;
  @Output() diagnosticToUpdate: EventEmitter<DiagnosticRR> =
    new EventEmitter<DiagnosticRR>();

  displayedDiagnosticColumns: string[] = ['name', 'results', 'diagnosis', 'actions'];


  onEdit(diagnosticRR: DiagnosticRR): void {
    this.diagnosticToUpdate.emit(diagnosticRR);
  }
}
