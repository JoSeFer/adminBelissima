import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { CustomersService } from '../../common/customers.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.css']
})
export class CustomersDialogComponent {

  booton = 'Guardar';
  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<CustomersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private snackService: SnackService,
    public auth: AuthService,
    private customersService: CustomersService
  ) { if (this.data.id) {
    this.booton = 'Editar';
  }}

  saveCustomer() {
    if (this.data.id) {
      this.customersService.update(this.data).then(() => {
        this.snackService.launch('Cliente Actualizado', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    } else {
      this.customersService.save(this.data).then(() => {
        this.snackService.launch('Cliente Creado', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    }
    this.dialogRef.close();
  }


}
