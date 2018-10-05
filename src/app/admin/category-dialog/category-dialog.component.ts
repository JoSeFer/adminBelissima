import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { SnackService } from '@common/snack.service';
import { Category } from '../../models/category';
import { CategoryService } from '@common/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent {
  button = 'Guardar';
  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private snackService: SnackService,
    public auth: AuthService,
    private categoryService: CategoryService
  ) { if (this.data.id) {
    this.button = 'Editar';
  }}

  saveCategory() {
    if (this.data.id) {
      this.categoryService.update(this.data).then(() => {
        this.snackService.launch('Categoria Actualizada', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    } else {
      this.categoryService.save(this.data).then(() => {
        this.snackService.launch('Categoria Creada', 'Admin', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Admin', 4000);
      });
    }
    this.dialogRef.close();
  }


}
