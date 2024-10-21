import { Component } from '@angular/core';
import { Product } from '../../../types';
import { ProductsService } from '../../services/product/products.service';
import { ProductComponent } from '../../layout/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(
    private productService: ProductsService
  ) {}

  products: Product[] =[];
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    })
  }
}