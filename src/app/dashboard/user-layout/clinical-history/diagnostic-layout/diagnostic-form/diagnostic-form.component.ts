import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiagnosticRR } from 'src/app/model/clinicalhistory/diagnostic-rr';

@Component({
  selector: 'app-diagnostic-form',
  templateUrl: './diagnostic-form.component.html',
  styleUrls: ['./diagnostic-form.component.css'],
})
export class DiagnosticFormComponent implements OnInit {
  @Input() diagnostic: DiagnosticRR;
  @Output() saveDiagnosticRR: EventEmitter<DiagnosticRR> =
    new EventEmitter<DiagnosticRR>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  diagnosticForm: FormGroup;
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveDiagnosticRR.emit(this.buildDiagnosticRR());
  }

  onCancel(): void {
    this.cancel.emit(false);
  }

  private initForm(): void {
    this.diagnosticForm = this.form.group({
      name: [this.diagnostic?.name ? this.diagnostic.name : ''],
      results: [this.diagnostic?.results ? this.diagnostic.results : ''],
      diagnosis: [this.diagnostic?.diagnosis ? this.diagnostic.diagnosis : ''],
    });
  }

  private buildDiagnosticRR(): DiagnosticRR {
    return {
      id: this.diagnostic ? this.diagnostic.id : null,
      name: this.diagnosticForm.get('name')?.value,
      results: this.diagnosticForm.get('results')?.value,
      diagnosis: this.diagnosticForm.get('diagnosis')?.value,
    };
  }
}
