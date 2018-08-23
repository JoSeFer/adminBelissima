import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    SlickCarouselModule
  ],
  declarations: [ProductsComponent, ProductComponent]
})
export class ShopModule { }
