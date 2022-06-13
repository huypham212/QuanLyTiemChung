import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VaccineComponent } from './../../pages/vaccine/vaccine.component';
import { UserComponent } from './../../pages/user/user.component';
import { InjectedLocationComponent } from './../../pages/injected-location/injected-location.component';
import { InjectedHistoriesComponent } from './../../pages/injected-histories/injected-histories.component';
import { InjectedPlanComponent } from './../../pages/injected-plan/injected-plan.component';
import { InjectedRegistrationComponent } from './../../pages/injected-registration/injected-registration.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'vaccine', component: VaccineComponent },
    { path: 'location', component: InjectedLocationComponent },
    { path: 'histories', component: InjectedHistoriesComponent },
    { path: 'registration', component: InjectedRegistrationComponent },
    { path: 'plan', component: InjectedPlanComponent },
];
