import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as faker from 'faker';
import { User } from '../models/user';


type usersCollection = AngularFirestoreCollection<User[]>;
type usersDocument = AngularFirestoreDocument<User>;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private afs: AngularFirestore
  ) { }

  users(): usersCollection {
    return this.afs.collection<User[]>('users');
  }

  user(id: string): usersDocument {
    return this.afs.doc<User>(`users/${id}`);
  }


  update(user: User): Promise<any> {
    return this.user(user.uid).update(Object.assign({}, user));
  }

  save(user: User): Promise<any> {
    user.uid = faker.random.alphaNumeric(16);
    return this.users().doc(user.uid).set(Object.assign({}, user));
  }


  remove(uid) {
    this.user(uid).delete().then(function() {
      console.log('Document successfully deleted!');
  }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
  }
}
