import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PrintersModule} from "./domain-modules/printers/printers.module";
import {MaterialModule} from "./material.module";
import {SuppliesModule} from "./domain-modules/supplies/supplies.module";
import {LayoutModule} from "./layout/layout.module";


@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent
  ],
  imports: [
    LayoutModule,
    PrintersModule,
    SuppliesModule,



    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
