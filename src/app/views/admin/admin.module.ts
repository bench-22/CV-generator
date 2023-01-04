import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedMaterialModule} from "../../shared/modules/shared-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {CvGeneratorModule} from "./cv-generator/cv-generator.module";
import {ConfigModule} from "./config/config.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    CvGeneratorModule,
    ConfigModule
  ]
})
export class AdminModule {
}
