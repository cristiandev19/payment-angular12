export interface IPayment {
  id?: number;
  name?: string;
  amount: number;
  type: number;
}

export interface IPaymentType {
  name: string;
  value: number;
  icon: string;
}