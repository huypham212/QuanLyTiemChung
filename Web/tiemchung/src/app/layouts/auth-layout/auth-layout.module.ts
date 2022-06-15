import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthLayoutComponent } from './auth-layout.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthLayoutModule { }
