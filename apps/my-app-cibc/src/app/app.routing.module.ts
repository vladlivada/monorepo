import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent, StoreComponent } from "libs/core/src";
import { StoresModule } from "./stores/stores.module";

const routes: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'store',
    loadChildren: () => StoresModule
  }
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
