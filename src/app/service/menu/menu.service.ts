import { Injectable } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from '../storage/session-storage.service';
import { filter } from 'rxjs/operators';
import { AccessInfo } from '../../model/access-info';
import { Permission } from '../../model/permission';

export const MenuItems: Array<MenuItem> = [
  {
    path: '/dashboard/home',
    name: 'Inicio',
    sectionName: 'home',
    icon: 'home'
  },
  {
    path: '/dashboard/searcher',
    name: 'Búsqueda',
    sectionName: 'searcher',
    icon: 'search'
  },
  {
    path: '/dashboard/new-user',
    name: 'Alta Usuario',
    sectionName: 'new-user',
    icon: 'person_add'
  },
  {
    path: '/dashboard/task',
    name: 'Tareas',
    sectionName: 'task',
    icon: 'format_list_bulleted'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>([]);

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  loadMenu(): void {
    this.sessionStorageService.select('accessInfo', null)
      .pipe(filter((accessInfo: AccessInfo) => accessInfo?.permissions.length > 0))
      .subscribe((accessInfo: AccessInfo) => {
        this.setMenuItems(accessInfo.permissions);
      });
  }

  getMenuItems(): Observable<Array<MenuItem>> {
    return this.menuItems.asObservable();
  }

  private setMenuItems(permissions: Array<Permission>): void {
    this.menuItems.next(MenuItems.filter((menuItem: MenuItem) => this.hasMenuPermission(permissions, menuItem)));
  }

  private hasMenuPermission(permissions: Array<Permission>, menuItem: MenuItem): boolean {
    return permissions.some((permission: Permission) => permission.sectionName === menuItem.sectionName);
  }
}
