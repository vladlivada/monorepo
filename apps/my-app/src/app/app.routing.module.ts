import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent, StoreComponent } from "@my-app/core";

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
    path: 'stores',
    component: StoreComponent
  }
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }