import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPayment } from '../../interfaces/payment.interface';
import { ISelect } from '../../interfaces/select.interface';

@Component({
  selector: 'app-payment-form',
  templateUrl: 'payment-form.component.html',
  styleUrls: ['payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentFormComponent implements OnInit {
  @Input() amount: number = 0;
  @Input() method: number = 0;
  @Output() emitter = new EventEmitter();
  public methods: ISelect[] = [];
  public paymentForm: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      amount: new FormControl(this.amount, [Validators.required]),
      method: new FormControl(this.method, [Validators.required]),
    });
    console.log('iniciar');
    this.paymentForm.valueChanges.subscribe((form: IPayment) => {
      if (!Number.isInteger(form.amount)) return;
      if (!Number.isInteger(form.method)) return;
      this.emitter.emit({ ...form })
    })
  }

}
