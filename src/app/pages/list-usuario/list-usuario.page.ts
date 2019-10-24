import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.page.html',
  styleUrls: ['./list-usuario.page.scss'],
})
export class ListUsuarioPage implements OnInit {

  protected usuarios: any;

  constructor(
    protected usuarioService: UsuarioService,
    protected router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

  editar(key) {
    this.router.navigate(['/tabs/addUsuario', key]);
  }

  async doRefresh(event) {
    console.log('Begin async operation');
    this.usuarios = await this.usuarioService.getAll();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);

  }


  async remover(key) {
    const alert = await this.alertController.create({
      header: 'Apagar!',
      message: 'Deseja apagar pdados definitivamente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.usuarioService.remover(key);
          }
        }
      ]
    });

    await alert.present();
  }
}