import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdicionarPagamentoComponent } from './modal/adicionar-pagamento/adicionar-pagamento.component';
import { ExcluirPagamentoComponent } from './modal/excluir-pagamento/excluir-pagamento.component';

@Component({
  selector: 'payfriends-meus-pagamentos',
  templateUrl: './meus-pagamentos.page.html',
  styleUrls: ['./meus-pagamentos.page.scss'],
})
export class MeusPagamentosPage implements OnInit {

  constructor(
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }

  async adicionarPagamento() {
    const modal = await this.modalCtrl.create({
      component: AdicionarPagamentoComponent,
      cssClass: 'modal-adicionar-pagamento'
    });
    return await modal.present();
  }

  async excluirPagamento() {
    const modal = await this.modalCtrl.create({
      component: ExcluirPagamentoComponent,
      cssClass: 'modal-excluir-pagamento'
    });
    return await modal.present();
  }

  async editarPagamento() {
    const modal = await this.modalCtrl.create({
      component: ExcluirPagamentoComponent,
      cssClass: 'modal-editar-pagamento'
    });
    return await modal.present();
  }

}
