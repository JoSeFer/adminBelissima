import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../models/empresa';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas();
    this.resetForm();
  }
onSubmit(empresaForm: NgForm) {
  this.empresaService.insertEmpresa(empresaForm.value);
  this.resetForm(empresaForm);
}

resetForm(empresaForm?: NgForm) {
  if (empresaForm != null) {
    empresaForm.reset();
    this.empresaService.selectedEmpresa = new Empresa();
  }
}
}


