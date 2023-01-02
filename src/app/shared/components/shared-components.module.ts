import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {SharedMaterialModule} from "../modules/shared-material.module";
import {LoaderComponent} from "./loader/loader.component";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {CvLayoutComponent} from "./layouts/cv-layout/cv-layout.component";
import {FooterComponent} from "./footer/footer.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SidebarSideComponent} from "./sidebar-side/sidebar-side.component";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

const components = [
  AuthLayoutComponent,
  AdminLayoutComponent,
  LoaderComponent,
  CvLayoutComponent,
  FooterComponent,
  SidenavComponent,
  SidebarSideComponent
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
    PerfectScrollbarModule
  ],
  exports: components
})
export class SharedComponentsModule { }
