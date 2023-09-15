import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ContentComponent } from './component/componentinter/content/content.component';
import { LoginComponent } from './component/componentinter/content/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductitemComponent } from './component/products/productitem/productitem.component';
import { ProductdetailsComponent } from './component/products/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ContentComponent,
    LoginComponent,
    NotfoundComponent,
    ProductitemComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
