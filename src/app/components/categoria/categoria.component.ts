import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
// import { Categoria } from '../../models/category';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public gestion: string;
  constructor(private categoriaService: CategoriaService,
    public flashMensaje: FlashMessagesService) {
      this.gestion = 'Agregar';
     }


  ngOnInit() {
    this.categoriaService.getCategorias();
    this.resetForm();
  }

  // onSubmit(categoriaForm: NgForm) {
  //   // tslint:disable-next-line:curly
  //   if (categoriaForm.value.$key == null)
  //     this.categoriaService.insertCategoria(categoriaForm.value);
  //   // tslint:disable-next-line:curly
  //   else
  //     this.categoriaService.updateCategoria(categoriaForm.value);
  //   this.resetForm(categoriaForm);
  //   // this.toastr.success('Successful Operation', 'Successful Operation');
  // }
  resetForm(categoriaForm?: NgForm) {
    if (categoriaForm != null) {
      categoriaForm.reset();
      // this.categoriaService.selectedCategoria = new Categoria();
      this.gestion = 'Agregar';
    }
  }


}
