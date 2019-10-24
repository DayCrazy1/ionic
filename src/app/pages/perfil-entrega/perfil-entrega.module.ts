import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEntregaPage } from './perfil-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEntregaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilEntregaPage]
})
export class PerfilEntregaPageModule {}
