import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer/customers.service';
import { FormsService } from '../../services/form/forms.service';

@Component({
  selector: 'app-customer-addition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-addition.component.html',
  styleUrl: './customer-addition.component.scss'
})
export class CustomerAdditionComponent {
  customerForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formsService: FormsService
  ) {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      country: new FormControl(''),
      birthDate: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.customerService.createCustomer(this.customerForm.value).subscribe();
    this.customerForm.disable();
    
    this.formsService.addFormData("customerForm", this.customerForm.value);
  }
  
}
