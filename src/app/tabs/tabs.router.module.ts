import { PerfilUsuarioPage } from './../pages/perfil-usuario/perfil-usuario.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'addUsuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'addUsuario/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'listUsuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-usuario/list-usuario.module').then(m => m.ListUsuarioPageModule)
          }
        ]
      },

      {
        path: 'addEntrega',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-entrega/add-entrega.module').then(m => m.AddEntregaPageModule)
          }
        ]
      },
      {
        path: 'addEntrega/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-entrega/add-entrega.module').then(m => m.AddEntregaPageModule)
          }
        ]
      },
      {
        path: 'listEntrega',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-entrega/list-entrega.module').then(m => m.ListEntregaPageModule)
          }
        ]
      },
      {
        path: 'perfilEntrega/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-entrega/perfil-entrega.module').then(m => m.PerfilEntregaPageModule)
          }
        ]
      },

      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'perfilUsuario/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
