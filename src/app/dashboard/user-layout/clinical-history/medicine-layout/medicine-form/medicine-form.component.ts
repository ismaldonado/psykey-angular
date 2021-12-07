import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineRR } from '../../../../../model/clinicalhistory/medicine-rr';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css'],
})
export class MedicineFormComponent implements OnInit {
  @Input() medicine: MedicineRR;
  @Output() saveMedicineRR: EventEmitter<MedicineRR> =
    new EventEmitter<MedicineRR>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  medicineForm: FormGroup;

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveMedicineRR.emit(this.buildMedicineRR());
  }

  onCancel(): void {
    this.cancel.emit(false);
  }

  private initForm(): void {
    this.medicineForm = this.form.group({
      name: [
        this.medicine?.name ? this.medicine.name : '',
        [Validators.required],
      ],
      dose: [this.medicine?.dose ? this.medicine.dose : ''],
      startDate: [this.medicine?.startDate ? this.medicine.startDate : ''],
      endDate: [this.medicine?.endDate ? this.medicine.endDate : ''],
      comments: [this.medicine?.comments ? this.medicine.comments : ''],
    });
  }

  private buildMedicineRR(): MedicineRR {
    return {
      id: this.medicine ? this.medicine.id : null,
      name: this.medicineForm.get('name')?.value,
      dose: this.medicineForm.get('dose')?.value,
      startDate: this.medicineForm.get('startDate')?.value,
      endDate: this.medicineForm.get('endDate')?.value,
      comments: this.medicineForm.get('comments')?.value,
    };
  }
}
