import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
// import { Categoria } from '../../models/category';
import { CategoriaComponent } from '../categoria/categoria.component';



@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  // categoriaList: Categoria[];

  constructor(private categoriaService: CategoriaService,
  public categoriaComponent: CategoriaComponent) { }

  ngOnInit() {
    this.categoriaService.getCategorias().snapshotChanges().subscribe(item => {
      // this.categoriaList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        // this.categoriaList.push(x as Categoria);
      });
    });
  }

  // onEdit(categoria: Categoria) {
  //   this.categoriaService.selectedCategoria = Object.assign({}, categoria);
  //   this.categoriaComponent.gestion = 'Editar';
  // }
  onDelete($key: string) {
    // tslint:disable-next-line:curly
    if (confirm('Esta seguro de querer eliminarlo?'))
    this.categoriaService.deleteCategoria($key);
    // this.toastr.success('Successful Operation', 'Empresa eliminado'); }
  }

}
