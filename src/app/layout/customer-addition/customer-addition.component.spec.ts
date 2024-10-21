import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdditionComponent } from './customer-addition.component';

describe('CustomerAdditionComponent', () => {
  let component: CustomerAdditionComponent;
  let fixture: ComponentFixture<CustomerAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
