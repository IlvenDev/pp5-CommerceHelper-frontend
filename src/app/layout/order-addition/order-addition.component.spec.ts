import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdditionComponent } from './order-addition.component';

describe('OrderAdditionComponent', () => {
  let component: OrderAdditionComponent;
  let fixture: ComponentFixture<OrderAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
