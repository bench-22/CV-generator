import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {title: 'Change password'}
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {title: 'Forgot password'}
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {title: 'Not Found'}
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {title: 'Error'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
