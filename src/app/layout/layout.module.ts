import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {TypographyComponent} from "../typography/typography.component";
import {IconsComponent} from "../icons/icons.component";
import {MapsComponent} from "../maps/maps.component";
import {NotificationsComponent} from "../notifications/notifications.component";
import {UpgradeComponent} from "../upgrade/upgrade.component";
import {MaterialModule} from "../material.module";
import {NavigationModule} from "./navigation/navigation.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LayoutComponent} from "./layout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,

    UserProfileComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    NavigationModule,
    DashboardModule,

    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class LayoutModule {}
