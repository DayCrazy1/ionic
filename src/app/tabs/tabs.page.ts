import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
protected quantUsuario:number = 0;

  constructor(
    protected usuarioService:UsuarioService
  ) {
    this.usuarioService.getAll().subscribe(
      res=>{
        this.quantUsuario = res.length
      }
    );


  }

}
