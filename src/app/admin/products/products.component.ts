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
    this.productService.products().valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snackService.launch('Error Obteniendo Productos:' + err.message, '', 5000);

      });
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, product: Product) {
    return product.id;
  }

  openDialog(product: Product) {
    this.dialog.open(ProductsDialogComponent, ProductsComponent.dialogConfig(product));
  }

  addProduct() {
    // tslint:disable-next-line:prefer-const
    let product: Product = new Product;
    this.dialog.open(ProductsDialogComponent, ProductsComponent.dialogConfig(product));
  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig (data): MatDialogConfig {
    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;
  }

  remove(product: Product) {
     this.productService.remove(product.id).then(() => {
       this.snackService.launch('Producto eliminado correctamente', 'Productos', 5000);
     });
  }



}
