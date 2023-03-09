import { NgModule } from '@angular/core';
import { PrintersComponent } from "./printers.component";
import { PrinterEditComponent } from "./printer-edit/printer-edit.component";
import { PrinterListComponent } from "./printer-list/printer-list.component";
import { PrintersRoutingModule } from "./printers-routing.module";
import { MaterialModule } from "../../material.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PrintersComponent,
    PrinterEditComponent,
    PrinterListComponent
  ],
  imports: [
    PrintersRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class PrintersModule { }
