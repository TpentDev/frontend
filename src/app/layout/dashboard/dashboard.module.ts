import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {MaterialModule} from "../../material.module";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }
