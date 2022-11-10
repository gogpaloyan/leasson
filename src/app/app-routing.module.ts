import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {MyappComponent} from "./components/myapp/myapp.component";
import {AppsComponent} from "./components/apps/apps.component";
import {ProductComponent} from "./components/product/product.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthLoginPageComponent} from "./layout/auth-login-page/auth-login-page.component";
import {HomesLoginPageComponent} from "./layout/homes-login-page/homes-login-page.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [

  {path:"", component: AuthLoginPageComponent, children:[
      {path: "", redirectTo: 'login', pathMatch: 'prefix'},
      {path: "register", component:RegisterComponent},
      {path: "login", component:LoginComponent},


    ]},

  {path: "home",
    component: HomesLoginPageComponent,
    canActivate: [AuthGuardService] ,
    children: [
      {path: "", redirectTo: "apps", pathMatch: 'full'},
      {path:"apps", component: AppsComponent},
      {path:"myapp", component: MyappComponent},
      {path:"product", component: ProductComponent},
      {path:"profile", component: ProfileComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
