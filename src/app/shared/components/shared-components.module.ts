import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {SharedMaterialModule} from "../modules/shared-material.module";

const components = [
  AuthLayoutComponent,
  AdminLayoutComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SharedMaterialModule
  ],
  exports: components
})
export class SharedComponentsModule { }
