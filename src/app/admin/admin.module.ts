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


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [AdminComponent, ProductsDialogComponent, ProductsComponent, UploadFormComponent, CategoryComponent, CategoryDialogComponent],
  entryComponents: [ProductsDialogComponent, CategoryDialogComponent],
  providers: [UploadService]
})
export class AdminModule { }
