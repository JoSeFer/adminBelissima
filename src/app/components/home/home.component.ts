import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../models/empresa';
// import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toastr: any;
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas();
    this.resetForm();
  }
onSubmit(empresaForm: NgForm) {
  // tslint:disable-next-line:curly
  if (empresaForm.value.$key == null)
    this.empresaService.insertEmpresa(empresaForm.value);
  // tslint:disable-next-line:curly
  else
    this.empresaService.updateEmpresa(empresaForm.value);

  this.resetForm(empresaForm);
  this.toastr.success('Successful Operation', 'Successful Operation');
}

resetForm(empresaForm?: NgForm) {
  if (empresaForm != null) {
    empresaForm.reset();
    this.empresaService.selectedEmpresa = new Empresa();
  }
}
}


