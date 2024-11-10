import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Customer} from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiBaseUrl = 'http://backend.localhost/api/customers';

  constructor(private apiService: ApiService) { }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.apiService.post<Customer>(this.apiBaseUrl, customer)
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.apiService.get<Customer[]>(`${this.apiBaseUrl}/all_customers`);
  }

  
}