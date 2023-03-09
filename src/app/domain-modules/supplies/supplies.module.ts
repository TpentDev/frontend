import { NgModule } from '@angular/core';
import { MaterialModule } from "../../material.module";
import { CommonModule } from "@angular/common";
import { SuppliesComponent } from "./supplies.component";
import { SuppliesEditComponent } from "./supplies-edit/supplies-edit.component";
import { SuppliesListComponent } from "./supplies-list/supplies-list.component";
import { SuppliesRoutingModule } from "./supplies-routing.module";


@NgModule({
  declarations: [
    SuppliesComponent,
    SuppliesEditComponent,
    SuppliesListComponent
  ],
  imports: [
    SuppliesRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class SuppliesModule { }
