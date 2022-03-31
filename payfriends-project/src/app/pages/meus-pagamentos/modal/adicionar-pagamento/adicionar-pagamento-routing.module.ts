import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPagamentoPage } from './adicionar-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPagamentoPageRoutingModule {}
