import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserUpdateComponent } from './modal/user/user-update/user-update.component';
import { UserDeleteComponent } from './modal/user/user-delete/user-delete.component';
import { VaccineCreateComponent } from './modal/vaccine/vaccine-create/vaccine-create.component';
import { VaccineUpdateComponent } from './modal/vaccine/vaccine-update/vaccine-update.component';
import { VaccineDeleteComponent } from './modal/vaccine/vaccine-delete/vaccine-delete.component';
import { HistoryCreateComponent } from './modal/history/history-create/history-create.component';
import { HistoryUpdateComponent } from './modal/history/history-update/history-update.component';
import { RegistrationUpdateComponent } from './modal/registration/registration-update/registration-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    // UserUpdateComponent,
    UserDeleteComponent,
    // VaccineCreateComponent,
    // VaccineUpdateComponent,
    // VaccineDeleteComponent,
    // HistoryCreateComponent,
    // HistoryUpdateComponent,
    // RegistrationUpdateComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
