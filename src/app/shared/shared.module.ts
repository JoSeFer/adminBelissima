import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppService } from '../common/app.service';
import { SnackService } from '../common/snack.service';
import { AuthGuard } from '@auth/auth.guard';
import { ProductsService } from '@common/products.service';
import { CartService } from '@common/cart.service';
import { OrdersService } from '@common/orders.service';
import { CategoryService } from '@common/category.service';
import { CustomersService } from '../common/customers.service';
import { UsersService } from '../common/users.service';




@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [AppService, SnackService, AuthGuard, ProductsService, CartService, OrdersService, CategoryService, CustomersService, UsersService]
})
export class SharedModule { }
