import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';
@Component({
  selector: 'app-editar-pagamento',
  templateUrl: './editar-pagamento.page.html',
  styleUrls: ['./editar-pagamento.page.scss'],
})
export class EditarPagamentoPage implements OnInit {

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
