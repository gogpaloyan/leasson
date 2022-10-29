import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppsComponent } from './components/apps/apps.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { MyappComponent } from './components/myapp/myapp.component';
import {AppstorService} from "./services/appstor.service";
import {FormsModule} from "@angular/forms";
import {ProductsappService} from "./services/productsapp.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductMiniComponent } from './components/product/product-mini/product-mini.component';
import { MorelesstextComponent } from './modal/morelesstext/morelesstext.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppsComponent,
    FooterComponent,
    ProfileComponent,
    ProductComponent,
    MyappComponent,
    ProductMiniComponent,
    MorelesstextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppstorService, ProductsappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
