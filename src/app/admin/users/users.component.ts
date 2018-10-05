import { Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { User } from '../../models/user';
import { UsersService } from '../../common/users.service';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  displayedColumns = ['uid', 'email', 'displayName', 'role', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    private snackService: SnackService,
    public auth: AuthService
  ) {
    this.usersService.users().valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snackService.launch('Error Obteniendo Usuarios:' + err.message, '', 5000);

      });
   }

   applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, user: User) {
    return user.uid;
  }

  openDialog(user: User) {
    this.dialog.open(UsersDialogComponent, UsersComponent.dialogConfig(user));
  }

  addUser() {
    // tslint:disable-next-line:prefer-const
    let user: User = new User;
    this.dialog.open(UsersDialogComponent, UsersComponent.dialogConfig(user));
  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig (data): MatDialogConfig {
    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;
  }

   remove(user: User) {
      this.usersService.remove(user.uid);
        this.snackService.launch('Usuario eliminado correctamente', 'Usuarios', 5000);
   }



}
