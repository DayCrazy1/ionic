import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'

import { map } from 'rxjs/operators'
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    protected fire: AngularFireDatabase,
    protected afAuth: AngularFireAuth
  ) { }

  save(usuario) {
    return this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.pws)
      .then(
        res => {
          usuario.email = null;
          usuario.pws = null;
          return this.fire.object("usuarios/" + res.user.uid).set(usuario);
        },
        erro =>{
          console.log(erro);
          this.afAuth.auth.currentUser.delete();
        } 
      )
  }

  getAll() {
    return this.fire.list("usuarios").snapshotChanges()
      .pipe(
        map(
          dados =>
            dados.map(d => ({ key: d.payload.key, ...d.payload.val() }))
        )
      );
  }

  get(id) {
    return this.fire.object<Usuario>("usuarios/" + id).valueChanges();
  }

  remover(id) {
    return this.fire.object("usuarios/" + id).remove();
  }

  update(usuario, id) {
    return this.fire.object("usuarios/" + id).update(usuario)
  }
}
