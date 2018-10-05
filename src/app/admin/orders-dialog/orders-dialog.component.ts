import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { Order } from '../../models/order';
import { OrdersService } from '@common/orders.service';
import { UsersService } from '../../common/users.service';


@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.css']
})
export class OrdersDialogComponent implements OnInit {
  ELEMENT_DATA: any[];
  public usuario: any;
  displayedColumns: string[] = ['id', 'name', 'price', 'qty'];
  // dataSource = this.ELEMENT_DATA;

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
    private snackService: SnackService,
    public auth: AuthService,
    private ordersService: OrdersService,
    private usersService: UsersService
  ) {
    console.log(data.uid);
    const usuario = this.usersService.user(data.uid);
    this.usuario = usuario.valueChanges();
    this.dataSource = new MatTableDataSource(data.products);
      this.dataSource.sort = this.sort;


  }

  ngOnInit() {
  }

  // saveCustomer() {
  //   if (this.data.id) {
  //     this.ordersService.update(this.data).then(() => {
  //       this.snackService.launch('Cliente Actualizado', 'Admin', 4000);
  //     }).catch(error => {
  //       this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
  //     });
  //   } else {
  //     this.customersService.save(this.data).then(() => {
  //       this.snackService.launch('Cliente Creado', 'Admin', 4000);
  //     }).catch(error => {
  //       this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
  //     });
  //   }
  //   this.dialogRef.close();
  // }
  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, customer: Order) {
    return customer.id;
  }


}
