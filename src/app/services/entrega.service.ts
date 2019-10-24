import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Entrega } from '../model/entrega';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EntregaService {
  constructor(
    protected fire: AngularFireDatabase
  ) { }

  save(entrega) {
    return this.fire.list("entregas").push(entrega);
  }

  getAll() {
    return this.fire.list("entregas").snapshotChanges()
      .pipe(
        map(
          dados =>
            dados.map(d => ({ key: d.payload.key, ...d.payload.val() }))
        )
      );
  }

  get(id) {
    return this.fire.object<Entrega>("entregas/" + id).valueChanges();
  }

  remover(id) {
    return this.fire.object("entregas/" + id).remove();
  }

  update(entrega, id) {
    return this.fire.object("entregas/" + id).update(entrega);
  }
}
