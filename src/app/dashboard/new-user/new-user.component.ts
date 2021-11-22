import { Component, OnDestroy, OnInit } from '@angular/core';
import { userTypeList } from '../../model/enums/user-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCreateRequest } from '../../model/user/user-create-request';
import { ClientCreateRequest } from '../../model/user/client-create-request';
import { UserService } from '../../service/user/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserDetail } from '../../model/user/user-detail';
import { filter, first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AlertService } from '../../service/alert/alert.service';
import { Location } from '@angular/common';
import { TherapistResponse } from 'src/app/model/therapist/therapist-response';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  userTypeSelected = '';
  usersTypeList = userTypeList;
  checked = false;
  userToModify: UserDetail;
  therapistResponseList: Array<TherapistResponse>;

  private subscriptions: Subject<any> = new Subject<any>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly alertService: AlertService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.queryParamMap.pipe(first()).subscribe((params: ParamMap) => {
      const param = params.get('from');
      if (param === 'detail') {
        this.userToModifySubscription();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.unsubscribe();
  }

  onCreate(): void {
    this.userService
      .createUser(this.buildUserCreateRequest())
      .subscribe((userId: number) =>
        this.router
          .navigate(['/dashboard/user-detail'], { queryParams: { id: userId } })
          .then(() =>
            this.alertService.openSnackBar(
              `Usuario ${this.userToModify ? 'modificado' : 'creado'} con exito`
            )
          )
      );
  }

  onChecked(isChecked: boolean): void {
    this.checked = isChecked;
    if (this.checked) {
      this.userForm.addControl('client', this.buildClientFormGroup());
    } else {
      this.userForm.removeControl('client');
    }
  }

  onShowTherapistList(therapyTypeSelected: string): void {
    this.userService
      .getTherapistResponseList(therapyTypeSelected)
      .subscribe((therapistResponseList: Array<TherapistResponse>) => {
        this.therapistResponseList = therapistResponseList;
      });
  }

  onCancel(): void {
    this.location.back();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      user: this.fb.group({
        name: [
          this.userToModify?.name ? this.userToModify?.name : '',
          [Validators.required]
        ],
        surname: [
          this.userToModify?.surname ? this.userToModify?.surname : '',
          [Validators.required]
        ],
        birthdate: [
          this.userToModify?.birthdate ? this.userToModify?.birthdate : ''
        ],
        dni: [
          this.userToModify?.dni ? this.userToModify?.dni : '',
          [Validators.required]
        ],
        phone: [
          this.userToModify?.phone ? this.userToModify?.phone : '',
          [Validators.required]
        ],
        city: [
          this.userToModify?.city ? this.userToModify?.city : '',
          [Validators.required]
        ],
        province: [
          this.userToModify?.province ? this.userToModify?.province : '',
          [Validators.required]
        ],
        postalCode: [
          this.userToModify?.postalCode ? this.userToModify?.postalCode : '',
          [Validators.required]
        ],
        address: [
          this.userToModify?.address ? this.userToModify?.address : '',
          [Validators.required]
        ],
        therapyType: [
          this.userToModify?.therapyType ? this.userToModify?.therapyType : ''
        ],
        therapist: [
          this.userToModify?.employeeId ? this.userToModify?.employeeId : ''
        ],
        reason: [this.userToModify?.reason ? this.userToModify?.reason : ''],
        checked: [this.checked]
      })
    });
  }

  private buildClientFormGroup(): FormGroup {
    return this.fb.group({
      name: [
        this.userToModify?.client?.name ? this.userToModify?.client?.name : '',
        [Validators.required]
      ],
      surname: [
        this.userToModify?.client?.surname
          ? this.userToModify?.client?.surname
          : '',
        [Validators.required]
      ],
      dni: [
        this.userToModify?.client?.dni ? this.userToModify?.client?.dni : '',
        [Validators.required]
      ],
      phone: [
        this.userToModify?.client?.phone
          ? this.userToModify?.client?.phone
          : '',
        [Validators.required]
      ],
      address: [
        this.userToModify?.client?.address
          ? this.userToModify?.client?.address
          : '',
        [Validators.required]
      ],
      city: [
        this.userToModify?.client?.city ? this.userToModify?.client?.city : '',
        [Validators.required]
      ],
      province: [
        this.userToModify?.client?.province
          ? this.userToModify?.client?.province
          : '',
        [Validators.required]
      ],
      postalCode: [
        this.userToModify?.client?.postalCode
          ? this.userToModify?.client?.postalCode
          : '',
        [Validators.required]
      ],
      patientRelationship: [
        this.userToModify?.client?.patientRelationship
          ? this.userToModify?.client?.patientRelationship
          : ''
      ]
    });
  }

  private buildUserCreateRequest(): UserCreateRequest {
    return {
      id: this.userToModify ? this.userToModify.id : null,
      dni: this.userForm.get('user.dni')?.value,
      name: this.userForm.get('user.name')?.value,
      surname: this.userForm.get('user.surname')?.value,
      phone: this.userForm.get('user.phone')?.value,
      address: this.userForm.get('user.address')?.value,
      city: this.userForm.get('user.city')?.value,
      province: this.userForm.get('user.province')?.value,
      postalCode: this.userForm.get('user.postalCode')?.value,
      birthdate: this.userForm.get('user.birthdate')?.value,
      userType: this.userTypeSelected,
      therapyType: this.userForm.get('user.therapyType')?.value
        ? this.userForm.get('user.therapyType')?.value
        : null,
      employeeId: this.userForm.get('user.therapist')?.value
        ? this.userForm.get('user.therapist')?.value
        : null,
      reason: this.userForm.get('user.reason')?.value
        ? this.userForm.get('user.reason')?.value
        : null,
      client: this.checked ? this.buildClient() : null
    };
  }

  private buildClient(): ClientCreateRequest {
    return {
      id: this.userToModify?.client ? this.userToModify?.client.id : null,
      dni: this.userForm.get('client.dni')?.value,
      name: this.userForm.get('client.name')?.value,
      surname: this.userForm.get('client.surname')?.value,
      phone: this.userForm.get('client.phone')?.value,
      address: this.userForm.get('client.address')?.value,
      city: this.userForm.get('client.city')?.value,
      province: this.userForm.get('client.province')?.value,
      postalCode: this.userForm.get('client.postalCode')?.value,
      userType: 'client',
      patientRelationship: this.userForm.get('client.patientRelationship')
        ?.value
        ? this.userForm.get('client.patientRelationship')?.value
        : null
    };
  }

  private userToModifySubscription(): void {
    this.userService
      .getUserDetail()
      .pipe(
        filter((userDetail: UserDetail) => !!userDetail),
        takeUntil(this.subscriptions)
      )
      .subscribe((userDetail: UserDetail) => {
        this.userToModify = userDetail;
        this.userTypeSelected = this.userToModify?.userType;
        this.initForm();
        this.onChecked(!!this.userToModify?.client);
      });
  }
}
