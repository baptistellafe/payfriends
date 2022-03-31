import { AdicionarPagamentoPage } from './modal/adicionar-pagamento/adicionar-pagamento.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPagamentoPage } from './modal/editar-pagamento/editar-pagamento.page';
import { ExcluirPagamentoPage } from './modal/excluir-pagamento/excluir-pagamento.page';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from './../../../app/models/payment';

@Component({
  selector: 'payfriends-meus-pagamentos',
  templateUrl: './meus-pagamentos.page.html',
  styleUrls: ['./meus-pagamentos.page.scss'],
})
export class MeusPagamentosPage implements OnInit {

  payments: Payment[];

  constructor(
    private modalCtrl : ModalController,
    private paymentService : PaymentService
  ) { }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    this.paymentService.getPagamentos().subscribe((payments: Payment[]) => {
      this.payments = payments
    })
  }

  async adicionarPagamento() {
    const modal = await this.modalCtrl.create({
      component: AdicionarPagamentoPage,
      cssClass: 'modal-adicionar-pagamento'
    });
    return await modal.present();
  }

  async excluirPagamento() {
    const modal = await this.modalCtrl.create({
      component: ExcluirPagamentoPage,
      cssClass: 'modal-excluir-pagamento'
    });
    return await modal.present();
  }

  async editarPagamento() {
    const modal = await this.modalCtrl.create({
      component: EditarPagamentoPage,
      cssClass: 'modal-editar-pagamento'
    });
    return await modal.present();
  }

}
