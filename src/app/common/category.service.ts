import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as faker from 'faker';
import { Category } from '../models/category';

type categoriesCollection = AngularFirestoreCollection<Category[]>;
type categoryDocument = AngularFirestoreDocument<Category>;


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afs: AngularFirestore
  ) { }

  categories(): categoriesCollection {
    return this.afs.collection<Category[]>('categories');
  }

  category(id: string): categoryDocument {
    return this.afs.doc<Category>(`categories/${id}`);
  }

  save(category: Category): Promise<any> {
    category.id = faker.random.alphaNumeric(16);
    return this.categories().doc(category.id).set(Object.assign({}, category));
  }

  update(category: Category): Promise<any> {
    return this.category(category.id).update(Object.assign({}, category));
  }


  remove(id) {
    this.category(id).delete().then(function() {
      console.log('Document successfully deleted!');
  }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
  }
}
