import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../model/menu-item';
import { MenuService } from '../../../service/menu/menu.service';
import { LoginService } from '../../../service/login/login.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert/alert.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  menuItems: Array<MenuItem> = [];
  isCollapsed = false;
  private subject: Subject<any> = new Subject<any>();

  constructor(private readonly router: Router,
              private readonly menuService: MenuService,
              private readonly alertService: AlertService,
              private readonly loginService: LoginService) {}

  ngOnInit(): void {
    this.subscribeMenuItems();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.unsubscribe();
  }

  onNavigate(itemPath: string): void {
    if(itemPath === "/dashboard/task") {
      this.alertService.openSnackBar('Actualmente en construcción')
    } else {
      this.router.navigate([itemPath]).then();
    }
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']).then();
  }

  goWeb(): void {
    this.router.navigate(['/']).then();
  }

  private subscribeMenuItems(): void {
    this.menuService.getMenuItems()
      .pipe(takeUntil(this.subject))
      .subscribe((value: Array<MenuItem>) => this.menuItems = value);
  }
}
