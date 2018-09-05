import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '@auth//auth.service';
import { Category } from '../../models/category';
import { SnackService } from '@common/snack.service';
import { CategoryService } from '@common/category.service';
import { CategoryDialogComponent } from '@admin/category-dialog/category-dialog.component';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  displayedColumns = ['id', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private snackService: SnackService,
    public auth: AuthService

  ) {
    this.categoryService.categories().valueChanges().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snackService.launch('Error Obteniendo Categorias:' + err.message, '', 5000);

      });
  }

  applyFilter(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, category: Category) {
    return category.id;
  }

  openDialog(category: Category) {
    this.dialog.open(CategoryDialogComponent, CategoryComponent.dialogConfig(category));
  }

  addCategory() {
    // tslint:disable-next-line:prefer-const
    let category: Category = new Category;
    this.dialog.open(CategoryDialogComponent, CategoryComponent.dialogConfig(category));
  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig (data): MatDialogConfig {
    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;
  }

   remove(category: Category) {
      this.categoryService.remove(category.id);
        this.snackService.launch('Producto eliminado correctamente', 'Productos', 5000);
   }



}
