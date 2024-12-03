import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeRoutingModule} from "./modules/home/home-routing.module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
