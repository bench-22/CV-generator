import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedMaterialModule} from "../../shared/modules/shared-material.module";


@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ErrorComponent
  ],
    imports: [
        CommonModule,
        SessionsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        NgOptimizedImage
    ]
})
export class SessionsModule { }
