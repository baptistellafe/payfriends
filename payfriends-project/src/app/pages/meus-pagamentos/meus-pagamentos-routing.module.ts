import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusPagamentosPage } from './meus-pagamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusPagamentosPage
  },
  {
    path: 'adicionar-pagamento',
    loadChildren: () => import('./modal/adicionar-pagamento/adicionar-pagamento.module').then( m => m.AdicionarPagamentoPageModule)
  },
  {
    path: 'excluir-pagamento',
    loadChildren: () => import('./modal/excluir-pagamento/excluir-pagamento.module').then( m => m.ExcluirPagamentoPageModule)
  },
  {
    path: 'editar-pagamento',
    loadChildren: () => import('./modal/editar-pagamento/editar-pagamento.module').then( m => m.EditarPagamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusPagamentosPageRoutingModule {}
