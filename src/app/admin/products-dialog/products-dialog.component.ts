import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@auth//auth.service';
import { ProductsService } from '@common/products.service';
import { SnackService } from '@common/snack.service';
import { Product } from '../../models/product';
import { Upload } from '../../models/upload';
import { UploadService } from '@admin/upload.service';
import { CategoryService } from '@common/category.service';
// import { Category } from '../../models/category';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent {

  uploads;
  favoriteSeason: string;
  checked = false;
  seasons: string[] = ['Hombre', 'Mujer'];
  categoriaList: any[];
  categories: Array<any>;
  booton = 'Guardar';

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<ProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private snackService: SnackService,
    public auth: AuthService,
    private productService: ProductsService,
    private uploadService: UploadService,
    private categoryService: CategoryService
  ) {
    if (data.id) { // significa que estamos en la edicion
      this.uploads = this.productService.product(this.data.id).collection('uploads').snapshotChanges().map(actions => {
        return actions.map(upload => {
          // tslint:disable-next-line:no-shadowed-variable
          const data = upload.payload.doc.data();
          const id = upload.payload.doc.id;
          return {id, ...data};
        });
      });
    }
    this.categoryService.categories().valueChanges().subscribe((cat) => {
      this.categories = cat;
      console.log(this.categories);

    },
      err => {
        this.snackService.launch('Error Obteniendo Categorias:' + err.message, '', 5000);

      });
      console.log(this.checked);

      if (this.data.id) {
        this.booton = 'Editar';
      }


  }

  saveProduct() {
    if (this.data.id) {
      this.productService.update(this.data).then(() => {
        this.snackService.launch('Producto Actualizado', 'Tienda', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Tienda', 4000);
      });
    } else {
      this.productService.save(this.data).then(() => {
        this.snackService.launch('Producto Creado', 'Tienda', 4000);
      }).catch(error => {
        this.snackService.launch('Error: ' + error.message, 'Tienda', 4000);
      });
    }
    this.dialogRef.close();
  }

  removeUpload(upload: Upload) {
    this.uploadService.removeFile(upload.id).then(() => {
      this.afs.doc(`products/${this.data.id}/uploads/${upload.id}`).delete().then(() => {
        this.snackService.launch('Adjunto eliminado', 'Tienda', 4000);
      })
        .catch(error => {
          this.snackService.launch('Error: ' + error.message, 'Tienda', 4000);
        });
    });
  }



}
