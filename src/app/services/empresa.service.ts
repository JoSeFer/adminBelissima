import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Empresa } from '../models/empresa';


@Injectable()
export class EmpresaService {

  empresaList: AngularFireList<any>;
  selectedEmpresa: Empresa = new Empresa();

  constructor(private firebase: AngularFireDatabase) { }

  getEmpresas() {
    return this.empresaList = this.firebase.list('empresa');
  }

  insertEmpresa(empresa: Empresa) {
    this.empresaList.push({
      nombre: empresa.nombre,
      propietario: empresa.propietario,
      email: empresa.email,
      telefono: empresa.telefono,
      facebook: empresa.facebook,
      twitter: empresa.twitter,
      youtube: empresa.youtube,
      instagram: empresa.instagram,
      direccion: empresa.direccion,
      vision: empresa.vision,
      mision: empresa.mision
    });
  }

  updateEmpresa(empresa: Empresa) {
    this.empresaList.update(empresa.$key, {
      nombre: empresa.nombre,
      propietario: empresa.propietario,
      email: empresa.email,
      telefono: empresa.telefono,
      facebook: empresa.facebook,
      twitter: empresa.twitter,
      youtube: empresa.youtube,
      instagram: empresa.instagram,
      direccion: empresa.direccion,
      vision: empresa.vision,
      mision: empresa.mision
    });
  }

  deleteEmpresa($key: string) {
    this.empresaList.remove($key);
  }

}
