import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../common/customers.service';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  displayedColumns = ['ci', 'name', 'lastName', 'lastMother', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customersService: CustomersService,
    public dialog: MatDialog,
    private snackService: SnackService,
    public auth: AuthService
  ) {
    this.customersService.customers().valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snackService.launch('Error Obteniendo Clientes:' + err.message, '', 5000);

      });
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, customer: Customer) {
    return customer.id;
  }

  openDialog(customer: Customer) {
    this.dialog.open(CustomersDialogComponent, CustomersComponent.dialogConfig(customer));
  }

  addCustomer() {
    // tslint:disable-next-line:prefer-const
    let customer: Customer = new Customer;
    this.dialog.open(CustomersDialogComponent, CustomersComponent.dialogConfig(customer));
  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig (data): MatDialogConfig {
    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;
  }

   remove(customer: Customer) {
      this.customersService.remove(customer.id);
        this.snackService.launch('Cliente eliminado correctamente', 'Productos', 5000);
   }




}
