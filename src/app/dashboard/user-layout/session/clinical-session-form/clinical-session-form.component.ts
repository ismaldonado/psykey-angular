import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClinicalSessionRR } from '../../../../model/clinicalhistory/clinical-session-rr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clinical-session-form',
  templateUrl: './clinical-session-form.component.html',
  styleUrls: ['./clinical-session-form.component.scss'],
})
export class ClinicalSessionFormComponent implements OnInit {
  @Input() clinicalSessionToUpdate: ClinicalSessionRR;
  @Input() numberOfSession = 1;
  @Output() saveClinicalSession: EventEmitter<ClinicalSessionRR> =
    new EventEmitter<ClinicalSessionRR>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  clinicalSessionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveClinicalSession.emit(this.buildClinicalSessionRR());
  }

  onCancel(): void {
    this.cancel.emit();
  }

  private initForm(): void {
    this.clinicalSessionForm = this.formBuilder.group({
      name: [
        this.clinicalSessionToUpdate
          ? this.clinicalSessionToUpdate.name
          : this.numberOfSession,
      ],
      date: [
        this.clinicalSessionToUpdate
          ? this.transformDate(this.clinicalSessionToUpdate.date)
          : this.transformDate(new Date()),
        [Validators.required],
      ],
      description: [
        this.clinicalSessionToUpdate
          ? this.clinicalSessionToUpdate.description
          : '',
      ],
    });
  }

  private transformDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  private buildClinicalSessionRR(): ClinicalSessionRR {
    return {
      id: this.clinicalSessionToUpdate ? this.clinicalSessionToUpdate.id : null,
      name: this.clinicalSessionForm.get('name')?.value,
      date: this.clinicalSessionForm.get('date')?.value,
      description: this.clinicalSessionForm.get('description')?.value,
    };
  }
}
