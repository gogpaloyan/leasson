import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyappComponent} from "./components/myapp/myapp.component";

import {AppsComponent} from "./components/apps/apps.component";
import {ProductComponent} from "./components/product/product.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path:"", component: AppsComponent},
  {path:"myapp", component: MyappComponent},
  {path:"product", component: ProductComponent},
  {path:"**", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
