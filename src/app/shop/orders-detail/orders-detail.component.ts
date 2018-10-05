import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { Order } from '../../models/order';
import { OrdersService } from '@common/orders.service';
import { UsersService } from '../../common/users.service';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {
  ELEMENT_DATA: any[];
  public usuario: any;
  displayedColumns: string[] = ['id', 'name', 'price', 'qty'];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  order: any;


  constructor(
    private route: ActivatedRoute,
    public ordersService: OrdersService,
    public auth: AuthService,
    private afs: AngularFirestore,
    private snackService: SnackService,
    private usersService: UsersService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.order = this.ordersService.order(id);
    this.order = this.order.valueChanges();



    this.ordersService.order(id).valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.products);
      this.dataSource.sort = this.sort;
      const usuario = this.usersService.user(data.uid);
      this.usuario = usuario.valueChanges();
    },
      err => {
        this.snackService.launch('Error Obteniendo Pedidos:' + err.message, '', 5000);

      });

    console.log(this.order.uid);

    console.log(this.dataSource);


  }

  ngOnInit() {
  }
  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, customer: Order) {
    return customer.id;
  }



}
