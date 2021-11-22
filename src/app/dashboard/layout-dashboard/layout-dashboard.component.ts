import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu/menu.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss']
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {

  constructor(private readonly menuService: MenuService,
              private readonly userService: UserService) {}

  ngOnInit(): void {
    this.menuService.loadMenu();
  }

  ngOnDestroy(): void {
    this.userService.resetUserSearchResponse();
  }
}
