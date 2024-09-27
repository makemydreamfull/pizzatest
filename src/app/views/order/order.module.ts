import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {HomeRoutingModule} from "../home/home-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TuiButton} from "@taiga-ui/core";


@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    OrderRoutingModule,
    InputTextModule,
    TuiButton
  ],
  exports: [
    HomeRoutingModule,
  ]
})
export class OrderModule { }
