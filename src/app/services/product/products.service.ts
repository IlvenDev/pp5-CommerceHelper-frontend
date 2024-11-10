import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiBaseUrl = 'http://backend.localhost/api/products';

  constructor(private apiService: ApiService) { }

  createProduct(product: Product): Observable<Product> {
    return this.apiService.post<Product>(this.apiBaseUrl, product)
  }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>(`${this.apiBaseUrl}/all_products`);
  }

  
}
