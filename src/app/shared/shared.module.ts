import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedMaterialModule} from "./modules/shared-material.module";
import {SharedComponentsModule} from "./components/shared-components.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentsModule,
    RouterModule,
    RouterOutlet,
    HttpClientModule
  ], exports: [
    SharedMaterialModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
