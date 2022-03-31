import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPagamentoPage } from './editar-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPagamentoPageRoutingModule {}
