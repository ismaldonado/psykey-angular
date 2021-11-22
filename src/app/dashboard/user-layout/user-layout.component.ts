import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDetail } from '../../model/user/user-detail';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../service/user/user.service';
import { filter, first, takeUntil } from 'rxjs/operators';
import { ClinicalSessionRR } from '../../model/clinicalhistory/clinical-session-rr';
import { SessionStorageService } from '../../service/storage/session-storage.service';
import { AuthService } from '../../service/auth/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit, OnDestroy {
  userDetail: UserDetail;
  clinicalSessionResponseList: Array<ClinicalSessionRR>;
  showClinicalHistory = false;
  showClinicalSession = false;
  isEditable = false;
  userLogged = '';
  private subscriptions: Subject<any> = new Subject<any>();

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly location: Location,
              private readonly userService: UserService,
              private readonly sessionStorageService: SessionStorageService,
              private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.subscribeUserDetail();
    this.route.queryParamMap.pipe(first()).subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.loadUser(id);
      }
    });
    this.userLogged = this.sessionStorageService.get('accessInfo').username;
    this.isEditable = this.authService.hasPermissions('edit-user-detail');
  }

  ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.unsubscribe();
  }

  onGoBack(): void {
    this.location.back();
  }

  onEdit(): void {
    this.router.navigate(['/dashboard/new-user'], { queryParams: { from: 'detail' } }).then();
  }

  onUpdateUserDetail(userDetailUpdated: UserDetail): void {
    this.userService.setUserDetail(userDetailUpdated);
  }

  onSaveClinicalSession(clinicalSession: ClinicalSessionRR): void {
    this.onUpdateUserDetail({
      ...this.userDetail,
      clinicalSessionResponseList: this.saveClinicalSession(this.userDetail.clinicalSessionResponseList, clinicalSession)
    });
  }

  private loadUser(id: string): void {
    this.userService.findUser(id).subscribe();
  }

  private subscribeUserDetail(): void {
    this.userService.getUserDetail()
      .pipe(
        filter((userDetail: UserDetail) => !!userDetail),
        takeUntil(this.subscriptions)
      )
      .subscribe((userDetail: UserDetail) => {
        this.userDetail = userDetail;
        if (userDetail?.clinicalHistoryResponse) {
          this.showClinicalHistory = true;
        }
        if (userDetail?.clinicalSessionResponseList && userDetail?.clinicalSessionResponseList.length > 0) {
          this.showClinicalSession = true;
        }
        this.clinicalSessionResponseList = userDetail?.clinicalSessionResponseList;
      });
  }

  private saveClinicalSession(clinicalSessionRRList: Array<ClinicalSessionRR>,
                              clinicalSessionRR: ClinicalSessionRR): Array<ClinicalSessionRR> {
    if (clinicalSessionRRList && clinicalSessionRRList.length > 0) {
      const index: number = this.findIndex(clinicalSessionRRList, clinicalSessionRR);
      if (index !== -1) {
        clinicalSessionRRList[index] = clinicalSessionRR;
      } else {
        clinicalSessionRRList.push(clinicalSessionRR);
      }
      return clinicalSessionRRList;
    }
    return Array.of(clinicalSessionRR);
  }

  private findIndex(list: Array<any>, element: any): number {
    return list.findIndex(value => value.id === element.id);
  }
}
