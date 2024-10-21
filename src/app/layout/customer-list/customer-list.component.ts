import { Component } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer/customers.service';
import { Customer } from '../../../types';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerComponent, CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  constructor(
    private customerService: CustomerService
  ) {}

  customers: Customer[] = [];
  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    })
  }
}