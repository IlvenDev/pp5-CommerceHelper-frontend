import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdersService } from '../../services/order/orders.service';
import { Order } from '../../../types';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  constructor(
    private orderService: OrdersService
  ) {}

  orders: Order[] = [];
  ngOnInit() {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
    })
  }

}
