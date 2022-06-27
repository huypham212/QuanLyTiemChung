import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VaccineComponent } from './../../pages/vaccine/vaccine.component';
import { UserComponent } from './../../pages/user/user.component';
import { InjectedLocationComponent } from './../../pages/injected-location/injected-location.component';
import { InjectedHistoriesComponent } from './../../pages/injected-histories/injected-histories.component';
import { InjectedPlanComponent } from './../../pages/injected-plan/injected-plan.component';
import { InjectedRegistrationComponent } from './../../pages/injected-registration/injected-registration.component';
import { UserProfileComponent } from './../../pages/user-profile/user-profile.component';
import { VaccineBatchComponent } from 'src/app/pages/vaccine-batch/vaccine-batch.component';
import { PlanCreateComponent } from 'src/app/pages/plan-create/plan-create.component';
import { PlanDetailComponent } from 'src/app/pages/plan-detail/plan-detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'vaccine', component: VaccineComponent },
    { path: 'vaccine/:id', component: VaccineBatchComponent },
    { path: 'location', component: InjectedLocationComponent },
    { path: 'histories/:id', component: InjectedHistoriesComponent },
    { path: 'registration/:id', component: InjectedRegistrationComponent },
    { path: 'plan', component: InjectedPlanComponent },
    { path: 'plan/create', component: PlanCreateComponent },
    { path: 'plan/update/:id', component: PlanCreateComponent },
    { path: 'plan/detail/:id', component: PlanDetailComponent },
    { path: 'profile', component: UserProfileComponent }
];
