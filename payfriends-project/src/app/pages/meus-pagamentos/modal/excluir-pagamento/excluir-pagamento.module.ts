import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirPagamentoPageRoutingModule } from './excluir-pagamento-routing.module';

import { ExcluirPagamentoPage } from './excluir-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirPagamentoPageRoutingModule
  ],
  declarations: [ExcluirPagamentoPage]
})
export class ExcluirPagamentoPageModule {}
