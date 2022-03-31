import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPagamentoPageRoutingModule } from './editar-pagamento-routing.module';

import { EditarPagamentoPage } from './editar-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPagamentoPageRoutingModule
  ],
  declarations: [EditarPagamentoPage]
})
export class EditarPagamentoPageModule {}
