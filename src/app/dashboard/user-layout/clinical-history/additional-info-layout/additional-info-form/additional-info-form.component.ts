import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdditionalInfoRR } from '../../../../../model/clinicalhistory/additional-info-rr';

@Component({
  selector: 'app-additional-info-form',
  templateUrl: './additional-info-form.component.html',
  styleUrls: ['./additional-info-form.component.scss']
})
export class AdditionalInfoFormComponent implements OnInit {
  @Input() additionalInfoRR: AdditionalInfoRR;
  @Output() saveAdditionalInfo: EventEmitter<AdditionalInfoRR> = new EventEmitter<AdditionalInfoRR>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  additionalInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveAdditionalInfo.emit(this.buildAdditionalInfo());
  }

  onCancel(): void {
    this.cancel.emit(false);
  }

  private initForm(): void {
    this.additionalInfoForm = this.formBuilder.group({
      socialInfo: [this.additionalInfoRR ? this.additionalInfoRR.socialInfo : '', [Validators.required]],
      employmentInfo: [this.additionalInfoRR ? this.additionalInfoRR.employmentInfo : '', [Validators.required]],
      familyInfo: [this.additionalInfoRR ? this.additionalInfoRR.familyInfo : '', [Validators.required]]
    });
  }

  private buildAdditionalInfo(): AdditionalInfoRR {
    return {
      socialInfo: this.additionalInfoForm.get('socialInfo')?.value,
      familyInfo: this.additionalInfoForm.get('familyInfo')?.value,
      employmentInfo: this.additionalInfoForm.get('employmentInfo')?.value
    };
  }
}
