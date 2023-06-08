import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeComponent } from './home.component';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {AppModule} from "../app.module";
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeDetailsComponent,
    PayComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
