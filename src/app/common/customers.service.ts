import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as faker from 'faker';
import { Customer } from '../models/customer';


type categoriesCollection = AngularFirestoreCollection<Customer[]>;
type categoryDocument = AngularFirestoreDocument<Customer>;

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private afs: AngularFirestore
  ) { }

  customers(): categoriesCollection {
    return this.afs.collection<Customer[]>('customers');
  }

  customer(id: string): categoryDocument {
    return this.afs.doc<Customer>(`customers/${id}`);
  }

  save(customer: Customer): Promise<any> {
    customer.id = faker.random.alphaNumeric(16);
    return this.customers().doc(customer.id).set(Object.assign({}, customer));
  }

  update(customer: Customer): Promise<any> {
    return this.customer(customer.id).update(Object.assign({}, customer));
  }


  remove(id) {
    this.customer(id).delete().then(function() {
      console.log('Document successfully deleted!');
  }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
  }
}
