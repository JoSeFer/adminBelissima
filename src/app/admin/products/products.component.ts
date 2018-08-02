import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '@auth//auth.service';
import { Product } from '../../models/product';
import { SnackService } from '@common/snack.service';
import { ProductsService } from '@common/products.service';
import { ProductsDialogComponent } from '@admin/products-dialog/products-dialog.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  displayedColumns = ['name', 'price', 'description', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog,
    private snackService: SnackService,
    public auth: AuthService
  ) { 
    this.pro
  }


}
