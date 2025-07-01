import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTotal } from './invoice-total';

describe('InvoiceTotal', () => {
  let component: InvoiceTotal;
  let fixture: ComponentFixture<InvoiceTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTotal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
