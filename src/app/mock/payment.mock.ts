import { IPaymentMethod } from "../interfaces/payment.interface";

export const paymentMethods: IPaymentMethod[] = [
  {
    name: 'Cash',
    value: 1,
    icon: 'attach_money',
  },
  {
    name: 'Card',
    value: 2,
    icon: 'credit_card',
  },
  {
    name: 'Bank',
    value: 3,
    icon: 'account_balance'
  }
];
