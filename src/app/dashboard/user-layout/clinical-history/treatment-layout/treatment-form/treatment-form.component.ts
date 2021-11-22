import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreatmentRR } from 'src/app/model/clinicalhistory/treatment-rr';

@Component({
  selector: 'app-treatment-form',
  templateUrl: './treatment-form.component.html',
  styleUrls: ['./treatment-form.component.css'],
})
export class TreatmentFormComponent implements OnInit {
  @Input() treatment: TreatmentRR;
  @Output() saveTreatment : EventEmitter<TreatmentRR> = new  EventEmitter<TreatmentRR>();
  @Output() cancel : EventEmitter<boolean> = new EventEmitter<boolean>();
  treatmentForm: FormGroup;
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveTreatment.emit(this.buildTreatment());
  }

  onCancel(): void {
    this.cancel.emit(false);
  }

  private buildTreatment(): TreatmentRR {
    return {
      id: this.treatment? this.treatment.id : null,
      startDate: this.treatmentForm.get('startDate')?.value,
      endDate: this.treatmentForm.get('endDate')?.value,
      title: this.treatmentForm.get('title')?.value,
      description: this.treatmentForm.get('description')?.value
    }
  }

  private initForm(): void {
    this.treatmentForm = this.form.group({
      startDate: [this.treatment?.startDate ? this.treatment.startDate : '', [Validators.required]],
      endDate: [this.treatment?.endDate ? this.treatment.endDate : ''],
      title: [this.treatment?.title ? this.treatment.title :'', [Validators.required]],
      description: [this.treatment?.description ? this.treatment.description : ''],
    });
  }
}
