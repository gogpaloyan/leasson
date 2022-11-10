import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppsComponent } from './components/apps/apps.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { MyappComponent } from './components/myapp/myapp.component';
import {AppstorService} from "./services/appstor.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsappService} from "./services/productsapp.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductMiniComponent } from './components/product/product-mini/product-mini.component';
import { MorelesstextComponent } from './modal/morelesstext/morelesstext.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLoginPageComponent } from './layout/auth-login-page/auth-login-page.component';
import { HomesLoginPageComponent } from './layout/homes-login-page/homes-login-page.component';
import { NavigComponent } from './layout/navig/navig.component';
import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './components/register/register.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselComponent} from "./components/apps/carusel/carusel.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppsComponent,
    ProfileComponent,
    ProductComponent,
    MyappComponent,
    ProductMiniComponent,
    MorelesstextComponent,
    LoginComponent,
    AuthLoginPageComponent,
    HomesLoginPageComponent,
    NavigComponent,
    RegisterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [AppstorService, ProductsappService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
