import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductdetailsComponent } from './component/products/productdetails/productdetails.component';

const routes: Routes = [
  {path :' ', component : HomeComponent },
  {path :'Products', component : ProductsComponent },
  {path :'Products/:id', component : ProductdetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
