import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddUsuarioPage } from './add-usuario.page';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BrMaskerModule
  ],
  declarations: [AddUsuarioPage]
})
export class AddUsuarioPageModule {}
