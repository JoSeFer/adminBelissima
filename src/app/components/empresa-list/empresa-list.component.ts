import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../models/empresa';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresaList: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas().snapshotChanges()
    .subscribe(item => {
      this.empresaList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.empresaList.push(x as Empresa);

    });
  });

}

  onEdit(empresa: Empresa) {
    this.empresaService.selectedEmpresa = Object.assign({}, empresa);
  }
  onDelete($key: string) {
    // tslint:disable-next-line:curly
    if (confirm('Esta seguro de querer eliminarlo?'))
    this.empresaService.deleteEmpresa($key);
    // this.toastr.success('Successful Operation', 'Empresa eliminado'); }
  }
}
