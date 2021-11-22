import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NewUserComponent } from './new-user/new-user.component';
import { UserFormComponent } from './new-user/user-form/user-form.component';
import { ClientFormComponent } from './new-user/client-form/client-form.component';
import { SearchFormComponent } from './searcher/search-form/search-form.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './searcher/results/results.component';
import { UserDetailComponent } from './user-layout/user-detail/user-detail.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ClinicalHistoryComponent } from './user-layout/clinical-history/clinical-history.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdditionalInfoLayoutComponent } from './user-layout/clinical-history/additional-info-layout/additional-info-layout.component';
import { AdditionalInfoListComponent } from './user-layout/clinical-history/additional-info-layout/additional-info-list/additional-info-list.component';
import { DiagnosticLayoutComponent } from './user-layout/clinical-history/diagnostic-layout/diagnostic-layout.component';
import { DiagnosticListComponent } from './user-layout/clinical-history/diagnostic-layout/diagnostic-list/diagnostic-list.component';
import { DiagnosticFormComponent } from './user-layout/clinical-history/diagnostic-layout/diagnostic-form/diagnostic-form.component';
import { MedicineLayoutComponent } from './user-layout/clinical-history/medicine-layout/medicine-layout.component';
import { MedicineListComponent } from './user-layout/clinical-history/medicine-layout/medicine-list/medicine-list.component';
import { MedicineFormComponent } from './user-layout/clinical-history/medicine-layout/medicine-form/medicine-form.component';
import { TreatmentLayoutComponent } from './user-layout/clinical-history/treatment-layout/treatment-layout.component';
import { TreatmentListComponent } from './user-layout/clinical-history/treatment-layout/treatment-list/treatment-list.component';
import { TreatmentFormComponent } from './user-layout/clinical-history/treatment-layout/treatment-form/treatment-form.component';
import { ReportLayoutComponent } from './user-layout/clinical-history/report-layout/report-layout.component';
import { ReportListComponent } from './user-layout/clinical-history/report-layout/report-list/report-list.component';
import { ReportFormComponent } from './user-layout/clinical-history/report-layout/report-form/report-form.component';
import { AdditionalInfoFormComponent } from './user-layout/clinical-history/additional-info-layout/additional-info-form/additional-info-form.component';
import { ClinicalSessionComponent } from './user-layout/session/clinical-session.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './core/header/header.component';
import { ClinicalSessionFormComponent } from './user-layout/session/clinical-session-form/clinical-session-form.component';
import { ClinicalSessionListComponent } from './user-layout/session/clinical-session-list/clinical-session-list.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeDetailComponent } from './home-layout/home-detail/home-detail.component';
import { TaskListComponent } from './home-layout/task-list/task-list.component';
import { TaskLayoutComponent } from './task-layout/task-layout.component';

@NgModule({
  declarations: [
    LayoutDashboardComponent,
    NewUserComponent,
    UserFormComponent,
    ClientFormComponent,
    SearcherComponent,
    SearchFormComponent,
    ResultsComponent,
    UserDetailComponent,
    SidebarComponent,
    UserLayoutComponent,
    ClinicalHistoryComponent,
    AdditionalInfoLayoutComponent,
    AdditionalInfoListComponent,
    DiagnosticLayoutComponent,
    DiagnosticListComponent,
    DiagnosticFormComponent,
    MedicineLayoutComponent,
    MedicineListComponent,
    MedicineFormComponent,
    TreatmentLayoutComponent,
    TreatmentListComponent,
    TreatmentFormComponent,
    ReportLayoutComponent,
    ReportListComponent,
    ReportFormComponent,
    AdditionalInfoFormComponent,
    ClinicalSessionComponent,
    HeaderComponent,
    ClinicalSessionFormComponent,
    ClinicalSessionListComponent,
    HomeLayoutComponent,
    HomeDetailComponent,
    TaskListComponent,
    TaskLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    NgbModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    FontAwesomeModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } }
  ]
})
export class DashboardModule {
}
