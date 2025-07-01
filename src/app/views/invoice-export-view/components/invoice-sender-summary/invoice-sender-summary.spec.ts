import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSenderSummary } from './invoice-sender-summary';

describe('InvoiceSenderSummary', () => {
  let component: InvoiceSenderSummary;
  let fixture: ComponentFixture<InvoiceSenderSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSenderSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceSenderSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
