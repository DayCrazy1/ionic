import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  protected usuario: Usuario = new Usuario;
  protected id: string = null;

  constructor(
    protected activatedRoute:ActivatedRoute,
    protected usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res
        },
        erro => this.id = null
      )
    }
  }

}
