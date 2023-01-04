import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
import {UserIsLoggedIn} from "./shared/guards/auth.guards";
import {CvLayoutComponent} from "./shared/components/layouts/cv-layout/cv-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: {title: 'Login'}
      }
    ]
  },
  {
    path: 'cv/module/admin',
    component: CvLayoutComponent,
    canActivate: [UserIsLoggedIn],
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
    data: {title: 'Admin'}
  },
  {
    path: '**',
    redirectTo: 'sessions/404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
