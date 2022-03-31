import { AdicionarPagamentoPage } from './modal/adicionar-pagamento/adicionar-pagamento.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPagamentoPage } from './modal/editar-pagamento/editar-pagamento.page';
import { ExcluirPagamentoPage } from './modal/excluir-pagamento/excluir-pagamento.page';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from './../../../app/models/payment';
import { Router } from '@angular/router';

@Component({
  selector: 'payfriends-meus-pagamentos',
  templateUrl: './meus-pagamentos.page.html',
  styleUrls: ['./meus-pagamentos.page.scss'],
})
export class MeusPagamentosPage implements OnInit {

  payments: Payment[] = [];
  user: string = null
  hasUser: boolean = false;
  showItens: number = 5;

  constructor(
    private modalCtrl : ModalController,
    private paymentService : PaymentService,
    private route : Router
  ) { }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    this.paymentService.getPagamentos().subscribe((response) => {
      this.payments = response
    })
  }

  searchByUser() {
    if (this.user == null || this.user == '') {
      this.ngOnInit()
    } else {
      this.payments = this.payments.filter(res => {
        return res.user.toLocaleLowerCase().match(this.user.toLocaleLowerCase());
      })
    }
  }

  async adicionarPagamento() {
    const modal = await this.modalCtrl.create({
      component: AdicionarPagamentoPage,
      cssClass: 'modal-adicionar-pagamento',
      backdropDismiss: false,
    });
    return await modal.present();
  }

  async excluirPagamento(payment) {
    const modal = await this.modalCtrl.create({
      component: ExcluirPagamentoPage,
      cssClass: 'modal-excluir-pagamento',
      backdropDismiss: false,
      componentProps: {
        payment: payment
      }
    });
    return await modal.present();
  }

  async editarPagamento(payment) {
    const modal = await this.modalCtrl.create({
      component: EditarPagamentoPage,
      cssClass: 'modal-editar-pagamento',
      backdropDismiss: false,
      componentProps: {
        payment: payment
      }
    });
    return await modal.present();
  }

  orderBy(option) {
    this.paymentService.orderBy(option);
  }

}
