import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PrintersComponent } from "./domain-modules/printers/printers.component";
import { SuppliesComponent } from "./domain-modules/supplies/supplies.component";
import {DashboardComponent} from "./layout/dashboard/dashboard.component";

const routes: Routes =[
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
 {
    path: 'printers',
    component: PrintersComponent,
    children: [{
      path: '',
      loadChildren: () => import('./domain-modules/printers/printers.module').then(m => m.PrintersModule)
    }]
  }, {
    path: 'supplies',
    component: SuppliesComponent,
    children: [{
      path: '',
      loadChildren: () => import('./domain-modules/supplies/supplies.module').then(m => m.SuppliesModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
