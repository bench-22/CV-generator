import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CvListComponent} from "./cv-generator/cv-list/cv-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Dashboard', breadcrumb: 'Dashboard'}
  },
  {
    path: 'cv',
    loadChildren: () => import('./cv-generator/cv-generator.module').then(m => m.CvGeneratorModule),
    data: {title: 'CV', breadcrumb: 'CV'}
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule),
    data: {title: 'Config', breadcrumb: 'Config'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
