import { Component, EventEmitter, Input, Output } from '@angular/core';
import { therapyTypeMap } from '../../../model/enums/therapy-type';
import { userTypeMap } from '../../../model/enums/user-type';
import { UserDetail } from '../../../model/user/user-detail';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() userDetail?: UserDetail;
  @Input() isEditable = false;
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  therapyTypeMap = therapyTypeMap;
  userTypeMap = userTypeMap;

  onEdit(): void {
    this.edit.emit();
  }
}
