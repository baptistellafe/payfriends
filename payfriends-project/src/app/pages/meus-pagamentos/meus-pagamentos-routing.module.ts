import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusPagamentosPage } from './meus-pagamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusPagamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusPagamentosPageRoutingModule {}
