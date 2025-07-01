import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceiverSummary } from './invoice-receiver-summary';

describe('InvoiceReceiverSummary', () => {
  let component: InvoiceReceiverSummary;
  let fixture: ComponentFixture<InvoiceReceiverSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceReceiverSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceReceiverSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
