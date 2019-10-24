import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntregaService } from 'src/app/services/entrega.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-entrega',
  templateUrl: './list-entrega.page.html',
  styleUrls: ['./list-entrega.page.scss'],
})
export class ListEntregaPage implements OnInit {

  protected entregas: any;

  constructor(
    protected entregaService: EntregaService,
    protected router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.entregas = this.entregaService.getAll();
  }

  editar(key) {
    this.router.navigate(['/tabs/addEntrega', key]);
  }

  async doRefresh(event) {
    console.log('Begin async operation');
    this.entregas = await this.entregaService.getAll();

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
            this.entregaService.remover(key);
          }
        }
      ]
    });

    await alert.present();
  }
}