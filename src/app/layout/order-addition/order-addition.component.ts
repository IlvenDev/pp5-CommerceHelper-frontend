import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdersService } from '../../services/order/orders.service';
import { FormsService } from '../../services/form/forms.service';

@Component({
  selector: 'app-order-addition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-addition.component.html',
  styleUrl: './order-addition.component.scss'
})
export class OrderAdditionComponent {
  orderForm: FormGroup;

  constructor (
    private ordersService: OrdersService,
    private formsService: FormsService
  ) {
    this.orderForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      orderDate: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required),
      discountAmount: new FormControl(0, Validators.min(0)),
      totalAmount: new FormControl(null, [Validators.required, Validators.min(0)])
    });
    }

    onSubmit() {
      this.ordersService.createOrder(this.orderForm.value).subscribe();
      this.orderForm.disable();

      this.formsService.addFormData("orderForm", this.orderForm.value);
    }
}
