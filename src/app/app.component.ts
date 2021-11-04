import { Component } from '@angular/core';
import { IPayment } from './interfaces/payment.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-boilerplate';
  image: string =
  'https://imgr.search.brave.com/dLFvV5ztz5kbp_c4vrbWpKVxUs15lVWRhLjI412jtSc/fit/1200/1200/ce/1/aHR0cHM6Ly9nZXQu/cHhoZXJlLmNvbS9w/aG90by9tYW4tcGVy/c29uLW1hbGUtcG9y/dHJhaXQtcHJvZmVz/c2lvbmFsLXByb2Zl/c3Npb24tc3BlYWtl/ci1zZW5pb3ItY2l0/aXplbi1lbGRlci1m/YWNlLWV4cHJlc3Np/b24tYWR1bHQtYnVz/aW5lc3MtZXhlY3V0/aXZlLWJlbi1rbmFw/ZW4tMTA2ODY1Mi5q/cGc';
  name: string = 'Cristian Sotomayor';
  panelOpenState: boolean = true;

  payments: IPayment[] = [
    {
      id: 1,
      amount: 200,
      type: 1,
      name: 'Payment 1',
    },
    {
      id: 2,
      amount: 250,
      type: 2,
      name: 'Payment 2',
    },
    {
      id: 3,
      amount: 350,
      type: 3,
      name: 'Payment 3',
    },
    {
      id: 4,
      amount: 150,
      type: 1,
      name: 'Payment 4',
    },
  ];

  trackPayment(index: any, payment: any) {
    return payment ? payment.id : undefined;
  }

  handleChange(data: IPayment, id: number | undefined) {
    console.log('data', data, id);
    this.payments = this.payments.map((payment) => {
      return payment.id == id ? {
        ...payment,
        ...data,
      } : {
        ...payment,
      };
    });
  }

  getIcon(type: number) {
    switch (type) {
      case 1:
        return 'attach_money';
      case 2:
        return 'credit_card';
      case 3:
        return 'account_balance';
      default:
        return ''
    }
  }

  getTotal() {
    return this.payments
      .reduce((total, payment) => total + payment.amount, 0);
  }
}
