import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {SharedMaterialModule} from "../modules/shared-material.module";
import {LoaderComponent} from "./loader/loader.component";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CvLayoutComponent} from "./layouts/cv-layout/cv-layout.component";
import {FooterComponent} from "./footer/footer.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SidebarSideComponent} from "./sidebar-side/sidebar-side.component";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgChartsModule} from 'ng2-charts';
import {LineChartComponent} from "./charts/line-chart/line-chart.component";
import {CardComponent} from "./card/card.component";
import {PieChartComponent} from "./charts/pie-chart/pie-chart.component";
import {DonoghtChartComponent} from "./charts/doughnut-chart/donoght-chart.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {TableComponent} from "./table/table.component";

const components = [
  AuthLayoutComponent,
  AdminLayoutComponent,
  LoaderComponent,
  CvLayoutComponent,
  FooterComponent,
  SidenavComponent,
  SidebarSideComponent,
  LineChartComponent,
  PieChartComponent,
  DonoghtChartComponent,
  CardComponent,
  TableComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SharedMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PerfectScrollbarModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: components
})
export class SharedComponentsModule {
}
