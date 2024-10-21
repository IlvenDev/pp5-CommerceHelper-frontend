import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';
import { FormsService } from '../../services/form/forms.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private formsService: FormsService
  ) {}
}
