import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirPagamentoPage } from './excluir-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirPagamentoPageRoutingModule {}
