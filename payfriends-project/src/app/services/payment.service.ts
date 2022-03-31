import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Payment } from './../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = 'http://localhost:3000/pagamentos' // API FAKE GERADA COM O JSON SERVER

  constructor(
    private http : HttpClient
  ) { }
  
  getPagamentos(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.url)
  }

}
