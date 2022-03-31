import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPagamentoPageRoutingModule } from './adicionar-pagamento-routing.module';

import { AdicionarPagamentoPage } from './adicionar-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPagamentoPageRoutingModule
  ],
  declarations: [AdicionarPagamentoPage]
})
export class AdicionarPagamentoPageModule {}
