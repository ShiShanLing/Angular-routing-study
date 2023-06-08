import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetaisComponent} from "./detais/detais.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  //设置重定向 也就是默认展示的组件
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  //一个页面路由
  {path: 'list', component: ListComponent},
  //一个页面路由
  {path: 'details', component: DetaisComponent},
  //home子路由
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then((x) => x.HomeRoutingModule),
  },
  //通配符路由
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
