import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TherapistResponse } from 'src/app/model/therapist/therapist-response';
import { therapyTypeList } from '../../../model/enums/therapy-type';
import { userTypeMap } from '../../../model/enums/user-type';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() userType = '';
  @Input() formGroupName: string;
  @Input() therapistResponseList: Array<TherapistResponse>;
  @Output() checkedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() therapyTypeSelected: EventEmitter<string> = new EventEmitter<string>();
  userForm: FormGroup;
  checked = false;
  therapyTypeList = therapyTypeList;
  userTypeMap = userTypeMap;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.userForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.userForm.get('therapyType')
      .valueChanges.subscribe((therapyTypSelected: string) => {
      if (this.userType === 'patient') {
        this.onShowTherapistList(therapyTypSelected);
      }
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
    this.checkedEvent.emit(this.checked);
  }

  private onShowTherapistList(therapyTypeSelected: string): void {
    this.therapyTypeSelected.emit(therapyTypeSelected);
  }
}
