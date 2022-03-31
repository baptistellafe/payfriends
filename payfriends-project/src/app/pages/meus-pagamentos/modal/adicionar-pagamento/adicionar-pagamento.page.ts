import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'modal-adicionar-pagamento',
  templateUrl: './adicionar-pagamento.page.html',
  styleUrls: ['./adicionar-pagamento.page.scss'],
})
export class AdicionarPagamentoPage implements OnInit {

  @Input() payment: Payment;

  constructor() { }

  ngOnInit() {
  }

}
