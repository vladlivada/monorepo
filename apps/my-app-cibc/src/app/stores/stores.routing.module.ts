import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StoreComponent } from "libs/core/src";

const routes: Array<Route> = [
  {
    path: '',
    children: [
     {
      path: '',
      pathMatch: 'full',
      redirectTo: 'stores-overview'
     },
     {
      path: 'stores-overview',
      component: StoreComponent
     }
    ]
  }
]





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
