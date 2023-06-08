import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "../list/list.component";
import {HomeDetailsComponent} from "./home-details/home-details.component";
import {HomeComponent} from "./home.component";
import {PayComponent} from "./pay/pay.component";

const routes: Routes = [
  {path: '', component: HomeComponent,
    title:()=>Promise.resolve("首页"),
    children:[
      {
        path:"homeDetails", component:HomeDetailsComponent
      }
    ]
  },
  {
    path:"pay", component:PayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
