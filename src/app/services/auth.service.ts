import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { Usuario } from '../models/usuario';



@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

loginTwitter() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
}

loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

loginGoogle() {
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

registerUser(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then( userData => resolve(userData), err => reject (err));
  });
}

loginEmail(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass).then( userData => resolve(userData), err => reject (err));
  });
}

getAuth() {// devuelve la data del usuario logeado
  return this.afAuth.authState.map( auth => auth);
}

  salir() {
    return this.afAuth.auth.signOut();
  }
}
