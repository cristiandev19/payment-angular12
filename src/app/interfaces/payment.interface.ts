import { paymentMethods } from "../mock/payment.mock";

export interface IPayment {
  id?: number;
  name?: string;
  amount: number;
  method: number;
}

export interface IPaymentMethod {
  name: string;
  value: number;
  icon: string;
}

export class Payment implements IPayment {
  id?: number;
  name?: string;
  amount: number;
  method: number;

  constructor(payment: IPayment) {
    this.id = payment.id;
    this.name = payment.name;
    this.amount = payment.amount;
    this.method = payment.method;
  }

  mock() {
    const random = this.random();

    const randomMethod = paymentMethods[
      Math.floor(Math.random() * paymentMethods.length)
    ];

    return {
      id: random,
      name: 'Payment' + random,
      amount: 100,
      method: randomMethod,
    };
  }

  random() {
    let num = Math.random() * (50000) + 1;
    return Math.floor(num);
  }
}