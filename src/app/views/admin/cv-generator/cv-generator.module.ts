import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CvGeneratorRoutingModule} from './cv-generator-routing.module';
import {CvListComponent} from "./cv-list/cv-list.component";
import {SharedModule} from "../../../shared/shared.module";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";


@NgModule({
  declarations: [CvListComponent],
  imports: [
    CommonModule,
    CvGeneratorRoutingModule,
    SharedModule,
    PerfectScrollbarModule
  ]
})
export class CvGeneratorModule {
}
