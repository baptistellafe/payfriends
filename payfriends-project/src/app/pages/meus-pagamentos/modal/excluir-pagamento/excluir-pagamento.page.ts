import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-excluir-pagamento',
  templateUrl: './excluir-pagamento.page.html',
  styleUrls: ['./excluir-pagamento.page.scss'],
})
export class ExcluirPagamentoPage implements OnInit {

  @Input() payment: Payment;

  constructor(
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }

}
