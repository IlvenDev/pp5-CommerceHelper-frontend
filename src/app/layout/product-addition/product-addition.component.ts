import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/product/products.service';
import { FormsService } from '../../services/form/forms.service';

@Component({
  selector: 'app-product-addition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-addition.component.html',
  styleUrl: './product-addition.component.scss'
})
export class ProductAdditionComponent {
  productForm: FormGroup;
  isSubmitDisabled = false;

  constructor(
    private productService: ProductsService,
    private formsService: FormsService
  ) {

    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      manufacturer: new FormControl(''),
      supply: new FormControl(null, [Validators.required, Validators.min(0)]),
      isFeatured: new FormControl(false)
    });
  }

  onSubmit() {
    this.productService.createProduct(this.productForm.value).subscribe(response => {
      this.formsService.addFormData("productForm", this.productForm.value);
    });
    
    this.productForm.disable();
    this.isSubmitDisabled = true;
  }

}