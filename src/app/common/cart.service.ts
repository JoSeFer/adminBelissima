import { Injectable } from '@angular/core';
import { AuthService } from '@auth//auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cart } from '../models/cart';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore
  ) { }

  createCart(id) {
    this.afs.collection('carts').doc(id).set(
      {id: id, products: [], totalProducts: 0}
    );
  }

  myCart(uid) {
    return this.afs.doc<Cart>(`carts/${uid}`).snapshotChanges();
  }

  myCartRef(uid) {
    return this.afs.collection<Cart>('carts').doc(uid).ref;
  }
}
