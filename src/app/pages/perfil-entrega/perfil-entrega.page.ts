import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/app/model/entrega';
import { ActivatedRoute } from '@angular/router';
import { EntregaService } from 'src/app/services/entrega.service';

@Component({
  selector: 'app-perfil-entrega',
  templateUrl: './perfil-entrega.page.html',
  styleUrls: ['./perfil-entrega.page.scss'],
})
export class PerfilEntregaPage implements OnInit {

  protected entrega: Entrega = new Entrega;
  protected id: string = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };
  
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected entregaService: EntregaService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.entregaService.get(this.id).subscribe(
        res => {
          this.entrega = res
        },
        erro => this.id = null
      )
    }
  }
}