import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/app/model/entrega';
import { EntregaService } from 'src/app/services/entrega.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-entrega',
  templateUrl: './add-entrega.page.html',
  styleUrls: ['./add-entrega.page.scss'],
})
export class AddEntregaPage implements OnInit {

  protected entrega: Entrega = new Entrega;
  protected id: string = null;
  protected preview: string[] = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };

  constructor(
    protected entregaService: EntregaService,
    protected alertController: AlertController,
    protected router: Router,
    protected activedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.localAtual()
  }

  //função chamada toda vez que a pagina recebe foco;
  ionViewWillEnter() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.entregaService.get(this.id).subscribe(
        res => {
          this.entrega = res
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    if (!this.preview) {
      this.presentAlert("Ops!", "Tire sua foto!")
    } else {
      this.entrega.fotos = this.preview;
      if (this.id) {
        this.entregaService.update(this.entrega, this.id).then(
          res => {
            this.presentAlert("Aviso", "Atualizado!");
            form.reset();
            this.entrega = new Entrega;
            this.router.navigate(['/tabs/listEntrega']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("Erro", "Erro ao atualizar!");
          }
        )
      } else {
        this.entregaService.save(this.entrega).then(
          res => {
            this.presentAlert("Aviso", "Cadastrado!");
            form.reset();
            this.entrega = new Entrega;
            this.router.navigate(['/tabs/listEntrega']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("Erro", "Erro ao cadastrar!");
          }
        )
      }
    }
  }
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

  localAtual() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.entrega.lat = resp.coords.latitude
      this.entrega.lng = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      if (!this.preview) this.preview = [];
      this.preview.push(base64Image);
    }, (err) => {
      // Handle error
    });
  }

  async removerFoto(index){
    const alert = await this.alertController.create({
      header: 'Apagar!',
      message: 'Deseja apagar a foto definitivamente?',
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
            this.preview.splice(index,1)
          }
        }
      ]
    });

  }
}