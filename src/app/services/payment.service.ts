import { Injectable } from '@angular/core';
import { paymentMethods } from '../mock/payment.mock';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  backendUrl = 'fake.com';

  constructor() {

  }

  getPaymentMethods() {
    return paymentMethods;
  }
}