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
    // ComponentsModule
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
    UserUpdateComponent
  ],
  providers: [
    DatePipe
  ],
  entryComponents: [
    UserUpdateComponent
  ]
})

export class AdminLayoutModule { }
