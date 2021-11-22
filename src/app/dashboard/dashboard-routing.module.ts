import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SearcherComponent } from './searcher/searcher.component';
import { AuthGuardService as AuthGuard } from '../service/auth/auth-guard.service';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TaskLayoutComponent } from './task-layout/task-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'searcher',
        component: SearcherComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-user',
        component: NewUserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user-detail',
        component: UserLayoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'task',
        component: TaskLayoutComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
