import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsComponent } from './products/products.component';
import { UploadService } from '@admin/upload.service';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDialogComponent } from '@admin/category-dialog/category-dialog.component';
import { CustomersDialogComponent } from './customers-dialog/customers-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { UsersComponent } from './users/users.component';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [AdminComponent, ProductsDialogComponent, ProductsComponent, UploadFormComponent, CategoryComponent, CategoryDialogComponent, CustomersDialogComponent, CustomersComponent, UsersDialogComponent, UsersComponent, OrdersDialogComponent, OrdersComponent],
  // tslint:disable-next-line:max-line-length
  entryComponents: [ProductsDialogComponent, CategoryDialogComponent, CustomersDialogComponent, UsersDialogComponent, OrdersDialogComponent],
  providers: [UploadService]
})
export class AdminModule { }
