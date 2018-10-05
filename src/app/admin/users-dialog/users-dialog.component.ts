import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { User } from '../../models/user';
import { UsersService } from '../../common/users.service';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent {

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private snackService: SnackService,
    public auth: AuthService,
    private usersService: UsersService
  ) { }

  saveUser() {
    if (this.data.uid) {
      this.usersService.update(this.data).then(() => {
        this.snackService.launch('Usuario Actualizado', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    } else {
      this.usersService.save(this.data).then(() => {
        this.snackService.launch('Usuario Creado', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    }
    this.dialogRef.close();
  }



}
