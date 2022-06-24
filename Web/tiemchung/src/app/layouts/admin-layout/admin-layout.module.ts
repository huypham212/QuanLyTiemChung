import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VaccineComponent } from './../../pages/vaccine/vaccine.component';
import { UserComponent } from './../../pages/user/user.component';
import { InjectedLocationComponent } from './../../pages/injected-location/injected-location.component';
import { InjectedHistoriesComponent } from './../../pages/injected-histories/injected-histories.component';
import { InjectedPlanComponent } from './../../pages/injected-plan/injected-plan.component';
import { InjectedRegistrationComponent } from './../../pages/injected-registration/injected-registration.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserDeleteComponent } from 'src/app/components/modal/user/user-delete/user-delete.component';
import { LocationCreateComponent } from 'src/app/components/modal/location/location-create/location-create.component';
import { LocationDeleteComponent } from 'src/app/components/modal/location/location-delete/location-delete.component';
import { LocationUpdateComponent } from 'src/app/components/modal/location/location-update/location-update.component';
import { RegistrationUpdateComponent } from 'src/app/components/modal/registration/registration-update/registration-update.component';
import { VaccineCreateComponent } from 'src/app/components/modal/vaccine/vaccine-create/vaccine-create.component';
import { VaccineDeleteComponent } from 'src/app/components/modal/vaccine/vaccine-delete/vaccine-delete.component';
import { VaccineUpdateComponent } from 'src/app/components/modal/vaccine/vaccine-update/vaccine-update.component';
import { PlanUpdateComponent } from 'src/app/components/modal/plan/plan-update/plan-update.component';
import { PlanCreateComponent } from 'src/app/components/modal/plan/plan-create/plan-create.component';
import { PlanDeleteComponent } from 'src/app/components/modal/plan/plan-delete/plan-delete.component';
import { HistoryCreateComponent } from 'src/app/components/modal/history/history-create/history-create.component';
import { HistoryUpdateComponent } from 'src/app/components/modal/history/history-update/history-update.component';
import { BatchCreateComponent } from 'src/app/components/modal/batch/batch-create/batch-create.component';
import { BatchDeleteComponent } from 'src/app/components/modal/batch/batch-delete/batch-delete.component';
import { BatchUpdateComponent } from 'src/app/components/modal/batch/batch-update/batch-update.component';
import { UserUpdateComponent } from 'src/app/components/modal/user/user-update/user-update.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDatepickerModule,
    ClipboardModule,
    ToastrModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    InjectedHistoriesComponent,
    InjectedLocationComponent,
    InjectedPlanComponent,
    InjectedRegistrationComponent,
    VaccineComponent,
    UserProfileComponent,
    BatchDeleteComponent,
    BatchCreateComponent,
    BatchUpdateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    LocationCreateComponent,
    LocationDeleteComponent,
    LocationUpdateComponent,
    RegistrationUpdateComponent,
    VaccineCreateComponent,
    VaccineDeleteComponent,
    VaccineUpdateComponent,
    PlanUpdateComponent,
    PlanCreateComponent,
    PlanDeleteComponent,
    HistoryCreateComponent,
    HistoryUpdateComponent
  ],
  providers: [
    DatePipe
  ]
})

export class AdminLayoutModule { }
