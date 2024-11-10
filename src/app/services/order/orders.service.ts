import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Order } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiBaseUrl = 'http://backend.localhost/api/orders';

  constructor(private apiService: ApiService) { }

  createOrder(order: Order): Observable<Order> {
    return this.apiService.post<Order>(this.apiBaseUrl, order)
  }

  getAllOrders(): Observable<Order[]> {
    return this.apiService.get<Order[]>(`${this.apiBaseUrl}/all_orders`);
  }

  
}