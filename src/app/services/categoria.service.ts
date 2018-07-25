import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Categoria } from '../models/categoria';


@Injectable()
export class CategoriaService {

  categoriaList: AngularFireList<any>;
  selectedCategoria: Categoria = new Categoria();

  constructor(private firebase: AngularFireDatabase) { }

  getCategorias() {
    return this.categoriaList = this.firebase.list('categorias');
  }

  insertCategoria(categoria: Categoria) {
    this.categoriaList.push({
      nombre: categoria.nombre
    });
  }

  updateCategoria(categoria: Categoria) {
    this.categoriaList.update(categoria.$key, {
      nombre: categoria.nombre
    });
  }

  deleteCategoria($key: string) {
    this.categoriaList.remove($key);
  }

}
