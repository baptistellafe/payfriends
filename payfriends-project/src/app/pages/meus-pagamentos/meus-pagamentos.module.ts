import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusPagamentosPageRoutingModule } from './meus-pagamentos-routing.module';

import { MeusPagamentosPage } from './meus-pagamentos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusPagamentosPageRoutingModule,
    SharedModule
  ],
  declarations: [MeusPagamentosPage]
})
export class MeusPagamentosPageModule {}
