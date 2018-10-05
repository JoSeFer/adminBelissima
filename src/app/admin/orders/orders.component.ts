import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { Order } from '../../models/order';
import { OrdersService } from '@common/orders.service';
import { OrdersDialogComponent } from '../orders-dialog/orders-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['id', 'create_at', 'totalProducts', 'state', 'amount', 'uid', 'detail'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ordersService: OrdersService,
    public dialog: MatDialog,
    private snackService: SnackService,
    public auth: AuthService
  ) {
    this.ordersService.orders().valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snackService.launch('Error Obteniendo Pedidos:' + err.message, '', 5000);

      });
  }

  ngOnInit() {
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, order: Order) {
    return order.id;
  }

  openDialog(order: Order) {
    this.dialog.open(OrdersDialogComponent, OrdersComponent.dialogConfig(order));
  }

  addOrder() {
    // tslint:disable-next-line:prefer-const
    let order: Order = new Order;
    this.dialog.open(OrdersDialogComponent, OrdersComponent.dialogConfig(order));
  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig (data): MatDialogConfig {
    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;
  }

   remove(order: Order) {
      // this.ordersService.remove(customer.id);
      //   this.snackService.launch('Cliente eliminado correctamente', 'Productos', 5000);
   }

}
