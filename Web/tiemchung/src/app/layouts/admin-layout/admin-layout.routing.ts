import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VaccineComponent } from './../../pages/vaccine/vaccine.component';
import { UserComponent } from './../../pages/user/user.component';
import { InjectedLocationComponent } from './../../pages/injected-location/injected-location.component';
import { InjectedHistoriesComponent } from './../../pages/injected-histories/injected-histories.component';
import { InjectedPlanComponent } from './../../pages/injected-plan/injected-plan.component';
import { InjectedRegistrationComponent } from './../../pages/injected-registration/injected-registration.component';
import { UserProfileComponent } from './../../pages/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'vaccine', component: VaccineComponent },
    { path: 'location', component: InjectedLocationComponent },
    { path: 'histories/:id', component: InjectedHistoriesComponent },
    { path: 'registration/:id', component: InjectedRegistrationComponent },
    { path: 'plan', component: InjectedPlanComponent },
    { path: 'profile', component: UserProfileComponent }
];
