import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedMaterialModule} from "./modules/shared-material.module";
import {SharedComponentsModule} from "./components/shared-components.module";
import {RouterModule, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentsModule,
    RouterModule,
    RouterOutlet,
  ], exports: [
    SharedMaterialModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
