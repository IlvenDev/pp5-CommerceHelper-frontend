import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { ProductAdditionComponent } from './layout/product-addition/product-addition.component';
import { OrderAdditionComponent } from './layout/order-addition/order-addition.component';
import { OrderListComponent } from './layout/order-list/order-list.component';
import { CustomerListComponent } from './layout/customer-list/customer-list.component';
import { CustomerAdditionComponent } from './layout/customer-addition/customer-addition.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/add-product',
        component: ProductAdditionComponent,
    },
    {
        path: 'customers',
        component: CustomerListComponent,
    },
    {
        path: 'customers/add-customer',
        component: CustomerAdditionComponent
    },
    {
        path: 'orders',
        component: OrderListComponent,
    },
    {
        path: 'orders/add-order',
        component: OrderAdditionComponent,
    }
    
];
